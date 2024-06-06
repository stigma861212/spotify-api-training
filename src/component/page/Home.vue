<template>
    <div id="home-container">
        <NavigationBar />
        <ExploreBar />
    </div>
</template>

<script setup>
import NavigationBar from "../NavigationBar.vue";
import ExploreBar from "../ExploreBar.vue";
console.log("Home");
</script>

<style>
#home-container {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 10px;
    height: 100%;
    padding: 10px;
}
</style>