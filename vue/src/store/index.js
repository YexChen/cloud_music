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
  userAlbums: []
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
    console.log(payload)
    for (let i = 0; i < payload.length; i++) {
      state.userAlbums.push(payload[i])
    }
  },
  [types.UPDATEMUSIC] (state, payload) {
    for (let i = 0; i < payload.tracks.length; i++) {
      state.music.push(payload.tracks[i])
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
