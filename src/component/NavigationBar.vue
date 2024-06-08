<template>
    <div id="navigation-bar-group">
        <div id="common-navigation-bar">
            <NavigationButton @click="goHome" :contentText=contentText.HomePage />
            <NavigationButton :contentText=contentText.Search />
        </div>
        <div id="musicLibrary-navigation-bar">
        </div>
    </div>
</template>

<script setup>
import { contentText } from "../enums/contentText";
import router from '../router/router';
import NavigationButton from "./NavigationButton.vue";
console.log("NavigationBar");

/**到首頁 */
const goHome = () => {
    console.log("GoHome");
    router.push("/home");
}

</script>

<style>
#navigation-bar-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
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