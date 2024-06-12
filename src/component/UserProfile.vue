<template>
    <div id="profile-group">
        <img id="profile-photo" src="../img/user.png" ref="profilePhoto">
        <h2 id="profile-name">{{ props.data.display_name }}</h2>
        <!-- <h2 id="profile-name">{{ props.data.display_name }}</h2> -->
    </div>
</template>

<script lang="ts" setup>
import { IProfile } from '../type/spotify.interface';
import { defineProps, onMounted, ref } from 'vue';
console.log("UserProfile");

const props = defineProps<{
    data: IProfile
}>();

const profilePhoto = ref<HTMLImageElement | null>(null)

// 在组件挂载时打印 data
onMounted(() => {
    console.log(props.data);
    try {
        profilePhoto.value.src = props.data.images[1].url;
    } catch (error) {
        console.log("profile photo none");
    }
})

</script>

<style>
#profile-group {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #131313;
    flex-direction: column;
    align-items: center;
    color: white;
}

#profile-photo {
    position: relative;
    width: 300px;
    height: 300px;
    padding: 10px;
    border-radius: 50%;
    object-fit: contain;
}

#profile-name {
    text-align: center;
}
</style>