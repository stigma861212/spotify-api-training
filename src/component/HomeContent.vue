<template>
    <div id="content-group"></div>
</template>

<script lang="ts" setup>
import axios from "axios";
const accessToken: string = localStorage.getItem("access_token");
console.log("HomeContent");

/**取得使用者最愛音樂 */
const getUserFavoriteTracks = async (accessToken: string) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
}

/**取得使用者最愛音樂家 */
const getUserFavoriteArtists = async (accessToken: string) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
}

// NOTE: 統一取得後傳送
Promise.all([getUserFavoriteTracks(accessToken), getUserFavoriteArtists(accessToken)]).then(data => {
    console.log("data", data);
});

</script>

<style>
#content-group {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #131313;
}
</style>