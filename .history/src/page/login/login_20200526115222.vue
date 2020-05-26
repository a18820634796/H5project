<template>
    <div class="login">
        <div class="head">登录</div>
        <div class="content">
            <div>
                账户：<div>
                    <van-button type="primary" @click="getLogin">主要按钮</van-button>
                    <van-cell-group>
                        <van-field :value="userName" placeholder="请输入用户名" bind:change="onChange" />
                    </van-cell-group>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { login } from "@/api";
export default {
    data() {
        return {
            userName: "",
            passwored: "",
            code: ""
        };
    },
    methods: {
        onChange(aa) {
            console.log(aa, "dss");
        },
        getLogin() {}
    }
};
</script>
<style lang="scss" scoped>
.login {
    .head {
        line-height: 30px;
        text-align: center;
    }
    .content {
        height: 300px;
        margin-top: 50px;
        border: 1px solid lavender;
    }
}
</style>