/**
 * QuotedPrintable转换类
 */
export class QuotedPrintable {

    static hexUpper = '0123456789ABCDEF';

    static base36Number(character: string): number {
        let code = character.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return code - 48;
        }
        else if (code >= 97 && code <= 122) {
            return code - 97 + 10;
        }
        else if (code >= 65 && code <= 90) {
            return code - 65 + 10;
        }
        throw new Error('不正确的字符');
    }

    static makeByte(high: number, low: number): number {
        return ((high << 4) | low);
    }

    /**
     * 编码QuotedPrintable
     */
    public static encode(input: string): string {
        let result = '';
        let encoder = new TextEncoder();
        for (const character of input) {
            let code = character.charCodeAt(0);
            if (code <= 0x7F) {
                if (character !== '=' && code >= 33 && code <= 126) {
                    result += character;
                    continue;
                }
                result += '=';
                result += QuotedPrintable.hexUpper[code >> 4]
                result += QuotedPrintable.hexUpper[code & 0xF]
                continue;
            }
            var span = encoder.encode(character);
            for (const value of span) {
                result += '=';
                result += QuotedPrintable.hexUpper[value >> 4]
                result += QuotedPrintable.hexUpper[value & 0xF]
            }
        }
        return result;
    }

    /**
     * 解码QuotedPrintable
     */
    public static decode(input: string): string {
        let matches = [...(input.matchAll(/(?<Hex>(=[0-9a-fA-F]{2})+)|[^=]+/g))];
        let result = '';
        let decoder = new TextDecoder('utf-8');

        for (const match of matches) {
            if (match.groups && match.groups.Hex) {
                let span = match.groups.Hex;
                let length = span.length / 3;
                let bytes = new Uint8Array(length);
                for (let i = 0; i < span.length; i++) {
                    let high = QuotedPrintable.base36Number(span[++i]);
                    let low = QuotedPrintable.base36Number(span[++i]);
                    bytes[Math.floor(i / 3)] = QuotedPrintable.makeByte(high, low);
                }
                result += decoder.decode(bytes);
                continue;
            }
            result += match[0];
        }
        return result;
    }
}
