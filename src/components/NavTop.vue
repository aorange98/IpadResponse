<template>
<nav>
    <div class="contanier" v-show="isShow">
        <ul class="menu">
            <li><a href=""><i class="el-icon-eleme"></i></a></li>
            <li><a href="">Mac</a></li>
            <li><a href="">iPad</a></li>
            <li><a href="">iPhone</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">TV</a></li>
            <li><a href="">Music</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">搜索</a></li>
            <li><a href=""><i class="el-icon-goods"></i></a></li>
        </ul>
    </div>

    <div class="m_container" v-show="!isShow">
        <ul class="m_menu">
            <li><a href="#" @click="handleClick"><i class="el-icon-s-unfold"></i></a></li>
            <li><a href="#"><i class="el-icon-eleme"></i></a></li>
            <li><a href="#"><i class="el-icon-goods"></i></a></li>
        </ul>

        <div class="m_menu_wrap">
            <div class="Search_input">
                <el-input placeholder="Search apple.com" prefix-icon="el-icon-search" v-model.lazy="text"></el-input>
            </div>

            <ul class="slide_menu_list">
                <li><a href="">Mac</a></li>
                <li><a href="">iPad</a></li>
                <li><a href="">iPhone</a></li>
                <li><a href="">Watch</a></li>
                <li><a href="">TV</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Support</a></li>
            </ul>
        </div>


    </div>

</nav>
</template>

<script>
import $ from 'jquery'
export default {
    name: "NavTop",
    data() {
        return {
            text: '',
            screenWidth: document.body.clientWidth, //屏幕宽度
        };
    },
    computed: {
        isShow: {
            get() {
                if (this.screenWidth <= 768) {
                    return false
                } else {
                    return true
                }
            },
            set() {}
        }
    },

    methods: {
        handleClick() {
            $(document).ready(function(){
                let height = document.documentElement.clientHeight;
                let m_menuHeight = $(".m_menu").height()
                $(".m_menu_wrap").height(height-m_menuHeight);
                $(".m_menu_wrap").toggle(600);
            });
        }
    },
    watch: {
        // 侦听屏幕宽度的变化,函数就会触发 传递两个参数 更新后数据和更新前数据
        screenWidth(val) {
            if (!this.timer) {
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = val
                this.timer = true
                setTimeout(() => {
                    console.log(this.screenWidth)
                    this.timer = false
                }, 400)
                if (this.screenWidth <= 768) {
                    this.isShow = false
                } else {
                    this.isShow = true
                }
            }
        },
    },
    mounted() {
        window.onresize = () => { // 定义窗口大小变更通知事件
            this.screenWidth = document.body.clientWidth; // 窗口宽度重新赋值给screenWidth
        };
    },
};
</script>

<style scoped lang="less">
@bgcc: rgba(0, 0, 0, 0.8);
@font-color: #f5f5f7;
@color1: darkorchid;
@colorpink: pink;
@colorblack:black;

nav {
    background-color: @bgcc;
    color: @font-color;
    .contanier {
        max-width: 980px;
        /* 随着浏览器宽度伸缩 但是不能超过980px */
        margin: 0 auto;
        text-align: center;
        line-height: 42px;
        .menu {
            display: flex;
            li {
                width: 20%;
                a {
                    font-size: 16px;
                    color: @font-color;
                    text-decoration: none;
                    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
                    i {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:768px) {
    nav {
        background-color:@colorblack;
        .m_container {
            .m_menu {
                display: flex;
                justify-content: space-between;
                text-align: center;
                line-height: 42px;
                li {
                    width: 25px;
                    padding-left: 5px;
                    padding-right: 5px;
                    a {
                        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
                        color: @font-color;
                        font-size: 20px;
                    }
                }
            }
            .m_menu_wrap {
                display: none;
                position: relative;
                left: 0;
                top: 0px;
                .Search_input {
                    height: 40px;
                    margin: 0 10px;
                    padding: 20px 0;
                    border-bottom: 1px solid #424245;
                    /deep/ .el-input__inner {
                        background-color: transparent!important;
                        color: #6e6e73;
                    }
                }
                .slide_menu_list {
                    padding: 5px 40px;
                    li {
                        border-bottom: 1px solid #424245;
                        a {
                            display: block;
                            height: 44px;
                            line-height: 44px;
                            text-decoration: none;
                            color: @font-color;
                        }
                    }
                }
            }
        }
    }
}

/**
    position: absolute;
    width: 100%;
    background-color: #000;
    z-index: 9999;
    left: 0px;
    top: 39px;

*/
</style>