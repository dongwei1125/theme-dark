<template>
  <div>
    <h2>InputNumber</h2>

    <div class="example">
      <el-input-number v-model="num" :min="1" :max="10" />
      <el-input-number v-model="num" disabled />
      <el-input-number v-model="num" controls-position="right" :min="1" :max="10" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data() {
    return {
      num: 1,
    }
  },
}
</script>

<style scoped>
.el-input-number {
  margin-right: 12px;
}
</style>
