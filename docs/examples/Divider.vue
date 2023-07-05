<template>
  <div>
    <h2 id="Divider">Divider 分割线</h2>

    <div class="example">
      <el-divider />

      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>

      <el-divider content-position="left">少年包青天</el-divider>

      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>

      <el-divider>
        <i class="el-icon-mobile-phone" />
      </el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
}
</script>

<style scoped>
.el-divider:first-child {
  margin-top: 0;
}

.el-divider:last-child {
  margin-bottom: 0;
}
</style>
