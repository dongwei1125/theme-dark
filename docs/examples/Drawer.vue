<template>
  <div>
    <h2 id="Drawer">Drawer 抽屉</h2>

    <div class="example">
      <el-button type="primary" @click="visible = true">点我打开</el-button>
    </div>

    <el-drawer title="我是标题" :visible.sync="visible">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style scoped>
.el-drawer__wrapper >>> .el-drawer__body {
  padding: 20px;
}
</style>
