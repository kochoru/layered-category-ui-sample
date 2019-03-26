<template>
  <section>
    <h1>ヤフオク形式</h1>
    <el-cascader
      v-model="selectedCategory"
      placeholder="選択してくだちい"
      :options="categories" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      categories: [],
      selectedCategory: []
    }
  },
  created() {
    this.categories = this.normalize()
  },
  methods: {
    ...mapGetters({
      normalize: 'categories/normalize'
    })
  }
}
</script>

<style scoped>

</style>
