<template>
    <div id="navigation-bar-group">
        <div id="common-navigation-bar"></div>
        <div id="music-library-bar"></div>
    </div>
</template>

<script setup>
console.log("NavigationBar");
</script>

<style>
#navigation-bar-group {
    display: grid;
    grid-template-rows: 200px;
    width: 150px;
    height: 100%;
    gap: 10px;
}

#common-navigation-bar {
    background-color: #131313;
    width: 150px;
    height: 100%;
    border-radius: 10px;
}

#music-library-bar {
    background-color: #131313;
    border-radius: 10px;
}
</style>