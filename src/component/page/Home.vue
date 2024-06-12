<template>
    <div id="home-container">
        <NavigationBar />
        <router-view></router-view>
    </div>
</template>

<script setup>
import NavigationBar from "../NavigationBar.vue";
import ExploreBar from "../ExploreBar.vue";
console.log("Home");

const toTest = () => {
    console.log("test");
    router.push("/home/explore");
}

</script>

<style>
#home-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 10px;
    height: 100%;
    padding: 35px 10px 10px 10px;
}
</style>