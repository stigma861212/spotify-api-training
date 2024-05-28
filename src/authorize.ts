import { generateCodeVerifier, generateCodeChallenge } from './pkce';
import { IClientData } from './type/global.interface';

// NOTE: https://developer.spotify.com/
/**驗證比對亂碼 */
const state = generateCodeVerifier(16);

/**導向SpotifyAuthorize驗證頁面 */
export async function redirectToSpotifyAuthorize() {
    /**亂數隨機碼 */
    const codeVerifier = generateCodeVerifier();
    /**base64格式亂數隨機碼 */
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // 存至sessionStorage後續取用
    sessionStorage.setItem('code_verifier', codeVerifier);
    sessionStorage.setItem('state', state);

    /**客戶端資料 */
    const clientData: IClientData = JSON.parse(await window.electronAPI.getClientData());

    console.log("authorize", clientData);

    const authorizeUrl = new URL('https://accounts.spotify.com/authorize');
    authorizeUrl.searchParams.append('client_id', clientData.clientId);
    authorizeUrl.searchParams.append('response_type', 'code');
    authorizeUrl.searchParams.append('redirect_uri', clientData.redirectUri);
    authorizeUrl.searchParams.append('code_challenge_method', 'S256');
    authorizeUrl.searchParams.append('code_challenge', codeChallenge);
    authorizeUrl.searchParams.append('state', state);
    authorizeUrl.searchParams.append('scope', 'user-read-private user-read-email');

    window.location.href = authorizeUrl.toString();
}
