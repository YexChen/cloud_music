<template lang="html">
  <main class = "main">
    <app-banner></app-banner>
    <app-content></app-content>
    <app-aside></app-aside>
  </main>
</template>

<script>
import appContent from"./app-content"
import appAside from "./app-aside"
import appBanner from "./app-banner"
export default {
  components : {
    appBanner,
    appContent,
    appAside
  }
}
</script>

<style lang="sass">
.main
  width: 984px
  height : auto
  margin : 0 auto
  &:after
    display : block
    clear : both
    content : ''
    height : 0
  .content
    float: left
    width: 689px
    padding : 20px
    background-color: white
    border-left : 1px solid #c8c8c8
    border-bottom : 1px solid #c8c8c8
  .aside
    float: left
    width: 250px
    background-color: white
</style>
