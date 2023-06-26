<template>
  <div>
    <h2>Dialog</h2>

    <div class="example">
      <el-button type="text" @click="visible = true">点击打开 Dialog</el-button>
    </div>

    <el-dialog title="提示" :visible.sync="visible" width="30%" append-to-body>
      <span>这是一段信息</span>

      <span slot="footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      visible: false,
    }
  },
}
</script>
