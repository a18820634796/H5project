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
        getLogin() {
            const params = {
                url: `http://192.168.0.144:8888/01check.php`,
                method: "get",
                params: {
                    username: "admin",
                    password: "123"
                }
            };
            login(params).then(res => {
                params.log(res);
            });
        }
        // ajax(data) {
        //     return new Promise((resolve, reject) => {
        //         var xhr = new XMLHttpRequest();
        //         var paramsUrl = "";
        //         if (
        //             JSON.stringify(data.params) !== "{}" ||
        //             data.params !== undefined
        //         ) {
        //             for (let index in data.params) {
        //                 paramsUrl += index + "=" + data.params[index] + "&";
        //             }
        //             paramsUrl = paramsUrl.slice(0, paramsUrl.length - 1);
        //             data.url = data.url + "?" + paramsUrl;
        //         }

        //         xhr.open(data.method, data.url, true);
        //         xhr.send(data.params);
        //         xhr.onreadystatechange = function() {
        //             if (xhr.readyState == 4) {
        //                 if (xhr.status == 200) {
        //                     resolve(xhr.responseText);
        //                 } else {
        //                     reject("出错啦" + xhr.status);
        //                 }
        //             }
        //         };
        //     });
        // }
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