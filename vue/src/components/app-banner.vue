<template lang="html">
  <section class="banner">
    <div class="banner-main">
      <div class="banner-main-carousel">
        <a class = "carousel-left" @click = "prevImg"></a>
        <transition name = "carousel" >
          <img v-for = "(path,index) in imagesUrl" :src = "path" v-if = "(index == currentImageIndex)" :key = "'image'+index" >
        </transition>
        <a class = "carousel-right" @click = "nextImg"></a>
      </div>
      <div class="banner-main-download">
        <a href="" class = "banner-downloading"></a>
        <p class = "download-intro">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      imagesUrl: [
        "/static/carousel.jpg",
        "/static/carousel1.jpg",
        "/static/carousel2.jpg",
        "/static/carousel3.jpg",
        "/static/carousel4.jpg",
        "/static/carousel5.jpg"
      ],
      currentImageIndex : 0
    }
  },
  methods: {
    prevImg(){
      if(this.currentImageIndex > 0)
        this.currentImageIndex--
    },
    nextImg(){
      if(this.currentImageIndex < this.imagesUrl.length-1)
        this.currentImageIndex++
      else
        this.currentImageIndex = 0
    },
    autoCarousel : function(){
      setInterval(()=>{
        if(this.currentImageIndex < this.imagesUrl.length-1)
          this.currentImageIndex++
        else
          this.currentImageIndex = 0
      },5000)
    }
  },
  mounted(){
    this.autoCarousel()
  }
}
</script>

<style lang="sass">
.banner
  position: relative
  width: 100%
  height: 336px
  background-color: #d1d1d1
  .banner-main
    width: 981px
    height : 100%
    margin : 0 auto
    .banner-main-carousel
      position : relative
      width: 730px
      height: 100%
      float: left
      img
        position : absolute
      .carousel-left
        position : absolute
        top : 50%
        left : -68px
        transform : translateY(-50%)
        width: 37px
        height: 63px
        background-image : url("../assets/banner.png")
        background-position : 0px -360px
        &:hover
          background-position: 0px -430px
      .carousel-right
        position : absolute
        top : 50%
        right : -319px
        transform : translateY(-50%)
        width: 37px
        height: 63px
        background-image : url("../assets/banner.png")
        background-position : 0px -503px
        &:hover
          background-position : 0px -573px
    .banner-main-download
      position: relative
      float: left
      width: 251px
      height: 100%
      background-image: url("../assets/download.png")
      background-position : 0px 0px
      .banner-downloading
        position : absolute
        bottom : 68px
        left : 19px
        width: 215px
        height: 56px
        background-image: url("../assets/download.png")
        background-position : -19px -212px
        &:hover
          background-position: 0px -340px
      .download-intro
        position : absolute
        color : #8d8d8d
        font-size : 12px
        bottom : 41px
        left : 21px

.carousel-enter-active
  transition : all .5s ease

.carousel-leave-active
  transition : all .5s ease

.carousel-enter, .carousel-leave-to
  opacity : 0
</style>
