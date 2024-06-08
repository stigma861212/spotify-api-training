<template>
    <div id="navigation-bar-group">
        <div id="common-navigation-bar">
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
        </div>
        <div id="musicLibrary-navigation-bar">
        </div>
    </div>
</template>

<script setup>
import NavigationButton from "./NavigationButton.vue"
console.log("NavigationBar");
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