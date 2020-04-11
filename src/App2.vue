<template>
  <div id="app">

    <div class="wrap">
      <div class="wrap_list">
          <div class="a"><img src="http://img.shijue.me/f93d17ccd0924da395e1b7ed68d8f2af_d.jpg!dp6" alt=""></div>
          <div class="a"><img src="http://img.shijue.me/gicPicture/1d28d7d8e45c7baff495c0f0a33632732/e1dcfb949a1448f999b9741cb588a2ae.jpg!dp6" alt=""></div>
          <div class="a"><img src="http://img.shijue.me/gicPicture/29e8bbc26430ca6249965202e622f1728/108a3666096d436b90ab1a14ebda02ce.jpg!dp6" alt=""></div>
          <div class="a"><img src="http://img.shijue.me/gicPicture/95e5a42ef4a0c977cbb52fc498c813884/16aea4ea46a941eeae392078540986c0.jpg!dp6" alt=""></div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};


/**
 * 
 * 响应式案例 使用媒体查询
 * 图片不会随着缩放而变大
 */
</script>

<style lang="less" scoped>

/* 父级给定高度 图片相对盒子绝对定位,浏览器变化时宽度会变化 高度不会 */

  .wrap{
    width: 90%;
    margin: 0 auto;
    border:1px solid #000; 
    .wrap_list{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 300px;
      margin: 0 auto;
      .a{
        width: 22%;
        background-color:darkseagreen;
        margin: 10px;
        position: relative;
        img{
          position: absolute;
          width: 100%;
          height: 100%;
          left:0 ;
          top:0;
        }
      }
    } 
  }

/* 单位给百分比 父级不给高度 高度由图片撑开 图片随着浏览器缩放图片自适应   */

  // .wrap{
  //   width: 90%;
  //   margin: 0 auto;
  //   border:1px solid #000; 
  //   .wrap_list{
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: center;
  //     margin: 0 auto;
  //     .a{
  //       width: 22%;
  //       background-color:darkseagreen;
  //       margin: 10px;
  //       img{
  //         width: 100%;
  //         height: 100%;
  //       }
  //     }
  //   } 
  // }




/* (max-width:600px)   最大宽度 <=600（小于等于） 
     (min-width: 480px)       最小宽度 >=480 
*/

@media screen and (max-width: 400px) {
  body {
    background-color: pink;
  }
  .wrap{
    width: 90%;
    margin: 0 auto;
    border:1px solid #000; 
    .wrap_list{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 600px;
      overflow: hidden;
      margin: 0 auto;
      .a{
        width: 100%;
        background-color:darkseagreen;
        margin: 10px;
        position: relative;
        z-index: 1;
        
        img{
          position:absolute;
          width: 100%;
          height: 100%;
          left:0 ;
          top:0;
        }
      }
    } 
  }
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  body {
    background-color: skyblue;
  }
  .wrap{
    width: 90%;
    margin: 0 auto;
    border:1px solid #000; 
    .wrap_list{
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      height: 450px;
      overflow: hidden;
      margin: 0 auto;
      .a{
        width: 40%;
        background-color:darkseagreen;
        margin: 10px;
        position: relative;
        z-index: 1;
        
        img{
          position:absolute;
          width: 100%;
          height: 100%;
          left:0 ;
          top:0;
        }
      }
    } 
  }
  

  

}


</style>
