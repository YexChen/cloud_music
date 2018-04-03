<template lang="html">
  <div class = "header">
    <nav class = "nav">
      <div class="nav-inner">
        <img src="../assets/logo.png" alt="" class = "nav-logo">
        <ul class = "nav-menu">
          <li class = "checked"><a href="#/">发现音乐</a></li>
          <li><a href="#/user">我的音乐</a></li>
          <li><a href="">朋友</a></li>
          <li><a href="">商城</a></li>
          <li><a href="">音乐人</a></li>
          <li><a href="">下载客户端</a></li>
        </ul>
        <div class = "nav-search">
          <i></i>
          <input type="text"  placeholder="音乐/视频/电台/用户">
        </div>
        <a href="" class = "nav-button">视频投稿</a>
        <div href="" class="nav-avatar">
          <img :src="userAvatar" alt="">
          <ul class="nav-dragdown">
            <li><i></i><span>我的主页</span></li>
            <li><i></i><span>我的消息</span></li>
            <li><i></i><span>我的等级</span></li>
            <li><i></i><span>VIP会员</span></li>
            <li><i></i><span>个人设置</span></li>
            <li><i></i><span>退出</span></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="subnav">
      <div class="subnav-inner">
        <ul>
          <li class = "active"><a href="">推荐</a></li>
          <li><a href="">排行榜</a></li>
          <li><a href="">歌单</a></li>
          <li><a href="">主播电台</a></li>
          <li><a href="">歌手</a></li>
          <li><a href="">新碟上架</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'userAvatar'
    ])
  }
}
</script>

<style lang="sass">
  $nav-font-color : #ececec
  $nav-font-size-small : 12px
  .nav
    width: 100%
    height: 70px
    font-size : 14px
    background-color: #242424
    .nav-inner
      display : flex
      width: 1153px
      height: 100%
      margin : 0 auto
      align-items : center
    .nav-logo
      margin-right : 20px
    .nav-menu
      position : relative
      height: 100%
      li
        display : flex
        align-items: center
        float : left
        height: 100%
        a
          padding : 0 19px
          color : $nav-font-color
        &:hover
          background-color: #000
      .checked
        background-color : #000
    .nav-search
      position : relative
      margin-left : 90px
      margin-right : 20px
      input
        border-radius : 32px
        border : 0px
        outline : none
        text-indent : 2em
        width: 158px
        height: 32px
        font-size : 12px
      i
        position : absolute
        top : 50%
        left : 6px
        width: 12px
        height: 12px
        transform : translateY(-50%)
        background-image : url("../assets/search.png")
        background-size: 100%
    .nav-button
      color : $nav-font-color
      font-size : $nav-font-size-small
      padding : 8px 8px
      border : 1px solid #4a4a4a
      border-radius : 20px
    .nav-avatar
      position : relative
      margin-left : 30px
      margin-top : 1px
      img
        width: 30px
        height: 30px
        border-radius : 50%
      .nav-dragdown
        display : none
        position : absolute
        left : 50%
        transform : translateX(-50%)
        width: 158px
        margin-top : 10px
        box-shadow : 0 8px 24px 0 rgba(0,0,0,.5)
        z-index : 10
        &:before
          content : ''
          position : absolute
          left : 50%
          transform : translateX(-50%) translateY(-100%)
          border : 10px solid transparent
          border-bottom-color : #2b2b2b
        li
          display : flex
          align-items: center
          height: 34px
          background-color : #2b2b2b
          &:hover
            background-color : #353535
          i
            display: inline-block
            margin-left: 24px
            margin-right : 10px
            width: 18px
            height: 18px
            background-image: url("../assets/toplist.png")
            cursor : pointer
          &:nth-child(1)
            i
              background-position : 0px -80px
          &:nth-child(2)
            i
              background-position : -20px -120px
          &:nth-child(3)
            i
              background-position : 0px -101px
          &:nth-child(4)
            i
              background-position : 0px -220px
          &:nth-child(5)
            i
              background-position : 0px -140px
          &:nth-child(6)
            i
              background-position : 0px -200px
          span
            display : inline-block
            color : #ccc
            font-size : $nav-font-size-small
            cursor : pointer
      &:hover
        .nav-dragdown
          display : block

  .subnav
    width: 100%
    min-width: 1280px
    height: 34px
    background-color: #c20c0c
    border-bottom : 1px solid rgba(164,0,17,1)
    .subnav-inner
      height: 100%
      width: 73%
      margin: 0 auto
      ul
        margin-left : 178px
        li
          position : relative
          float : left
          a
            padding : 3px 13px
            margin : 7px 17px
            color : $nav-font-color
            font-size : $nav-font-size-small
            line-height : 34px
          &:first-child:before
            content : ''
            position : absolute
            left : 50%
            transform : translateX(-50%) translateY(-100%)
            border : 6px solid transparent
            border-bottom-color : #c20c0c
          &:hover
            a
              background-color: #9b0909
              border-radius : 10px
        .active
          a
            background-color: #9b0909
            border-radius : 10px

</style>
