<template>
    <div id="profile-group">
        <div id="profile-data">
            <img id="profile-photo" src="../img/user.png" ref="profilePhoto">
            <h1 id="profile-name">{{ props.data[0].display_name }}</h1>
        </div>
        <h1>本月最熱門曲目</h1>
        <div id="popular-tracks-group">
            <Track v-for="(track, index) in tracks" :key="track.id" :track="track" :index="index" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IArtist, IProfile, ITopArtists, ITopTracks, ITrack } from '../type/spotify.interface';
import { defineProps, onMounted, reactive, ref } from 'vue';
import Track from "./Track.vue";
console.log("UserProfile");

const props = defineProps<{
    data: [IProfile, ITopTracks, ITopArtists]
}>();

const profilePhoto = ref<HTMLImageElement | null>(null)

const tracks = reactive<ITrack[]>(props.data[1].items);
onMounted(() => {
    try {
        profilePhoto.value.src = props.data[0].images[1].url;
    } catch (error) {
        console.log("profile photo none");
    }
})

</script>

<style>
#profile-group {
    width: 100%;
    border-radius: 10px;
    background-color: #131313;
    color: white;
    padding: 20px;
    overflow-y: auto;
    max-height: calc(100% - 10px);
    -ms-overflow-style: none;
    scrollbar-width: none;
}

#profile-group::-webkit-scrollbar {
    display: none;
}

#profile-data {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#profile-photo {
    position: relative;
    width: 300px;
    height: 300px;
    padding: 10px;
    border-radius: 50%;
}

#profile-name {
    text-align: center;
}

h1 {
    padding: 5px;
}

#popular-tracks-group {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
}

.track-group {
    width: 100%;
    height: 50px;
    background-color: #131313;
    overflow: hidden
}
</style>