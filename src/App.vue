<template>
  <div>
    <!-- <nav-top></nav-top>
    <div class="text">
      <h2>
        Welcome to the
        <br class="big" />new generation
        <br class="small" />of iPad.
      </h2>
    </div>
    <content-one></content-one> -->
    <introduce/>
    <footerv/>

  </div>
</template>

<script>
import NavTop from "./components/NavTop"
import ContentOne from "./components/ContentOne"
import Introduce from "./components/Introduce"
import Footerv from "./components/Footerv"

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavTop,
    ContentOne,
    Introduce,
    Footerv
  }
};
</script>

<style scoped lang="less">
@colorpink: pink;

.text {
  width: 80%;
  text-align: center;
  height: 135px;
  line-height: 64px;
  // background-color: @colorpink;
  margin: 40px auto;
  font-size: 36px;
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .text {
    .small {
      display: none;
    }
    // background-color:aquamarine;
    font-size: 26px;
    line-height: 64px;
  }
}

@media screen and (max-width: 768px) {
  .text {
    // background-color:skyblue;
    font-size: 20px;
    line-height: 42px;
    h2 {
      min-width: 276px;
      .big {
        display: block;
      }
      .small {
        display: block;
      }
    }
  }
}
</style>