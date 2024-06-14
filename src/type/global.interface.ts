// https://developer.spotify.com/dashboard
/**main回傳object格式 */
export interface IClientData {
    /**客戶端Id */
    clientId: string;
    /**重導向網址 */
    redirectUri: string;
}

export interface ISize {
    width: number;
    height: number;
}