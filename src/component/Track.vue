<template>
    <div class="track-group">
        <div class="track-info">
            <div class="track-cell track-index">
                <div>{{ props.index + 1 }}</div>
            </div>
            <div class="track-cell track-image">
                <img src="" ref="trackPhoto">
            </div>
            <div class="track-cell track-name">
                <div>{{ props.track.name }}</div>
            </div>
            <div class="track-cell track-artist">
                <div>{{ props.track.artists[0].name }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { ITrack } from '../type/spotify.interface';

const props = defineProps<{
    track: ITrack;
    index: number;
}>();

console.log("track props:", props.track);
const trackPhoto = ref<HTMLImageElement | null>(null)

onMounted(() => {
    try {
        trackPhoto.value.src = props.track.album.images[2].url;
    } catch (error) {
        console.log("track photo none");
    }
})

</script>

<style scoped>
.track-info {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 10px;
}

/* .track-cell {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
} */

.track-cell[data-v-591c4e50] {
    display: flex;
    align-items: center;
}

.track-index {
    flex: 0 0 50px;
    justify-content: center;
}

.track-image {
    flex: 0 0 100px;
}

.track-name {
    text-align: left;
    flex: 1 0 200px;
}

.track-artist {
    flex: 1 0 200px;
}

.track-cell>img {
    height: calc(100% - 10px);
    object-fit: cover;
    padding: 0px;
    border-radius: 5px;
}
</style>