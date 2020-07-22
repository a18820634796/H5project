<template>
    <div id="home">
        <!--顶部搜索-->
        <div class="fixationTitle">
            <a href="" class="jd_logo"></a>
            <form action="" class="jd_searchBox" @click="$router.push({name:'search'})">
                <!--<span></span>-->
                <input type="text" placeholder="请输入商品名称">
            </form>
            <span @click="$router.push('login')" class="jd_login">登录</span>
        </div>
        <!--轮播图-->
        <div class="jd_banner">
            <ul class="jd_bannerImg">
                <li v-for="item in swiperData" :key="item.id">
                    <img :src="item.url" alt="">
                </li>
            </ul>
            <ul class="jd_bannerIndicator" id="dianul">
                <li v-for="item in swiperData" :key="item.id" @click="liClick(item.id,$event)" :class="{active:swiperIndex==item.id+1}"></li>
            </ul>
        </div>
        <!--选择分类-->
        <div class="classify">
            <div v-for="item in classify" :key="item.id" class="clearfix" @click="selectClassify">
                <img :src="item.url" alt="">
                <p>{{item.text}}</p>
            </div>
        </div>
        <!--秒杀-->
        <div class="seckill">
            <div class="seckill-header">
                <img src="../../assets/home/seckill-icon.png" alt="">
                <div class="handseckill">掌上秒杀</div>
                <span>0</span>
                <span>0</span>
                <span class="unlike">:</span>
                <span>0</span>
                <span>0</span>
                <span class="unlike">:</span>
                <span>0</span>
                <span>0</span>
                <div class="moreSeckill">更多秒杀...</div>
            </div>
            <div class="seckill-content">
                <div v-for="item in seckill" :key="item.id" class="commodity">
                    <img :src="item.url" alt="">
                    <p>{{item.money}}</p>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
        <!--京东超市-->
        <div class="supermarket">
            <p class="head">京东超市</p>
            <div class="content">
                <a href="" class="a_d">
                    <img src="../../assets/home/cp1.jpg" alt="" class="imgLeft topBot">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp2.jpg" alt="" class="imgLeft topLeft">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp3.jpg" alt="" class="imgLeft topLeft">
                </a>
            </div>
        </div>
        <div class="supermarket">
            <p class="head">京东超市</p>
            <div class="content">
                <a href="" class="a_d">
                    <img src="../../assets/home/cp4.jpg" alt="" class="imgLeft topBot">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp5.jpg" alt="" class="imgLeft topLeft">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp6.jpg" alt="" class="imgLeft topLeft">
                </a>
            </div>
        </div>
        <div class="supermarket">
            <p class="head">京东超市</p>
            <div class="content">
                <a href="" class="a_d">
                    <img src="../../assets/home/cp1.jpg" alt="" class="imgLeft topBot">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp2.jpg" alt="" class="imgLeft topLeft">
                </a>
                <a href="" class="a_d">
                    <img src="../../assets/home/cp3.jpg" alt="" class="imgLeft topLeft">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    window.onload = function() {
        document.addEventListener("touchstart", function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        });
        document.addEventListener("gesturestart", function(event) {
            event.preventDefault();
        });
    };
    import obj from "./home";
    export default {
        data() {
            return {
                swiperData: obj.swiperData,
                classify: obj.classify,
                seckill: obj.seckill,
                timeout: null,
                swiperIndex: 1
            };
        },
        created() {
            if (!localStorage.getItem('tokenID')) {
                this.$router.push({
                    name: 'login'
                })
            }
        },
        mounted() {
            console.log(document.body.clientWidth);
            this.init();
            //为选择点第一个添加选中样式
            document.getElementsByClassName(
                "jd_bannerIndicator"
            )[0].firstChild.className = "active";
        },
        methods: {
            //初始化轮播图
            init() {
                //获取轮播图结构
                var banner = document.querySelector(".jd_banner");
                //获取图片容器
                var imgBox = document.querySelector(".jd_bannerImg");
                //获取所有图片容器li元素
                var lis = imgBox.querySelectorAll("li");
                //点标记的li
                var jd_bannerIndicator = document.querySelector(
                    ".jd_bannerIndicator"
                );
                var active = jd_bannerIndicator.querySelectorAll("li");

                var bannerWidth = banner.offsetWidth;

                //因为不知道总共有多少轮播图，动态设置ul元素居中
                jd_bannerIndicator.style.marginLeft = -(jd_bannerIndicator.offsetWidth / 2) + "px";
                var vm = this;

                function slideshow() {
                    imgBox.style.width = lis.length * bannerWidth + "px";
                    for (let i = 0; i < lis.length; i++) {
                        lis[i].style.width = bannerWidth + "px";
                    }

                    function transtion() {
                        vm.timeout = setTimeout(function() {
                            // 设置动画过度
                            imgBox.style.transition = "left 1s ease-in-out";
                            //当展示的图片小于轮播图总数时，就继续轮播，否则返回第一张
                            if (vm.swiperIndex < lis.length) {
                                //每次执行一次向左边偏移一张图片
                                imgBox.style.left =
                                    bannerWidth * -vm.swiperIndex + "px";
                                vm.swiperIndex++;
                            } else {
                                imgBox.style.left = 0 + "px";
                                vm.swiperIndex = 1;
                            }

                            transtion();
                        }, 3000);
                    }
                    transtion();
                }
                slideshow();
            },
            //点击白点切换轮播图片
            liClick(id, event) {
                var bannerWidth = document.querySelector(".jd_banner").offsetWidth;
                var imgBox = document.querySelector(".jd_bannerImg");
                //修改轮播图的轮播id
                this.swiperIndex = id + 1;
                //设置跟选中的点相对应的图片
                imgBox.style.left = bannerWidth * -id + "px";
                clearTimeout(this.timeout);
                this.init();
            },
            //选择分类
            selectClassify() {}
        }
    };
