<template lang="html">
  <section class="content">
    <!-- 这里是一个完整块 -->
    <div class="content-block">
      <div class="block-nav">
        <i class="block-nav-banner"></i>
        <a class="block-nav-title">热门推荐</a>
        <ul class="block-nav-tab">
          <li><a href="">华语</a></li>
          <li><a href="">流行</a></li>
          <li><a href="">摇滚</a></li>
          <li><a href="">民谣</a></li>
          <li><a href="">电子</a></li>
        </ul>
        <a href="#" class = "block-nav-more">更多</a>
      </div>
      <div class="block-content">
        <div class="image-block" v-for = "(info,index) in albums">
          <img :src="info.coverImgUrl" alt="" class = "block-image">
          <a href="" class = "block-background">
            <i class="icon-headset"></i>
            <span class="block-visited">{{info.playCount}}</span>
            <i class="icon-playmusic"></i>
          </a>
          <p class="block-descrip">{{info.name}}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'albums'
    ])
  }
}
</script>

<style lang="sass">
$font-big : 20px
$font-small : 12px
.block-nav
  padding : 20px
  padding-bottom: 7px
  border-bottom : 2px solid #c10d0c
  .block-nav-banner
    display : inline-block
    width: 14px
    height: 14px
    background-image : url("../assets/index.png")
    background-position : -235px -164px
  .block-nav-title
    margin-left: 10px
    font-size : 20px
  .block-nav-tab
    display: inline-block
    transform : translateY(2px)
    li
      float: left
      border-right : 1px solid #d7d7d7
      a
        font-size : $font-small
        padding : 0px 12px
        &:visited
          color : #666
      &:last-child
        border-right : 0px
  .block-nav-more
    float : right
    color : #666
    padding-top : 5px
    font-size : $font-small

.block-content
  .image-block
    position : relative
    display : inline-block
    margin : 15px 16px
    .block-image
      width: 140px
      height: 140px
      box-sizing: border-box
      border : 1px solid #d8d8d8
    .block-background
      position : absolute
      top : 113px
      left : 0
      width: 140px
      height: 27px
      overflow: hidden
      background-image : url("../assets/coverall.png")
      background-position: 0 -535px
      .icon-headset
        margin-left : 10px
        margin-top : 8px
      .block-visited
        margin-left: 2px
        color : #ccc
        font-size : 12px
      .icon-playmusic
        position : absolute
        right : 10px
        top : 2px
        transform : translateY(4px)
    .block-descrip
      width: 140px
      color : 080808
      font-size : 14px
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    &:nth-child(4n+1)
      margin-left : 0px
</style>
