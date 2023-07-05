<template>
  <div>
    <h2 id="Descriptions">Descriptions 描述列表</h2>

    <div class="example">
      <el-descriptions title="用户信息" border>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Descriptions',
}
</script>
