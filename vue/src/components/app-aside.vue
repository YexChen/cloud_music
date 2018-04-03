<template lang="html">
  <aside class="aside">
    <div class="user-center">
      <div class="user-center-top">
        <a href="" class="user-avatar">
          <img :src="user.avatarUrl" alt="">
        </a>
        <div class="user-info">
          <p class = "user-name">{{user.nickname}}</p>
          <a class = "user-level">lv.{{user.playlistCount}}</a>
          <p class = "user-asign">签到</p>
        </div>
      </div>
      <ul class="user-center-bottom">
        <li><p>{{user.gender}}</p><p>动态</p></li>
        <li><p>{{user.follows}}</p><p>关注</p></li>
        <li><p>{{user.followeds}}</p><p>粉丝</p></li>
      </ul>
    </div>
    <div class="aside-others">

    </div>
  </aside>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<style lang="sass">
  .aside
    box-sizing: border-box
    border: 1px solid #c8c8c8
    height : 800px
    .user-center
      width: 100%
      padding-top : 20px
      background-color: #f5f5f5
      box-sizing: border-box
      border-bottom : 1px solid #c8c8c8
      .user-center-top
        display : flex
        .user-avatar
          display: block
          width: 80px
          height: 80px
          margin-left : 20px
          padding : 2px
          border : 1px solid #dadada
          img
            display: block
            width: 80px
            height: 80px
        .user-info
          margin-left : 20px
          .user-name
            flex : 1
            color : #333
            margin-bottom: 2px
            font-size : 14px
            font-weight : bold
          .user-level
            margin-top : 2px
            padding : 2px 8px
            border : 1px solid #e4e4e4
            border-radius : 8px
            font-size : 12px
            color : #858585
          .user-asign
            padding : 7px 38px
            margin-top : 14px
            color : white
            font-size : 12px
            background-color: #2778c6
            border-radius : 5px
      .user-center-bottom
        display : flex
        margin-top : 22px
        margin-left : 20px
        margin-bottom : 18px
        clear : both
        li
          flex : 1
          padding : 0 18px
          border-right : 1px solid #e4e4e4
          color : #666
          p
            font-size : 20px
            &:nth-child(2)
              font-size : 12px
</style>
