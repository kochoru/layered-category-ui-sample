<template>
  <el-container>
    <mercari />
    <br>
    <mercari-multi />
    <br>
    <yahoo />
    <br>
    <rakuma />
  </el-container>
</template>

<script>
import Mercari from '~/components/TheMercari.vue'
import MercariMulti from '~/components/TheMercariMulti.vue'
import Yahoo from '~/components/TheYahoo.vue'
import Rakuma from '~/components/TheRakuma.vue'

export default {
  components: {
    Mercari,
    MercariMulti,
    Yahoo,
    Rakuma
  }
}
</script>

<style>
.el-container {
  display: initial;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
