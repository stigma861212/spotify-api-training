<template>
    <div id="navigation-bar-group">
        <img src="../img/Logos/Spotify_Logo_RGB_Green.png">
        <div id="common-navigation-bar">
            <NavigationButton @click="goHome" :contentText=contentText.HomePage />
            <NavigationButton @click="goProfile" :contentText=contentText.UserProfile />
            <NavigationButton :contentText=contentText.Search />
        </div>
        <div id="musicLibrary-navigation-bar">
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { contentText } from "../enums/contentText";
import router from '../router/router';
import NavigationButton from "./NavigationButton.vue";
console.log("NavigationBar");

/**到首頁 */
const goHome = () => {
    console.log("GoHome");
    router.push("/home");
}

/**到個人檔案頁 */
const goProfile = () => {
    const accessToken: string = localStorage.getItem("access_token");

    const getUserInfo = async (accessToken: string) => {
        try {
            const response = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw error;
        }
    };

    // NOTE:取得使用者資料
    getUserInfo(accessToken).then(data => {
        console.log("data", data);
        router.push({ path: "/home/profile", query: { data: JSON.stringify(data) } });
    });
}

</script>

<style>
#navigation-bar-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#navigation-bar-group>img {
    height: 70px;
    padding: 35px;
}

#common-navigation-bar {
    background-color: #131313;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 10px 10px;
    gap: 10px;
}

#musicLibrary-navigation-bar {
    background-color: #131313;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    padding: 10px 10px;
    gap: 10px;
}
</style>