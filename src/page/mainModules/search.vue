<template>
    <div class="#search">
        <p class="goBack"
           @click="$router.go(-1)">
            <span>返回</span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
.search {
    width: 100%;
    height: 100%;
    .goBack {
        width: 100%;
        height: 30px;
        background: chartreuse;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
}
</style>