<template lang="html">
  <div class = "user-main">
    <user-aside></user-aside>
    <user-dict></user-dict>
  </div>
</template>

<script>
import userDict from "./user-dict"
import userAside from './user-aside'
export default {
  components : {
    userDict,
    userAside
  }
}
</script>

<style lang="sass">
  .user-main
    width : 982px
    margin : 0 auto
    background-color: #f5f5f5

</style>
