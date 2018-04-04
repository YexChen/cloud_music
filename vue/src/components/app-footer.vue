<template lang="html">
  <footer class = "bottom-music " :class = "{'footer-transition' : isFixed}">
    <div class= "music-inner">
      <div class= "music-prev">
        <i class="icon-prev-music" @click = "prevMusic"></i>
        <i class="icon-music-pause" @click = "playOrStop"></i>
        <i class="icon-next-music" @click = "nextMusic"></i>
      </div>
      <div class= "music-main">
        <img :src="musicControl.picUrl" alt="" class="music-avatar">
        <p class="music-info">
          <span class="music-name">{{musicControl.name}}</span>
          <span class="music-author">{{musicControl.author}}</span>
          <a href="" class="icon-music-link"></a>
        </p>
        <div class="music-process" @click = "musicProgressChanged($event)">
          <div class="music-process-cur" :style = "{width: currentTime/duration *100 +'%'}">
            <span class="icon-music-bar"></span>
          </div>
          <span class="music-timer">{{formattedCurrentTime}}/{{formattedDuration}}</span>
        </div>
      </div>
      <div class = "music-after">

      </div>
    </div>
    <audio @ended = "ended" :src="musicControl.musicUrl" @timeupdate = "timeupdate" autoplay ref = "music">

    </audio>
    <div class="footer-locker" @click = "changeFixed">
      <i class="icon-lock"></i>
    </div>
  </footer>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name : "app-footer",
  data(){
    return{
      isFixed : true,
      currentTime : 0,
      duration : 0
    }
  },
  methods: {
    ended(){
      this.nextMusic()
    },
    changeFixed(){
      this.isFixed = !this.isFixed
    },
    playOrStop(){
      console.dir(this.$refs.music)
      if(this.$refs.music.paused) this.$refs.music.play()
      else this.$refs.music.pause()
    },
    timeupdate(){
      this.currentTime = this.$refs.music.currentTime
      this.duration = this.$refs.music.duration
    },
    musicProgressChanged(e){
      console.log(e.offsetX)
      console.dir(e.target.offsetWidth)
      this.$refs.music.currentTime = e.offsetX/e.target.offsetWidth * this.$refs.music.duration
    },
    ...mapActions([
      'prevMusic',
      'nextMusic'
    ])
  },
  computed: {
    formattedCurrentTime(){
      return Math.floor(this.currentTime/60) + ":" + Math.floor(this.currentTime%60)
    },
    formattedDuration(){
      return Math.floor(this.duration/60) + ":" + Math.floor(this.duration%60)
    },
    ...mapGetters([
      'musicControl'
    ])
  }
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
          pointer-events: none
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
