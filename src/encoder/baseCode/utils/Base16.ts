/**
 * Base16转换类
 */
export class Base16 {

    /**
     * 将Uint8Array转换成字符串形式
     */
    public static toBase16(bytes: Uint8Array): string {
        let result = '';
        for (const value of bytes) {
            result += value.toString(16).toUpperCase().padStart(2, '0');
        }
        return result;
    }

    /**
     * 将字符串形式转换成Uint8Array
     */
    public static fromBase16(str: string): Uint8Array {

        let nums: number[] = [];
        str.replace(/[0-9a-fA-F]{2}/g, function (a): string {
            nums.push(parseInt(a, 16));
            return '';
        });
        return new Uint8Array(nums);
    }
}