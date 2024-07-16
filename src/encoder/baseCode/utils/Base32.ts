/**
 * Base32转换类
 */
export class Base32 {

    static Base32_RFC4648 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

    static charToValue(character: string): number {
        let charCode = character.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            return charCode - 65;
        }
        else if (charCode >= 97 && charCode <= 122) {
            return charCode - 97;
        }
        else if (charCode >= 50 && charCode <= 55) {
            return charCode + 26 - 50;
        }
        throw new Error('出现非Base32字符');
    }

    /**
     * 将Uint8Array转换成Base32字符串
     */
    public static toBase32(bytes: Uint8Array): string {
        if (bytes.length == 0)
            return '';
        let length: number = Math.ceil(bytes.length / 5) * 8;

        let span: string[] = new Array<string>(length);
        let nextCode = 0, bitsRemaining = 5;
        let index = 0;

        for (let value of bytes) {
            console.log(value);
            nextCode = (nextCode | value >> (8 - bitsRemaining));
            if (nextCode > 255) {
                nextCode %= 256;
            }
            span[index++] = Base32.Base32_RFC4648.charAt(nextCode);

            if (bitsRemaining < 4) {
                nextCode = ((value >> (3 - bitsRemaining)) & 0B11111);
                if (nextCode > 255) {
                    nextCode %= 256;
                }
                span[index++] = Base32.Base32_RFC4648.charAt(nextCode);;
                bitsRemaining += 5;
            }

            bitsRemaining -= 3;
            nextCode = ((value << bitsRemaining) & 0B11111);
            if (nextCode > 255) {
                nextCode %= 256;
            }
        }

        if (index !== length) {
            span[index++] = Base32.Base32_RFC4648.charAt(nextCode);
            for (let i = index; i < span.length; i++) {
                span[i] = '=';
            }
        }

        return span.join('');
    }

    /**
     * 将Base32字符串转换成Uint8Array
     */
    public static fromBase32(str: string): Uint8Array {
        if (str === '')
            return new Uint8Array();

        let length = str.length * 5 / 8;
        if (length !== Math.floor(length)) {
            throw new Error('不正确的长度');
        }
        let span: Number[] = new Array<Number>(length);

        let currentByte = 0, bitsRemaining = 8;
        let index = 0;

        for (const character of str) {
            if (character === '=')
                break;

            let mask = 0;
            let value = Base32.charToValue(character);
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
}
