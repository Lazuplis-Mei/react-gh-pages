/**
 * Base64转换类
 */
export class Base64 {

    /**
     * 将Uint8Array转换成Base64字符串
     */
    public static toBase64(bytes: Uint8Array): string {
        return btoa(String.fromCharCode(...bytes));

    }

    /**
     * 将Base64字符串转换成Uint8Array
     */
    public static fromBase64(str: string): Uint8Array {
        return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
    }
}
