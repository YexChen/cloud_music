<template lang="html">
  <section class = "user-dict">
    <div class = "dict-pre">
      <div class="dict-pre-inner">
        <div class="dict-avatar">
          <img src="../assets/musicAvatar.jpg" alt="">

        </div>
        <div class="dict-info-fb1">
          <i class ="dict-banner"></i>
          <span class = "dict-name">巫师３</span>
          <a class = "dict-rename">编辑</a>
        </div>
        <div class="dict-info-fb2">
          <img src="../assets/chiro.jpg" alt="" class = "user-avatar">
          <a class = "user-name">琪露诺最强！</a>
          <span class = "dict-date">2017-02-14 创建</span>
        </div>
        <div class="dict-info-fb3">
          <div class="play-btn">
            <i class="play-icon"></i>
            <span>播放</span>
          </div>
          <div class="play-after-btn">
            <i></i>
          </div>
        </div>
      </div>
    </div>
    <user-dict-list></user-dict-list>
  </section>
</template>

<script>
import userDictList from './user-dict-list.vue'
export default {
  components : {
    userDictList
  }
}
</script>

<style lang="sass">
  .user-dict
    float: left
    width : 740px
    min-height : 800px
    border-right : 1px solid #d2d2d2
    background-color: white
    .dict-pre
      width : 740px
      height : 280px
      .dict-pre-inner
        padding : 40px
        margin : auto
        .dict-avatar
          float: left
          width : 200px
          height : 200px
          padding : 3px
          margin-right : 30px
          box-sizing: border-box
          border : 1px solid #d0d0d0
          img
            width : 100%
            height : 100%
        .dict-info-fb1
          margin-top : 5px
          .dict-banner
            display: inline-block
            background-position: 0px -243px
            width : 55px
            height : 24px
            background-image: url("../assets/icon.png")
          .dict-name
            vertical-align: middle
            font-size : 20px
          .dict-rename
            float : right
            padding-left: 16px
            color : #0c73c2
            font-size : 12px
            background-image : url("../assets/table.png")
            background-position : 0px -259px
            &:hover
              background-position : 0px -280px
        .dict-info-fb2
          margin-top : 3px
          .user-avatar
            vertical-align: middle
            margin-left : 3px
            margin-right : 5px
            width : 35px
            height : 35px
          .user-name
            color : #0c73c2
            font-size : 12px
          .dict-date
            font-size : 13px
            color : #999
        .dict-info-fb3
          margin-top : 25px
          .play-btn
            float: left
            i
              display : inline-block
              width : 66px
              height : 31px
              background-image : url("../assets/button2.png")
              background-position : 0px -632px
            span
              display: inline-block
              color : white
              transform : translateX(-35px) translateY(-10px)
              font-size : 12px
          .play-after-btn
            float : left
            i
              display: inline-block
              width : 31px
              height : 31px
              background-image : url("../assets/button2.png")
              background-position: 0px -1587px
              transform : translateX(-28px)
</style>
