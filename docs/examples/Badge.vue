<template>
  <div>
    <h2>Badge</h2>

    <div class="example">
      <el-badge :value="12">
        <el-button>评论</el-button>
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
