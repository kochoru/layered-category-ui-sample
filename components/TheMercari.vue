<template>
  <section>
    <h1>メルカリ形式</h1>
    <el-select
      v-model="mainCategory"
      clearable
      placeholder="選択してくだちい"
      @change="onChange"
      @clear="onClear">
      <el-option
        v-for="category in categories"
        :key="category.id"
        :label="category.code + '-' + category.name"
        :value="category.code" />
    </el-select>
    <el-select
      v-if="mainCategory !== ''"
      v-model="subCategory"
      clearable
      placeholder="選択してくだちい">
      <el-option
        v-for="category in subCategories"
        :key="category.id"
        :label="category.id + '-' + category.name"
        :value="category.code" />
    </el-select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      mainCategory: '',
      subCategory: '',
    }
  },
  computed: {
    subCategories: function () {
      return this.$store.state.categories.list.filter(category => {
        return category.parent_id === this.categories.find(element => {
          return element.code === this.mainCategory
        }).id
      })
    }
  },
  created() {
    this.categories = this.$store.state.categories.list.filter(category => {
      return category.parent_id === null
    })
  },
  methods: {
    onClear: function () {
      this.subCategory = ''
    },
    onChange: function () {
      this.subCategory = ''
    }
  }
}
</script>

<style scoped>
</style>
