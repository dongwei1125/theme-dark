<template>
  <div>
    <h2 id="Badge">Badge 标记</h2>

    <div class="example">
      <el-badge :value="12">
        <el-button>评论</el-button>
      </el-badge>
      <el-badge :value="2" type="warning">
        <el-button>回复</el-button>
      </el-badge>
      <el-badge is-dot>
        <el-button icon="el-icon-share" type="primary" />
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badge',
}
</script>

<style scoped>
.el-badge {
  margin-right: 16px;
}
</style>
