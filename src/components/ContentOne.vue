<template>
<div>
    <section>
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="8" :md="7">
                    <div class="text_wrap">
                        <h3>iPad Pro</h3>
                        <p>The most advanced iPad ever.</p>
                        <el-button type="primary" round class="btn" size="small">Buy</el-button>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="17">
                    <div class="img_wrap">
                        <img src="~assets/imgs/001.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

    <section>
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="8" :md="7">
                    <div class="text_wrap">
                        <h3>iPad Pro</h3>
                        <p>The most advanced iPad ever.</p>
                        <el-button type="primary" round class="btn" size="small">Buy</el-button>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="17">
                    <div class="img_wrap">
                        <img src="~assets/imgs/002.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

    <section>
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="8" :md="7">
                    <div class="text_wrap">
                        <h3>iPad Pro</h3>
                        <p>The most advanced iPad ever.</p>
                        <el-button type="primary" round class="btn" size="small">Buy</el-button>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="17">
                    <div class="img_wrap">
                        <img src="~assets/imgs/003.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

    <section>
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="8" :md="7">
                    <div class="text_wrap">
                        <h3>iPad Pro</h3>
                        <p>The most advanced iPad ever.</p>
                        <el-button type="primary" round class="btn" size="small">Buy</el-button>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="16" :md="17">
                    <div class="img_wrap last">
                        <img src="~assets/imgs/004.jpg" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>

</div>
</template>

<script>
export default {
    name: "ContentOne",
    data: function() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="less">
@colorpink: pink;
@media screen and (min-width: 992px) {
    section {
        padding-top: 142px;
        overflow: hidden; // 背景图片超出隐藏
        .container {
            width: 980px;   // 固定宽度
            margin-left: auto;
            margin-right: auto; 
            // background-color: @colorpink;
            .text_wrap {
                // background-color: aquamarine;
                position: relative;
                top: 180px;
                left: 0;
                z-index: 0;
                h3 {
                    font-size: 56px;
                }
                p {
                    padding: 10px 0;
                    font-size: 24px;
                }
                .btn {
                    margin-top: 15px;
                    font-size: 18px;
                }
            }
            .img_wrap {
                // background-color: antiquewhite;
                width: 100%;  // 父是栅格按比例 继承
                height: 500px;
            }
        }
    }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
    section {
        padding-top: 80px;
        overflow: hidden; // 背景图片超出隐藏
        // background-color: @colorpink;
        .container {
            width: 692px;   
            margin-left: auto;
            margin-right: auto;
            .text_wrap {
                // background-color: aquamarine;
                position: relative;
                top: 150px;
                left: 0;
                z-index: 0;
                h3 {
                    font-size: 30px;
                }
                p {
                    padding: 10px 0;
                    font-size: 21px;
                }
                .btn {
                    margin-top: 15px;
                    font-size: 16px;
                }
            }
            .img_wrap {
                width: 100%;
                
                // height: 334px;
                img{
                    width: 120%;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    section {
        padding-top: 52px;
        .container {
            position: relative;
            width: 324px;  // 固定宽度
            overflow: hidden;
            padding-top: 40px;
            margin: 0 auto;
             // background-color: @colorpink;
            .text_wrap {
                width: 264px;
                margin: 190px auto 20px;
                padding-left: 20px; 
                // background-color: aquamarine;
                h3 {
                    font-size: 36px;
                }
                p {
                    padding: 10px 0;
                    font-size: 18px;
                }
                .btn {
                    margin-top: 15px;
                    font-size: 18px;
                }
            }
            .img_wrap {
                position: absolute;
                top: -40px;
                left: 29px;
                margin: 0 auto;
                width: 100%;
                height: 218px; 
                background-color: rgb(61, 32, 178);
                background-size: 477px 218px;
                background-repeat: no-repeat;
                img{
                    width: 90%;
                    height: 100%;
                }
            }
        }
    }
}
</style>