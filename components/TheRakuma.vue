<template>
  <section>
    <h1>ラクマ形式</h1>
    <el-input
      v-model="selectedLabel"
      placeholder="選択してくだちい"
      @focus="dialogVisible = !dialogVisible" />
    <el-dialog
      title="業種を選ぶ"
      :visible.sync="dialogVisible">
      <el-tree
        ref="tree"
        :data="categories"
        show-checkbox
        node-key="id" />
      <span
        slot="footer"
        class="dialog-footer">
        <el-button
          @click="dialogVisible = false">
          キャンセル
        </el-button>
        <el-button
          type="primary"
          @click="onComplete">
          選択
        </el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      categories: [],
      selectedLabel: ''
    }
  },
  created() {
    this.categories = this.normalize()
  },
  methods: {
    ...mapGetters({
      normalize: 'categories/normalize'
    }),
    onComplete: function () {
      this.selectedLabel = this.$refs.tree.getCheckedNodes().reduce((preview, current) => {
        return preview.label + current.label
      })
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>

<style scoped>
.el-input {
  max-width: 15rem;
}
</style>
