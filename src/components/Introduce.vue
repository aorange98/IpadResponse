<template>
<div class="overwrap">
    <section>
        <div class="container">
            <h2>Compare iPad models</h2>

            <div class="list_wrap">
                <el-row :gutter="10">
                    <el-col :xs="12" :sm="12" :md="6">
                        <div class="list">
                            <img src="~assets/imgs/005.png" alt />
                            <h3>{{Introduct.ipadpro.name}}</h3>
                            <p>{{Introduct.ipadpro.money}}</p>
                            <ul class="ul_list">
                                <li v-for="(item,index) in Introduct.ipadpro.list" :key="index">{{item}}</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6">
                        <div class="list">
                            <img src="~assets/imgs/006.png" alt />
                            <h3>{{Introduct.ipadair.name}}</h3>
                            <p>{{Introduct.ipadair.money}}</p>
                            <ul class="ul_list">
                                <li v-for="(item,index) in Introduct.ipadair.list" :key="index">{{item}}</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6">
                        <div class="list">
                            <img src="~assets/imgs/007.png" alt />
                            <h3>{{Introduct.ipad.name}}</h3>
                            <p>{{Introduct.ipad.money}}</p>
                            <ul class="ul_list">
                                <li v-for="(item,index) in Introduct.ipad.list" :key="index">{{item}}</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="6">
                        <div class="list">
                            <img src="~assets/imgs/008.png" alt />
                            <h3>{{Introduct.ipadmini.name}}</h3>
                            <p>{{Introduct.ipadmini.money}}</p>
                            <ul class="ul_list">
                                <li v-for="(item,index) in Introduct.ipadmini.list" :key="index">{{item}}</li>
                            </ul>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    name: "Introduce",
    data: function() {
        return {};
    },
    computed: {
        ...mapState(["Introduct"]),

        // 开启命名空间 映射module中的state的open_hhh对象为本组件的数据
        // ...mapState('Introduct',['open_hhh']),
    },
    methods: {}
};
</script>

<style scoped lang="less">
@colorpink: pink;
@bgc: #FFFFFF;
@wrapbgc: #F2F2F2;
// @media screen and (min-width: 992px) {
    .overwrap {
        background-color: @wrapbgc!important;
        padding-top: 20px;
    }
    section {
        padding: 100px 0;
        width: 90%; // 外框随着浏览器的大小变动 
        margin: 0 auto;
        background-color: @bgc;
        .container {
            width: 915px; // 固定宽度 保证内容不自适应
            // height: 800px;
            margin: 0 auto; // background-color: @colorpink;
            h2 {
                text-align: center;
                font-size: 48px;
                margin-bottom: 80px;
            }
            .list_wrap {
                // background-color: aqua;
                margin-left: 34px;
                font-size: 14px;
                color: #333;
                .list {
                    height: 546px; // background-color: cornflowerblue;
                }
                h3 {
                    margin-top: 20px;
                }
                p {
                    line-height: 30px;
                }
                .ul_list {
                    margin-top: 20px;
                    li {
                        margin-top: 15px;
                    }
                }
            }
        }
    }
// }

// @media screen and (min-width: 768px) and (max-width: 992px) {
//     .overwrap {
//         background-color: @wrapbgc;
//         padding-top: 20px;
//         overflow: hidden;
//     }
//     section {
//         padding: 100px 0;
//         width: 80%; // 外框随着浏览器的大小变动    
//         margin: 0 auto;
//         background-color: @bgc;
//         .container {
//             width: 636px; // 固定宽度
//             // height: 800px;
//             margin: 0 auto; // background-color: @colorpink;
//             h2 {
//                 text-align: center;
//                 font-size: 40px;
//                 margin-bottom: 80px;
//             }
//             .list_wrap {
//                 // background-color: aqua;
//                 font-size: 14px;
//                 color: #333;
//                 margin-left: 50px;
//                 .list {
//                     height: 546px; // background-color: cornflowerblue;
//                 }
//                 h3 {
//                     margin-top: 20px;
//                 }
//                 p {
//                     line-height: 30px;
//                 }
//                 .ul_list {
//                     margin-top: 20px;
//                     li {
//                         margin-top: 15px;
//                     }
//                 }
//             }
//         }
//     }
// }

// @media screen and (max-width: 768px) {
//     .overwrap {
//         background-color: @wrapbgc;
//         padding-top: 20px;
//     }
//     section {
//         padding: 50px 0;
//         width: 100%; // 外框随着浏览器的大小变动    
//         margin: 0 auto;
//         background-color: @bgc;
//         .container {
//             width: 316px; // 固定宽度
//             // height: 800px;
//             margin: 0 auto; // background-color: @colorpink;
//             h2 {
//                 text-align: center;
//                 font-size: 22px;
//                 margin-bottom: 80px;
//             }
//             .list_wrap {
//                 // background-color: aqua;
//                 font-size: 14px;
//                 color: #333;
//                 margin-left: 16px;
//                 .list {
//                     height: 446px; 
//                     // background-color: cornflowerblue;
//                     img {
//                         width: 105px;
//                     }
//                 }
//                 h3 {
//                     margin-top: 20px;
//                 }
//                 p {
//                     line-height: 30px;
//                 }
//                 .ul_list {
//                     margin-top: 20px;
//                     li {
//                         margin-top: 15px;
//                     }
//                 }
//             }
//         }
//     }
// }
</style>