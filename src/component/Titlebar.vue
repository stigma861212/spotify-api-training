<template>
  <div id="title-bar"></div>
  <div id="window-button-group">
    <div @click="minmize" id="window-minmize" class="window-button"></div>
    <div @click="maxmize" id="window-maxmize" class="window-button"></div>
    <div @click="close" id="window-close" class="window-button"></div>
  </div>
</template>

<script setup>
/**視窗最小化 */
const minmize = () => {
  window.electronAPI.windowMinimize();
}
/**視窗放大縮小 */
const maxmize = () => {
  window.electronAPI.windowAutoResize();
}
/**視窗關閉 */
const close = () => {
  window.electronAPI.windowClose();
}
</script>

<style>
#title-bar {
  position: fixed;
  background-color: #131313;
  width: 100%;
  height: 25px;
  -webkit-app-region: drag;
}

#window-button-group {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 140px;
  height: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  -webkit-app-region: no-drag;
}

.window-button {
  position: relative;
  background-color: #131313;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  -webkit-app-region: no-drag;
}

.window-button:hover::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

#window-minmize {
  background-image: url("../img/horizontal-rule.png");
}

#window-maxmize {
  background-image: url("../img/square.png");
}

#window-close {
  background-image: url("../img/cross.png");
}
</style>