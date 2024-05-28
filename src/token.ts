// auth/token.ts
import axios from 'axios';
import { ITokenResponse } from './type/token.interface';
import { IClientData } from './type/global.interface';

/**
 * 網址參數取得token
 * @param authCode 網址code參數
 */
export async function exchangeCodeForToken(authCode: string) {
    console.log("exchangeCodeForToken");
    const codeVerifier = sessionStorage.getItem('code_verifier');
    if (!codeVerifier) throw new Error('Code verifier not found in session storage');

    /**客戶端資料 */
    const clientData: IClientData = JSON.parse(await window.electronAPI.getClientData());
    console.log("clientData:", clientData);
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const params = new URLSearchParams();
    params.append('client_id', clientData.clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', authCode);
    params.append('redirect_uri', clientData.redirectUri);
    params.append('code_verifier', codeVerifier);

    try {
        /**spotify 回傳 */
        const response = await axios.post(tokenUrl, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const token: ITokenResponse = response.data;
        // console.log('Access Token:', token.access_token);
        // console.log('Refresh Token:', token.refresh_token);
        // console.log('Expires In:', token.expires_in);

        // 存至localStorage後續取用
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('refresh_token', token.refresh_token);
        localStorage.setItem('expires_in', token.expires_in.toString());
    } catch (error) {
        console.error('Error exchanging code for token:', error);
    }
}
