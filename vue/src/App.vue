<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods :{
    ...mapActions([
      'initUser'
    ])
  },
  created(){
    this.initUser()
  }
}
</script>

<style lang = "sass">
*
  margin: 0
  padding: 0

html,body
  width: 100%
  height: 100%

#app
  width: 100%

ul
  list-style: none

a
  text-decoration: none

#app
  background-color: #f5f5f5


</style>
