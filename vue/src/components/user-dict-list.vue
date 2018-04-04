<template lang="html">
  <div class="dict-list">
    <div class="pre-title">
      <span class = "dict-info">歌曲列表</span>
      <span class = "dict-number">108首歌</span>
      <span class = "dict-played">播放：<span>137</span>次</span>
    </div>

  <div class="user-table">
    <div class="table-head">
      <div class="table-head-left">
      </div>
      <div class="table-head-title">
        <p>歌曲标题</p>
      </div>
      <div class="table-head-time">
        <p>时长</p>
      </div>
      <div class="table-head-singer">
        <p>歌手</p>
      </div>
      <div class="table-head-album">
        <p>专辑</p>
      </div>
    </div>
    <div class = "table-body">
      <section class = "table-row" v-for = "(music,index) in musicLists">
        <div class="table-body-left">
          <span>{{index+1}}</span>
          <i class = "icon-playmusic2" @click = "playmusic(music,index)"></i>
        </div>
        <div class="table-body-title">
          <p>{{music.name}}</p>
        </div>
        <div class="table-body-time">
          <p>05:50</p>
        </div>
        <div class="table-body-singer">
          <p>{{music.ar[0].name}}</p>
        </div>
        <div class="table-body-album">
          <p>{{music.al.name}}</p>
        </div>
      </section>


    </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'musicLists'
    ])
  },
  methods: {
    playmusic(music,index){
      this.updateMusic(
        {
          music,
          index
        })
    },
    ...mapActions([
      'updateMusic'
    ])
  }
}
</script>

<style lang="sass">
.dict-list
  box-sizing: border-box
  border-left : 1px solid #d1d1d1
  &:after
    content : ''
    display: block
    clear : both
  .pre-title
    padding-bottom : 5px
    border-bottom : 2px solid #c20c0c
    .dict-info
      display: inline-block
      margin-left: 32px
      font-size : 20px
    .dict-number
      display: inline
      margin-left: 20px
      color : #666
      font-size : 12px
    .dict-played
      float: right
      margin-right : 10px
      font-size : 12px
      color : #666
      span
        color : #c20c0c
        font-weight: bold

  .user-table
    .table-head
      height : 34px
      background : linear-gradient(to top,#f8f8f8,white)
      div
        height : 100%
        float: left
        box-sizing: border-box
        border : 1px solid #d5d5d5
        p
          font-size : 12px
          color : #6e6e6e
          line-height : 34px
          text-indent: 1em
      .table-head-left
        width: 74px
      .table-head-title
        width : 303px
      .table-head-time
        width: 111px
      .table-head-singer
        width: 103px
      .table-head-album
        width: 147px
    .table-body
      height : 32px
      .table-row
        background-color: #f7f7f7
        &:nth-child(2n)
          background-color : white
        &:after
          content : ''
          display : block
          clear : both
        div
          height : 100%
          float: left
          p
            font-size : 12px
            color : #6e6e6e
            line-height : 34px
            text-indent: 1em
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
        .table-body-left
          position: relative
          width: 74px
          span
            display: inline-block
            margin-left: 10px
            line-height : 34px
            color : #989898
          i
            position : absolute
            left : 55px
            top : 11px
            vertical-align: middle
            transform : translateY(-10%)
        .table-body-title
          width : 303px
        .table-body-time
          width: 111px
        .table-body-singer
          width: 103px
        .table-body-album
          width: 147px


</style>
