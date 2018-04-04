import * as types from './mutation-types'
import axios from 'axios'

export const initUser = ({commit, dispatch}) => {
  let randomUser
  let randomString
  if (!localStorage.getItem('music_user')) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    randomString = alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)] + alphabet[Math.floor(Math.random() * 26)]
    randomUser = Math.floor(Math.random() * types.INITUSERCOUNT)

    axios.get(`/wyapi/?type=search&search_type=1002&s=${randomString}`).then((info) => {
      info.data.result.randomUser = randomUser
      commit(types.INITUSER, info.data.result)
      dispatch(types.INITALBUM, info.data.result)
      // console.log(info.data.result)
    }).catch((error) => {
      console.log(error)
    })
  } else {
    axios.get(`/wyapi/?type=search&search_type=1002&s=${randomUser}`).then((info) => {
      console.log(info)
      info.data.result.randomUser = randomUser
      commit(types.INITUSER, info.data.result)
      dispatch(types.INITALBUM, info.data.result)
      // console.log(info.data.result)
    }).catch((error) => {
      console.log(error)
    })
  }
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

// 更新目前歌单的名字
export const updateAlbumName = ({commit}, index) => {
  commit(types.UPDATEALBUMNAME, {index: index})
}

// 获取当前歌单的音乐
export const updateMusic = ({commit}, {music, index}) => {
  axios.get(`/wyapi/?type=song&id=${music.id}`).then((info) => {
    commit({
      type: types.UPDATESONG,
      name: music.name,
      author: music.ar[0].name,
      picUrl: music.al.picUrl,
      id: music.id,
      musicUrl: info.data.data[0].url,
      index
    })
  })
}

// 播放上一首歌,需要读取musicHistory,如果不为空则播放上一首,musicHistory
// 清除上一首歌的信息
export const prevMusic = store => {
  if (store.state.musicHistory.length == 0) return
  store.commit(types.PREVMUSIC)
}

// 播放下一首歌,在当前歌单中找到下一首歌,把上一首歌压入历史,然后改变musicControl的值
export const nextMusic = store => {
  let tempIndex = store.state.musicControl.currentIndex
  let albumIndex = store.state.music.length
  // @todos 这里可以添加随机算法,进行随机曲目或者顺序播放
  if (tempIndex < albumIndex - 1) tempIndex++
  else tempIndex = 0
  let currentMusic = store.state.music[tempIndex]
  axios.get(`/wyapi/?type=song&id=${currentMusic.id}`).then(
    (info) => {
      console.log(info)
      console.log(currentMusic)
      store.commit({
        type: types.NEXTMUSIC,
        name: currentMusic.name,
        author: currentMusic.ar[0].name,
        picUrl: currentMusic.al.picUrl,
        id: currentMusic.id,
        musicUrl: info.data.data[0].url,
        index: tempIndex
      })
    }
  ).catch((err) => {
    console.log('axios error occured in nextMusic :' + err)
  })
}
