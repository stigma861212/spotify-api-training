<template>
    <div id="home-container">
        <NavigationBar />
        <router-view></router-view>
    </div>
</template>

<script setup>
import NavigationBar from "../NavigationBar.vue";
// import Explore from "../Explore.vue";
console.log("Home");

// const toTest = () => {
//     console.log("test");
//     router.push("/home/explore");
// }

</script>

<style>
#home-container {
    display: flex;
    gap: 10px;
    height: calc(100% - 45px);
    width: calc(100% - 20px);
    padding: 35px 10px 10px 10px;
}
</style>