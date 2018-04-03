<template lang="html">
  <div class = "homepage">
    <app-header></app-header>
    <user-main></user-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Public from '../public'
import userMain from "../components/user-main"

export default {
  mixins : [
    Public
  ],
  components : {
    userMain
  }
}
</script>

<style lang="sass">
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

.homepage
  background-color : #f5f5f5

.homepage:after
  content : ''
  display : block
  height : 0
  clear : both
</style>
