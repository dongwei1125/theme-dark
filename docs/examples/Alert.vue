<template>
  <div>
    <h2>Alert</h2>

    <div class="example">
      <el-row>
        <el-alert title="成功" type="success" show-icon />
        <el-alert title="消息" type="info" description="描述" show-icon />
        <el-alert title="警告" type="warning" description="描述" close-text="关闭" />
        <el-alert title="错误" type="error" center show-icon />
      </el-row>

      <el-row>
        <el-alert title="成功" type="success" show-icon effect="dark" />
        <el-alert title="消息" type="info" description="描述" show-icon effect="dark" />
        <el-alert title="警告" type="warning" description="描述" close-text="关闭" effect="dark" />
        <el-alert title="错误" type="error" center show-icon effect="dark" />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
}
</script>

<style scoped>
.el-alert {
  margin-bottom: 12px !important;
}

.el-alert:last-child {
  margin-bottom: 0 !important;
}
</style>
