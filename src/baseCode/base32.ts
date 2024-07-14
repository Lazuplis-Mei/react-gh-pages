
const Base32_RFC4648 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';


export function base32Encode(bytes: Uint8Array): string {

    if (bytes.length == 0)
        return '';
    var length: number = Math.ceil(bytes.length / 5) * 8;

    var span: string[] = new Array<string>(length);
    var nextCode = 0, bitsRemaining = 5;
    var index = 0;

    for (var value of bytes) {
        console.log(value);
        nextCode = (nextCode | value >> (8 - bitsRemaining));
        if (nextCode > 255) {
            nextCode %= 256;
        }
        span[index++] = Base32_RFC4648.charAt(nextCode);

        if (bitsRemaining < 4) {
            nextCode = ((value >> (3 - bitsRemaining)) & 0B11111);
            if (nextCode > 255) {
                nextCode %= 256;
            }
            span[index++] = Base32_RFC4648.charAt(nextCode);;
            bitsRemaining += 5;
        }

        bitsRemaining -= 3;
        nextCode = ((value << bitsRemaining) & 0B11111);
        if (nextCode > 255) {
            nextCode %= 256;
        }
    }

    if (index !== length) {
        span[index++] = Base32_RFC4648.charAt(nextCode);
        for (let i = index; i < span.length; i++) {
            span[i] = '=';
        }
    }

    return span.join('');
}

function charToValue(character: string): number {
    var charCode = character.charCodeAt(0);
    console.log(charCode);
    if (charCode >= 65 && charCode <= 90) {
        return charCode - 65;
    }
    else if (charCode >= 97 && charCode <= 122) {
        return charCode - 97;
    }
    else if (charCode >= 50 && charCode <= 55) {
        return charCode + 26 - 50;
    }
    throw new Error('非Base32字符');
}


export function base32Decode(str: string) {
    if (str === '')
        return new Uint8Array();

    var span: Number[] = new Array<Number>(str.length * 5 / 8);

    var currentByte = 0, bitsRemaining = 8;
    var index = 0;

    for (const character of str) {
        if (character === '=')
            break;

        var mask = 0;
        var value = charToValue(character);
        if (bitsRemaining > 5) {
            mask = value << (bitsRemaining -= 5);
            currentByte = (currentByte | mask);
            if (currentByte > 255) {
                currentByte %= 256;
            }
        }
        else {
            mask = value >>> (5 - bitsRemaining);
            currentByte = (currentByte | mask);
            if (currentByte > 255) {
                currentByte %= 256;
            }
            span[index++] = currentByte;
            currentByte = (value << (bitsRemaining += 3));
            if (currentByte > 255) {
                currentByte %= 256;
            }
        }

    }

    if (index !== span.length)
        span[index] = currentByte;

    return new Uint8Array(span as any);
}
