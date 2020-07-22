<template>
    <div class="search">
        <p class="head">
            <span class="goBack" @click="$router.go(-1)">
                <!-- <svg aria-hidden="true">
                    <use :xlink:href="svg"></use>
                </svg> -->
                <svg-icon svg-name="alarm"></svg-icon>
                <svg-icon svg-name="alarm-fill"></svg-icon>
                <!-- <img src="../../assets/svg/alarm.svg"> -->
            </span>
        </p>
    </div>
</template>
<script>
    export default {
        methods: {
            data() {
                return {};
            }
        }
    };
</script>
<style lang="scss" scoped>
    .search {
        width: 100%;
        height: 100%;

        .head {
            height: 30px;
            // background: rgba(151, 151, 151, 0.3);
            display: flex;
            flex-direction: row;
            align-items: center;

            .goBack {
                width: 60px;
                height: 60px;
                font-size: 30px;
                color: rgb(55, 0, 255);
                // background: url(../../assets/svg/chevron-left.svg) no-repeat;
            }
        }
    }
</style>