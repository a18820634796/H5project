<template>
    <div class="login">
        <div id="loginContent">
            <div @click="$router.push('home')" class="goBack_home">返回首页</div>
            <div class="head">登录</div>
            <div class="content">
                <div class="content_username">
                    <van-cell-group>
                        <van-field v-model="userName" label="用户名 :" placeholder="请输入用户名" :border="false" bind:change="onChange" />
                    </van-cell-group>
                </div>
                <div class="content_username">
                    <van-cell-group>
                        <van-field v-model="password" type="password" label="密码 :" placeholder="请输入密码" :border="false" bind:change="onChange" />
                    </van-cell-group>
                </div>
                <div class="content_username">
                    <a href="">用户注册</a>
                </div>
                <div class="loginBtn">
                    <!-- <van-button :round="true" type="info" block style="width:200px" @click="getLogin">登录</van-button> 
                    -->
                    <div>{{Notify({ type: 'primary', message: '通知内容' })}}</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import api from "@/api";
    import {
        Notify
    } from 'vant';
    export default {
        components: {
            [Notify.Component.name]: Notify.Component,
        },
        data() {
            return {
                userName: "",
                password: "",
                code: "",
                show: false
            };
        },
        methods: {
            onChange(aa) {
                console.log(aa, "dss");
            },
            //登录
            getLogin() {
                const reqData = {
                    username: this.userName,
                    password: this.password
                }
                api.login(reqData).then((res) => {
                    console.log(res)
                    localStorage.setItem('tokenID', res.data.tokenID)
                    // this.$router.tokenID = res.data.tokenID
                    if (res.data.content === '登录成功') {
                        this.$router.push('home')
                    }
                })
            },
        }
    };
</script>
<style lang="scss" scoped>
    .login {
        // position: fixed;
        height: 100%;
        width: 100%;
    }

    .goBack_home {
        display: inline-block;
        width: 80px;
        line-height: 30px;
        border: 10px;
        text-align: center;
        background: lightblue;
        border-radius: 15px;
        margin-top: 5px;
        margin-left: 5px;
        color: white;
    }

    #loginContent {
        width: 100%;
        height: 100%;
        background: rgba(201, 201, 201, 0.5);
        overflow: auto;

        .head {
            margin-top: 100px;
            color: white;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
        }

        .content {
            height: 200px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .content_username {
                width: 80%;
                margin: 0 auto;
            }

            .loginMessage {
                width: 70%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                line-height: 45px;
                margin-bottom: 25px;
                font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
                    sans-serif;

                .phone {
                    background-color: transparent;
                    width: 210px;
                }
            }

            .loginBtn {
                display: flex;
                justify-content: center;

                .wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .block {
                    width: 120px;
                    height: 120px;
                    background-color: #fff;
                }
            }
        }
    }
</style>