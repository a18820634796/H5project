<template>
    <div class="login">
        <div class="head">登录</div>
        <div class="content">
            <div class="loginMessage">
                手机号：<div>
                    <!-- <van-button type="primary" @click="getLogin">主要按钮</van-button> -->
                    <van-cell-group>
                        <van-field :value="userName" placeholder="请输入用户名" bind:change="onChange" />
                    </van-cell-group>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import { login } from "@/api";
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
        getLogin() {
            const params = {
                url: this.$api.login,
                method: "get",
                params: {
                    username: "admin",
                    password: "123"
                }
            };
            console.log(this.$api);
            this.$ajax(params).then(res => {
                console.log(res);
                sessionStorage.setItem("tokenId", res.data.tokenId);
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    .head {
        line-height: 30px;
        margin-top: 100px;
        text-align: center;
    }
    .content {
        height: 300px;
        margin-top: 50px;
        border: 1px solid lavender;
    }
    .loginMessage {
        width: 80%;
        margin: 0 auto;
        border: 1px solid yellow;
        display: flex;
        flex-direction: row;
        line-height: 45px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
}
</style>