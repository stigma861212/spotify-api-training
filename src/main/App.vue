<template>
  <Titlebar />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Titlebar from "../component/Titlebar.vue";
</script>

<style>
body {
  margin: 0px;
}

#app {
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>