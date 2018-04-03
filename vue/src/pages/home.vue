<template lang="html">
  <div class = "homepage">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Public from '../public'
import appMain from '@/components/app-main'

export default {
  mixins : [
    Public
  ],
  components : {
    appMain
  },
  created(){

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

</style>
