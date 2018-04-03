<template lang="html">
  <footer class = "bottom-music footer-transition">
    <div class= "music-inner">
      <div class= "music-prev">
        <i class="icon-prev-music"></i>
        <i class="icon-music-pause"></i>
        <i class="icon-next-music"></i>
      </div>
      <div class= "music-main">
        <img src="../assets/avatar.jpg" alt="" class="music-avatar">
        <p class="music-info">
          <span class="music-name">少女さとり ～ 3rd eye</span>
          <span class="music-author">上海アリス幻樂団</span>
          <a href="" class="icon-music-link"></a>
        </p>
        <div class="music-process">
          <div class="music-process-cur">
            <span class="icon-music-bar"></span>
          </div>
          <span class="music-timer">3:50/4:49</span>
        </div>
      </div>
      <div class = "music-after">

      </div>
    </div>
    <div class="footer-locker">
      <i class="icon-lock"></i>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="sass">
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<底部设定
.bottom-music
  position : fixed
  bottom : 0px
  width: 100%
  height: 53px
  background-image : url("../assets/playbar.png")
  .music-inner
    width : 980px
    height: 100%
    margin : 0 auto
    .music-prev
      position: relative
      float: left
      width: 137px
      .icon-music-pause,.icon-music-play
        transform : translateY(40%)
        margin : 0 6px
    .music-main
      position : relative
      float: left
      .music-avatar
        margin-top : 12px
        width: 35px
        height: 35px
      .music-info
        display: inline-block
        vertical-align: top
        margin-top : 11px
        margin-left: 10px
        .music-name
          font-size : 12px
          color : #e8e8e8
        .music-author
          margin-left: 10px
          font-size : 12px
          color : #9b9b9b
        .icon-music-link
          margin-left: 10px
      .music-process
        position : absolute
        bottom : 5px
        left : 48px
        width: 493px
        height: 10px
        background-image: url("../assets/statbar.png")
        .music-process-cur
          position : relative
          width: 30%
          height: 100%
          background-image: url("../assets/statbar.png")
          background-position : 0px -65px
        .icon-music-bar
          position : absolute
          left : 100%
          transform : translateY(-25%)
      .music-timer
        position : absolute
        top : 0
        left : 100%
        transform : translateY(-20%) translateX(50%)
        color : #797979
        font-size : 12px
        letter-spacing: 0.05em
  .footer-locker
    position : absolute
    top : -13px
    right : 0px
    width: 52px
    height: 20px
    background-image: url("../assets/playbar.png")
    background-position: 0px -380px
    .icon-lock
      position : absolute
      left : 50%
      top : 50%
      transform : translateX(-50%) translateY(-25%)

.footer-transition
  bottom : -44px
  transition : all .5s
  &:hover
    bottom : 0px
</style>
