<template>
    <div class="login">
        <div class="head">登录</div>
        <div class="content">
            <div class="loginMessage">
                电话 ：<div>
                    <!-- <van-button type="primary" @click="getLogin">主要按钮</van-button> -->
                    <van-cell-group class="phone">
                        <van-field :value="userName" class="phone" placeholder="请输入用户名" bind:change="onChange" />
                    </van-cell-group>
                </div>
            </div>
            <div class="loginMessage">
                密码 ：<div>
                    <!-- <van-button type="primary" @click="getLogin">主要按钮</van-button> -->
                    <van-cell-group class="phone">
                        <van-field class="phone" :value="password" placeholder="请输入密码" bind:change="onChange" />
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
            password: "",
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
    width: 100%;
    height: 100%;
    background: url("../../assets/image/login.jpg") no-repeat;
    background-size: 100%;
    padding-top: 100px;
    .head {
        color: white;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
    }
    .content {
        height: 300px;
        margin-top: 20px;
    }
    .loginMessage {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        line-height: 45px;
        margin-bottom: 15px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        .phone {
            background-color: transparent;
            width: 210px;
        }
        input:-webkit-input-placeholder {
            color: white;
        }
        input::-webkit-input-placeholder {
            color: red;
        }
    }
}
</style>