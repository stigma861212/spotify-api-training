import { redirectToSpotifyAuthorize } from './authorize';
import { exchangeCodeForToken } from './token';
import { Page } from './enums/pageStatus';

import{createApp} from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

//#region 添加contextBridge所需監聽、發送事件
window.electronAPI.testPath((_event, value) => {
    console.log("testPath", value);
})
//#endregion

// dom載入完成時觸發檢查
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded", window.location.href);

    // TODO:需檢查當前localStorage有沒有資料，有就要直接跳轉頁面過去
    checkStore();
    handleRedirect();
});

// 驗證按鈕點擊功能
document.getElementById('loginButton').addEventListener('click', () => {
    redirectToSpotifyAuthorize();
    console.log("click");
    // TEMP:
    // window.electronAPI.switchPage("indexNew.html");
});

function checkStore() {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem('refresh_token');
    const expiresIn = localStorage.getItem('expires_in');

    if (accessToken && refreshToken && expiresIn) {
        console.log("have join this experience");
        window.electronAPI.switchPage(Page.MainPage);
    }
}

async function handleRedirect() {
    console.log("handleRedirect");

    /**網址所有參數 */
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    /**網址code參數 */
    const authCode = urlParams.get('code');
    /**網址state參數 */
    const state = urlParams.get('state');
    /**網址state參數 */
    const storedState = sessionStorage.getItem('state');

    console.log("state", state);
    console.log("storedState", storedState);
    console.log("authCode", authCode);

    // 檢查狀態參數以防止 CSRF 攻擊
    if (!state || state != storedState) {
        console.error('State parameter exit or not match');
        return;
    }

    if (authCode) {
        await exchangeCodeForToken(authCode).catch(console.error);
        window.history.pushState({}, null, '/');
        checkStore();

        // // TEMP: 待移轉
        // const getUserInfo = async (accessToken: string) => {
        //     try {
        //         const response = await axios.get('https://api.spotify.com/v1/me', {
        //             headers: {
        //                 Authorization: `Bearer ${accessToken}`
        //             }
        //         });
        //         return response.data;
        //     } catch (error) {
        //         console.error('Error fetching user info:', error);
        //         throw error;
        //     }
        // };

        // // NOTE:取得使用者資料
        // getUserInfo(accessToken).then(data => {
        //     console.log("data", data);
        // });
    }
}