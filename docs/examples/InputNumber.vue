<template>
  <div>
    <h2 id="InputNumber">InputNumber 计数器</h2>

    <div class="example">
      <el-input-number v-model="value" :min="1" :max="10" />
      <el-input-number v-model="value" disabled />
      <el-input-number v-model="value" controls-position="right" :min="1" :max="10" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data() {
    return {
      value: 1,
    }
  },
}
</script>

<style scoped>
.el-input-number {
  margin-right: 12px;
}
</style>
