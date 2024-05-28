/**spotify回傳data格式 */
export interface ITokenResponse {
    /**訪問令牌 */
    access_token: string,
    /**刷新令牌 */
    refresh_token: string,
    /**過期時間 */
    expires_in: string,
}