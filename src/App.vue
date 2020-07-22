<template>
    <div id="app">
        <router-view :style="`zoom:${zoom}`"></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //通过计算屏幕宽度，来达到适配屏幕宽度效果
                zoom: document.documentElement.clientWidth / 400
            }
        },
    }
</script>
<style>
    #app {
        width: 100%;
        height: 100%;
        position: absolute;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>