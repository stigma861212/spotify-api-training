<template>
  <Titlebar />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Titlebar from "../component/Titlebar.vue";
</script>

<style>
body {
  /* height: 100vh; */
  margin: 0px;
  overflow: hidden;
}

#app {
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>