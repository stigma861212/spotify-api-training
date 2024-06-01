<script setup>
defineProps(["title"]);
</script>

<template>
  <button id="title-bar"> {{ title }}</button>
</template>

<style>
#title-bar {
  color: red;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
}
</style>