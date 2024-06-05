import { createApp } from 'vue';
import App from './App.vue';
import { IClientData } from '../type/global.interface';
import { exchangeCodeForToken } from '../token';

createApp(App).mount('#app');

/**客戶端資料 */
let clientData: IClientData;

window.electronAPI.oauthData((_event, verifier, state) => {
    console.log("!!!oauthData", verifier, state);
    sessionStorage.setItem('code_verifier', verifier);
    sessionStorage.setItem('state', state);
})

// dom載入完成時觸發檢查
document.addEventListener('DOMContentLoaded', async () => {
    console.log("oauth DOMContentLoaded", window.location.href);

    if (!clientData) {
        clientData = JSON.parse(await window.electronAPI.getClientData());
    }

    /**網址所有參數 */
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    /**網址code參數 */
    const authCode = urlParams.get('code');
    /**網址state參數 */
    const state = urlParams.get('state');
    /**網址state參數 */
    const storedState = sessionStorage.getItem('state');

    const error = urlParams.get('error');

    if (error) {
        window.electronAPI.oauthComplete(false);
        return;
    }

    // 檢查狀態參數以防止 CSRF 攻擊
    if (!state || state != storedState) {
        console.error('State parameter exit or not match');
        return;
    }

    if (authCode) {
        await exchangeCodeForToken(authCode).catch(console.error);
        window.history.pushState({}, null, '/');
        checkStore();
    }
});

/**確認token存儲狀態 */
function checkStore() {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem('refresh_token');
    const expiresIn = localStorage.getItem('expires_in');

    if (accessToken && refreshToken && expiresIn) {
        console.log("access go in");
        window.electronAPI.oauthComplete(true);
    }
}