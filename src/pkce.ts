
/**
 * 取得亂數隨機碼
 * @param length 隨機碼長度，預設128
 * @returns 隨機碼
 */
export function generateCodeVerifier(length: number = 128): string {
    /**可隨機使用字符 */
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * 隨機碼轉換成SHA256後回傳base64格式
 * @param verifier 隨機碼
 * @returns base64格式
 */
export async function generateCodeChallenge(verifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return base64urlEncode(new Uint8Array(digest));
}

function base64urlEncode(buffer: Uint8Array): string {
    let base64 = btoa(String.fromCharCode.apply(null, buffer as unknown as number[]));
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
