/**
 * Base100转换类
 */
export class Base100 {

    /**
     * 将Uint8Array转换成Base100字符串
     */
    public static toBase100(bytes: Uint8Array): string {

        let size = bytes.length * 4;
        let buffer = new Uint8Array(size);

        for (let i = 0; i < bytes.length; i++) {
            let j = 4 * i;
            buffer[j++] = 0xF0;
            buffer[j++] = 0x9F;
            let quotient = Math.floor((bytes[i] + 55) / 0x40);
            let remainder = bytes[i] + 55 - quotient * 0x40;
            buffer[j++] = quotient + 0x8F;
            buffer[j] = remainder + 0x80;
        }
        return new TextDecoder('utf-8').decode(buffer);

    }

    /**
     * 将Base100字符串转换成Uint8Array
     */
    public static fromBase100(str: string): Uint8Array {

        let buffer = new TextEncoder().encode(str);
        let count = buffer.byteLength;
        if (count % 4 !== 0) {
            throw new Error('不正确的长度');
        }
        for (let i = 0, temp = 0; i < buffer.byteLength; i++) {
            if (i % 4 == 2) {
                temp = ((buffer[i] - 0x8F) << 6);
                if (temp > 255) {
                    temp %= 256;
                }
            }
            else if (i % 4 == 3) {
                buffer[Math.floor(i / 4)] = (buffer[i] - 0xB7 + temp);
            }
        }
        console.log(buffer);

        return buffer.slice(0, count / 4);
    }
}
