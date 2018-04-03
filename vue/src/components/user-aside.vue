<template lang="html">
  <aside class = "user-aside">
    <ul class = "dict-list">
      <li class = "sub-list"><a>我的电台(1)</a></li>
      <li class = "sub-list"><i class = "list-arr"></i><a>创建的歌单({{userAlbums.length}})</a>
        <ul>
          <li class = "list-block " :class = "{active : index == currentAlbumIndex}" @click = "chooseAlbum(index,album)" v-for = "(album,index) in userAlbums">
            <img :src="album.coverImgUrl" alt="" class = "list-avatar">
            <div class = "list-info">
              <p class = "list-title">{{album.name}}</p>
              <p class = "list-numbers">{{album.playCount}}首</p>
            </div>
          </li>
          <li class = "list-block">
            <img src="../assets/chiro.jpg" alt="" class = "list-avatar">
            <div class = "list-info">
              <p class = "list-title">东方project</p>
              <p class = "list-numbers">168首</p>
            </div>
          </li>
        </ul>
      </li>
      <li class = "sub-list"><i class = "list-arr"></i><a href="#">收藏的歌单(1)</a>
          <ul>
            <li class = "list-block">
              <img src="../assets/chiro.jpg" alt="" class = "list-avatar">
              <div class = "list-info">
                <p class = "list-title">绅士必点的神秘歌单</p>
                <p class = "list-numbers">10首</p>
              </div>
            </li>
          </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      currentAlbumIndex : 0
    }
  },
  methods : {
    chooseAlbum(index,album){
      this.currentAlbumIndex = index
      this.fetchMusic(album)
    },
    ...mapActions([
      'fetchMusic'
    ])
  },
  computed : {
    ...mapGetters([
      'userAlbums'
    ])
  }
}
</script>

<style lang="sass">
  a
    color : black

  .user-aside
    float: left
    width : 240px
    background-color: #f9f9f9
  .dict-list
    min-height : 800px
    border : 1px solid #d2d2d2
    border-top : 0px
    vertical-align: middle
    cursor: pointer
    .sub-list
      position : relative
      display : block
      width : 200px
      vertical-align: middle
      .list-arr
        position : absolute
        top : 22px
        left : 22px
        width : 0
        height : 0
        border : 5px solid transparent
        border-left-color : #cbcbcb
      a
        display : block
        padding : 0px 5px 0px 35px
        width : 100%
        height : 36px
        transform : translateY(50%)
        color : black
        font-weight : bold
        font-size : 14px
      ul
        .list-block
          width : 100%
          padding : 5px 5px 5px 35px
          cursor : pointer
          .list-avatar
            float: left
            width : 40px
            height : 40px
          .list-info
            float : left
            max-width: 130px
            .list-title
              margin-left: 5px
              font-size : 12px
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
            .list-numbers
              margin-left: 5px
              font-size : 12px
              color : #999
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
          &:after
            content : ''
            display : block
            clear : both
          &:hover
            background-color: #e2e2e2
          &:first-child
            margin-top : 10px


        .active
          background-color: #e2e2e2

</style>
