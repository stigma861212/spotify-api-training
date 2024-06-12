<template>
  <div class="login-group">
    <img id="icon" src="../img/Icons/Spotify_Icon_RGB_Green.png" alt="" srcset="">
    <div class="button-box">
      <div @click="login" id="loginButton"></div>
      <p>Login</p>
      <div @click="test1" id="test"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { checkStore } from '../oauth/token';
import { redirectToSpotifyAuthorize } from '../main/authorize';
import router from '../router/router';

window.electronAPI.testPath((_event, value) => {
  console.log("testPath", value);
})

/**登入按鈕 */
const login = () => {
  redirectToSpotifyAuthorize();
}

// TEMP:測試用
const test1 = () => {
  router.push("/home");
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("login DOMContentLoaded", window.location.href);
  if (checkStore()) {
    console.log("have join this experience");
    setTimeout(() => {
      router.push("/home");
    }, 2000);
  }
});
</script>

<style>
#test {
  width: 100px;
  height: 100px;
  background-color: aliceblue;
}

.login-group {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#icon {
  width: 128px;
  height: 128px;
  pointer-events: none;
}

.button-box {
  position: relative;
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
}

#loginButton {
  position: relative;
  background-color: #131313;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  cursor: pointer;
}

#loginButton:hover::after {
  content: "";
  position: absolute;
  background-color: rgb(64, 64, 62, 0.5);
  border-radius: 10px;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 50px;
}

.button-box>p {
  position: absolute;
  color: white;
  pointer-events: none;
}
</style>