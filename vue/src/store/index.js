import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  // samples是生成推荐的用户
  samples: [],
  music: [],
  albums: [],
  user: {},
  userAlbums: [],
  currentAlbum: 0,
  musicControl: {
    name: '',
    id: 0,
    author: '',
    picUrl: '',
    totaltime: 0,
    currentTIme: 0,
    musicUrl: ''
  },
  musicHistory: []
}

const mutations = {
  [types.INITUSER] (state, info) {
    // 初始化用户信息
    state.user = info.userprofiles[info.randomUser]
    // 初始化靶机信息
    for (let i = 0; i < types.INITUSERCOUNT; i++) {
      state.samples.push(info.userprofiles[i])
    }
    // 初始化专辑信息
  },
  [types.INITALBUM] (state, payload) {
    state.albums.push(payload)
  },
  [types.INITUSERALBUM] (state, payload) {
    for (let i = 0; i < payload.length; i++) {
      state.userAlbums.push(payload[i])
    }
  },
  [types.UPDATEMUSIC] (state, payload) {
    state.music = []
    for (let i = 0; i < payload.tracks.length; i++) {
      state.music.push(payload.tracks[i])
    }
  },
  [types.UPDATEALBUMNAME] (state, {index}) {
    state.currentAlbum = state.userAlbums[index]
  },
  [types.UPDATESONG] (state, {name, id, author, musicUrl, picUrl, index}) {
    if (state.musicControl.id != 0) {
      state.musicHistory.push(state.musicControl)
    }
    state.musicControl = {
      name,
      id,
      author,
      picUrl,
      totaltime: 0,
      currentTIme: 0,
      musicUrl,
      currentIndex: index
    }
  },
  [types.PREVMUSIC] (state) {
    state.musicControl = state.musicHistory.pop()
  },
  [types.NEXTMUSIC] (state, {name, id, author, musicUrl, picUrl, index}) {
    state.musicHistory.push(state.musicControl)
    state.musicControl = {
      name,
      id,
      author,
      picUrl,
      totaltime: 0,
      currentTIme: 0,
      musicUrl,
      currentIndex: index
    }
  }
}
// 这个函数获取samples里面每个用户的一份歌单，然后存到album里面去
// 要获取的信息有 歌单图片 歌单播放量 歌单名
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
