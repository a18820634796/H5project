<template>
    <div class="index">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="tab">
            <div v-for="(item,index) in tab" :key="index" :class="{'navigation':tabNum===item.id? true:false}">
                <div @click="getRouter(item)">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            message: "",
            tabNum: 0,
            tab: [
                {
                    text: "首页",
                    routerName: "home",
                    id: 0
                },
                {
                    text: "娱乐",
                    routerName: "login",
                    id: 1
                },
                {
                    text: "我的",
                    routerName: "login",
                    id: 2
                }
            ]
        };
    },
    created() {},
    mounted() {
        document.getElementsByClassName("index")[0].style.zoom =
            document.documentElement.clientWidth / 375;
    },
    methods: {
        getRouter(item) {
            // console.log(item.routerName)
            this.tabNum = item.id;
            if (item.routerName !== this.$route.name) {
                this.$router.push({ name: item.routerName });
            }
        },

        ...mapMutations(["setMessage"]),
        ...mapActions(["acSetMessage"]),
        change() {
            this.$store.commit("setMessage", "我变成更改后的message了");
        },
        change2() {
            this.setMessage("使用mapMutations修复message");
        },
        change3() {
            setTimeout(() => {
                this.acSetMessage("调用了actions");
            }, 2000);
            // this.$store.dispatch('acSetMessage', '调用了actions')
        }
    }
};
</script>
<style lang="scss" scoped>
.index {
    .content {
        height: 93%;
        width: 100%;
        display: inline-block;
        position: absolute;
    }
    .tab {
        position: absolute;
        bottom: 0;
        height: 7%;
        width: 100%;
        border: solid 1px beige;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .navigation {
        background: yellow;
        display: inline-block;
    }
}
</style>