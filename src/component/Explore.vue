<template>
    <div id="explore-bar-group">
        <input v-model="searchOrder" placeholder="Search..." />
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref, watch } from 'vue';

console.log("Explore");
const accessToken: string = localStorage.getItem("access_token");

const searchOrder = ref('');

watch(searchOrder, (order) => {
    console.log(order);
    if (!order) {
        console.log("Do something... like nothing page to look for search");
        return;
    }

    const getSearchData = async (accessToken: string) => {
        // https://developer.spotify.com/documentation/web-api/reference/search
        const types = ["track", "album"];
        const params = new URLSearchParams({
            q: order,
            type: types.join(','),
            limit: '5',
            offset: '0',
            include_external: 'audio'
        });

        try {
            const response = await axios.get(`https://api.spotify.com/v1/search?${params.toString()}`,
                {
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

    getSearchData(accessToken).then(data => {
        console.log("data", data);
    });
});

</script>

<style>
#explore-bar-group {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #131313;
}
</style>