<template>
    <div id="app">
        <index></index>
    </div>
</template>

<script>
window.onload = function() {
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
    });
};
import index from "./page/index";
export default {
    components: {
        index
    },
    name: "App"
};
</script>

<style>
#app {
    width: 100%;
    height: 100%;

    max-width: 650px;
    position: absolute;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
