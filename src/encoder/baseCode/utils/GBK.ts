/**
 * GBK转换类
 */
export class GBK {

    static table: Uint16Array
    static initGbkTable() {
        const ranges = [
            [0xA1, 0xA9, 0xA1, 0xFE],
            [0xB0, 0xF7, 0xA1, 0xFE],
            [0x81, 0xA0, 0x40, 0xFE],
            [0xAA, 0xFE, 0x40, 0xA0],
            [0xA8, 0xA9, 0x40, 0xA0],
            [0xAA, 0xAF, 0xA1, 0xFE],
            [0xF8, 0xFE, 0xA1, 0xFE],
            [0xA1, 0xA7, 0x40, 0xA0],
        ]
        const codes = new Uint16Array(23940)
        let i = 0

        for (const [b1Begin, b1End, b2Begin, b2End] of ranges) {
            for (let b2 = b2Begin; b2 <= b2End; b2++) {
                if (b2 !== 0x7F) {
                    for (let b1 = b1Begin; b1 <= b1End; b1++) {
                        codes[i++] = b2 << 8 | b1
                    }
                }
            }
        }
        GBK.table = new Uint16Array(65536)
        GBK.table.fill(0xFFFF)

        const str = new TextDecoder('gbk').decode(codes)
        for (let i = 0; i < str.length; i++) {
            GBK.table[str.charCodeAt(i)] = codes[i]
        }
    }

    /**
     * 编码GBK字符串
     */
    public static gbkEncode(str: string): Uint8Array {

        if (!GBK.table) {
            this.initGbkTable();
        }

        const bytes = new Uint8Array(str.length * 2)
        let n = 0

        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i)
            if (code < 0x80) {
                bytes[n++] = code
            } else {
                const gbk = GBK.table[code]
                bytes[n++] = gbk & 0xFF
                bytes[n++] = gbk >> 8
            }
        }
        return bytes.subarray(0, n)
    }

    /**
     * 解码GBK字符串
     */
    public static gbkDecode(bytes: Uint8Array): string {
        return new TextDecoder('gbk').decode(bytes);
    }
}
