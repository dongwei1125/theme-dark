<template>
  <div>
    <h2>MessageBox</h2>

    <div class="example">
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {})
        .catch(() => {})
    },
  },
}
</script>
