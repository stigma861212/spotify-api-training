<template>
  <Titlebar />
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Titlebar from "../component/Titlebar.vue";
import { ISize } from "../type/global.interface";

onMounted(() => {
  console.log("mounted");
  window.electronAPI.windowResize();
  window.electronAPI.resizeWindow((_event, value) => {
    const parseValue: Array<number> = JSON.parse(value);
    const size: ISize = {
      width: parseValue[0],
      height: parseValue[1]
    }

    document.body.style.width = size.width + "px";
    document.body.style.height = size.height + "px";
  })
});

</script>

<style>
body {
  margin: 0px;
  user-select: none;
  overflow: hidden;
}

img {
  pointer-events: none;
}

#app {
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>