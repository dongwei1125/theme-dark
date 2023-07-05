<template>
  <div>
    <h2 id="Switch">Switch 开关</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-switch v-model="value" active-text="按月付费" inactive-text="按年付费" />
        </el-col>
        <el-col :span="8">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="8">
          <el-switch v-model="value" disabled active-text="按月付费" inactive-text="按年付费" />
        </el-col>
        <el-col :span="8">
          <el-switch v-model="value" disabled active-color="#13ce66" inactive-color="#ff4949" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  data() {
    return {
      value: true,
    }
  },
}
</script>
