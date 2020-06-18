<template>
    <div class="index">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="tab">
            <div v-for="item in tab"
                 :key="item.id"
                 class="navigation"
                 :class="{'navigationHover':tabNum===item.id? true:false}">
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
                    routerName: "recreation",
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
<style lang="scss">
html,
body,
ul,
li,
img,
a,
p,
div,
form,
input {
    padding: 0;
    margin: 0;
    /*设置盒模型*/
    box-sizing: border-box;
    /*去除移动端特有的点击高亮效果*/
    -webkit-tap-highlight-color: transparent;
}
a,
a:hover {
    color: #666;
    text-decoration: none;
}
li {
    list-style: none;
}
.index {
    width: 100%;
    height: 100%;
    .content {
        width: 100%;
        height: 93%;
        // background: rgb(238, 253, 207);
    }
    .tab {
        position: relative;
        height: 7%;
        width: 100%;
        border-top: solid 1px rgb(190, 190, 190);
        display: flex;
        flex-direction: row;
    }
    .navigation {
        flex: 1;
        height: 100%;
        line-height: 45px;
        text-align: center;
    }
    .navigationHover {
        background: yellow;
    }
}
</style>