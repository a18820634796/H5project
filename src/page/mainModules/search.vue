<template>
    <div class="search">
        <p class="head" @click="$router.go(-1)">
            <span class="goBack"></span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
    .search {
        width: 100%;
        height: 100%;

        .head {
            width: 100%;
            height: 30px;
            background: rgba(172, 172, 172, 0.3);
            display: flex;
            flex-direction: row;
            align-items: center;

            .goBack {
                width: 20px;
                height: 20px;
                background: url('../../assets/icons/chevron-left.svg') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
</style>