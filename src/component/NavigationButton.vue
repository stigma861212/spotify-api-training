<template>
    <div class="navigation-button-group">
        <div class="navigation-button"></div>
        <p>123</p>
    </div>
</template>

<script setup>
console.log("NavigationButton");
</script>

<style>
.navigation-button-group {
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.navigation-button {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.navigation-button:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* 让伪元素与父元素宽度一致 */
    height: 100%;
    /* 让伪元素与父元素高度一致 */
    background-color: rgba(64, 64, 62, 0.5);
    border-radius: 5px;
}

.navigation-button-group>p {
    position: absolute;
    color: white;
    pointer-events: none;
}
</style>