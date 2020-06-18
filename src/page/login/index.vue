<template>
    <div class="login">
        <div id="loginContent">
            <div class="head">登录</div>
            <div class="content">
                <van-cell-group>
                    <van-field :value="userName"
                               placeholder="请输入用户名"
                               :border="false"
                               bind:change="onChange" />
                </van-cell-group>
                <!-- <div class="loginMessage">
                    电话 ：
                    <div>
                        <van-cell-group class="phone">
                            <van-field v-model="userName" class="phone" placeholder="请输入用户名" bind:change="onChange" />
                        </van-cell-group>
                    </div>
                </div>
                <div class="loginMessage">
                    密码 ：
                    <div>
                        <van-cell-group class="phone">
                            <van-field class="phone" type="password" v-model="password" placeholder="请输入密码"
                                bind:change="onChange" />
                        </van-cell-group>
                    </div>
                </div> -->
                <div class="loginBtn">
                    <van-button :round="true"
                                type="info"
                                block
                                style="width:200px"
                                @click="getLogin">登录</van-button>
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
            console.log(this.userName, this.password);
            // const params = {
            //     url: this.$api.login,
            //     method: "get",
            //     params: {
            //         username: "admin",
            //         password: "123"
            //     }
            // };
            // console.log(this.$api);
            // this.$ajax(params).then(res => {
            //     console.log(res);
            //     sessionStorage.setItem("tokenId", res.data.tokenId);
            // });
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    position: fixed;
    height: 100%;
    width: 100%;
}
#loginContent {
    width: 100%;
    height: 93%;
    background: rgb(241, 187, 187);
    overflow: auto;
    .head {
        margin-top: 100px;
        color: white;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
    }
    .content {
        height: 300px;
        margin-top: 40px;
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
        }
    }
}
</style>
