<template>
  <div class="login-group">
    <img id="icon" src="../img/spotify-ori.png" alt="" srcset="">
    <div class="button-box">
      <div id="loginButton"></div>
      <p>Login</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.login-group {
  position: relative;
  display: flex;
  background-color: #000000;
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