</script>
<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    #home {
        background: rgb(236, 236, 236);
        width: 100%;
        height: 100%;
        max-width: 640px;
        overflow: auto;

        // max-width: 600px;
        //头部登录搜索
        .fixationTitle {
            width: 100%;
            max-width: 640px;
            height: 40px;
            /*固定在顶部*/
            position: fixed;
            background: rgb(197, 7, 7);
            z-index: 10;

            .jd_logo {
                width: 56px;
                height: 30px;
                position: absolute;
                left: 10px;
                top: 5px;
                /*设置背景大小*/
                background: url("../../assets/home/jd-sprites.png") no-repeat;
                background-size: 200px 200px;
                background-position: 0px -108px;
            }

            .jd_login {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 0;
                right: 0;
                line-height: 40px;
                color: #fff;
            }

            .jd_searchBox {
                width: 100%;
                height: 100%;
                padding-left: 76px;
                padding-right: 50px;
            }

            .jd_searchBox>input {
                width: 100%;
                height: 30px;
                margin-top: 5px;
                border-radius: 15px;
                padding-left: 30px;
                color: #666;
            }

            .jd_searchBox::before {
                content: "";
                width: 27px;
                height: 23px;
                position: absolute;
                background: url("../../assets/home/jd-sprites.png");
                background-size: 200px 200px;
                background-position: -56px -108px;
                left: 80px;
                top: 9px;
            }
        }

        //轮播图架构
        .jd_banner {
            width: 100%;
            margin-top: 20px;
            // height: 250px;
            overflow: hidden;
            position: relative;

            //轮播图
            .jd_bannerImg {
                width: 100%;
                height: 100%;
                position: relative;
                left: 0;

                li,
                li img {
                    width: 100%;
                    height: 100%;
                }

                li {
                    width: 10.5%;
                    float: left;
                }
            }

            // 点点选轮播图
            .jd_bannerIndicator {
                height: 10px;
                position: absolute;
                margin: 0 auto;
                z-index: 999;
                left: 50%;
                bottom: 20px;
                /* transform: translateX(-50%); */
                display: flex;
                justify-content: space-between;
            }

            .jd_bannerIndicator>li {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid #fff;
                margin-left: 10px;
            }

            .active {
                background-color: rgb(255, 255, 255);
            }

            .jd_bannerIndicator>li:first-of-type {
                margin-left: 0;
            }
        }

        //分类
        .classify {
            width: 100%;
            padding-top: 10px;
            margin-top: -4px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background: white;

            .clearfix {
                width: 25%;
                font-size: 13px;
                color: rgb(139, 138, 138);

                img {
                    width: 50px;
                    height: 50px;
                    position: relative;
                    left: 50%;
                    margin-left: -25px;
                }

                p {
                    text-align: center;
                    padding-bottom: 10px;
                }
            }
        }

        //秒杀
        .seckill {
            width: 100%;
            padding-top: 10px;
            margin-top: 10px;
            background: white;

            //头部
            .seckill-header {
                width: 100%;
                display: flex;
                margin-left: 10px;
                align-items: center;
                position: relative;

                span:nth-of-type(1) {
                    margin-left: 10px;
                }

                span {
                    width: 13px;
                    display: inline-block;
                    background: black;
                    line-height: 20px;
                    color: white;
                    text-align: center;
                    margin-right: 3px;
                }

                .unlike {
                    margin-right: 0;
                    background: white;
                    color: black;
                }

                img {
                    width: 16px;
                    height: 20px;
                    background: url("../../assets/home/seckill-icon.png");
                    background-size: 100% 100%;
                    margin-top: -5px;
                }

                .handseckill {
                    color: orangered;
                    font-size: 14px;
                    margin-left: 5px;
                }

                .moreSeckill {
                    font-size: 13px;
                    color: #666;
                    position: absolute;
                    right: 20px;
                }
            }

            .seckill-content {
                width: 100%;
                display: flex;
                flex-direction: row;
                padding: 20px;

                .commodity {
                    width: 33.33%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    img {
                        width: 70%;
                    }

                    p {
                        text-align: center;
                    }
                }
            }
        }

        //超市
        .supermarket {
            width: 100%;
            background: white;
            margin-top: 15px;

            .head {
                padding: 10px;
                color: #666;
                padding-left: 15px;
                font-size: 16px;
            }

            .content {
                width: 100%;

                .a_d {
                    display: block;
                    width: 50%;
                    float: left;

                    img {
                        width: 100%;
                        display: block;
                        background-size: 100% 100%;
                        float: left;
                    }

                    .topLeft {
                        box-sizing: border-box;
                        border-top: 1px solid rgba(177, 177, 177, 0.5);
                        border-left: 1px solid rgba(177, 177, 177, 0.5);
                    }

                    .topBot {
                        border-top: 1px solid rgba(177, 177, 177, 0.5);
                    }
                }

                .a_b {
                    float: right;
                }
            }

            .content::after {
                display: block;
                content: "";
                clear: both;
            }
        }
    }
</style>