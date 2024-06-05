import { redirectToSpotifyAuthorize } from './authorize';
import { Page } from '../enums/pageStatus';

import { createApp } from 'vue';
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
    checkStore();
});

// 驗證按鈕點擊功能
document.getElementById('loginButton').addEventListener('click', () => {
    redirectToSpotifyAuthorize();
    console.log("click");
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