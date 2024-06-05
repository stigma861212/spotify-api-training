<template>
  <Titlebar />
  <Login />
</template>

<script setup lang="ts">
import Titlebar from "../component/Titlebar.vue";
import Login from "../component/Login.vue";
</script>

<style>
body {
  margin: 0px;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>