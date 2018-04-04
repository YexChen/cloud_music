export const user = (state) => state.user
export const userAvatar = (state, getters) => getters.user.avatarUrl

export const albums = (state) => state.albums
export const userAlbums = (state) => state.userAlbums

export const musicLists = (state) => state.music
export const musicSingle = (state) => state.music[0]
export const currentAlbum = (state) => state.currentAlbum

export const musicControl = (state) => state.musicControl
