import * as types from './mutation-types'
import axios from 'axios'

export const initUser = ({commit, dispatch}) => {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let randomString = alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)]
  let randomUser = Math.floor(Math.random() * types.INITUSERCOUNT)
  axios.get(`/wyapi/?type=search&search_type=1002&s=${randomString}`).then((info) => {
    info.data.result.randomUser = randomUser
    commit(types.INITUSER, info.data.result)
    dispatch(types.INITALBUM, info.data.result)
    // console.log(info.data.result)
  }).catch((error) => {
    console.log(error)
  })
}

// 这个函数获取samples里面每个用户的一份歌单，然后存到album里面去
// 要获取的信息有 歌单图片 歌单播放量 歌单名
export const initalbum = (state, payload) => {
  for (let i = 0; i < types.INITUSERCOUNT; i++) {
    axios.get(`/wyapi/?type=search&search_type=1000&s=${payload.userprofiles[i].nickname}`).then((info) => {
      state.commit(types.INITALBUM, info.data.result.playlists[0])
    }).catch((err) => {
      console.log(err)
    })
  }
  // 初始化用户的音乐集
  axios.get(`/wyapi/?type=search&search_type=1000&s=${payload.userprofiles[payload.randomUser].nickname}`).then((info) => {
    state.commit(types.INITUSERALBUM, info.data.result.playlists)
  })
}

// 根据歌单来获取歌单里面所有歌曲
export const fetchMusic = ({commit}, payload) => {
  axios.get(`/wyapi/?type=playlist&id=${payload.id}`).then((info) => {
    commit(types.UPDATEMUSIC, info.data.playlist)
  })
}
