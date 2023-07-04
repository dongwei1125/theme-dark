<template>
  <div>
    <h2>Slider</h2>

    <div class="example">
      <el-row>
        <el-slider v-model="value" show-input />
      </el-row>

      <el-row>
        <el-slider v-model="value" disabled />
      </el-row>

      <el-row>
        <el-slider v-model="value" :step="10" show-stops />
      </el-row>

      <el-row>
        <el-slider v-model="range" range :marks="marks" />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      value: 10,
      range: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: { color: '#1989FA' },
          label: this.$createElement('strong', '50%'),
        },
      },
    }
  },
}
</script>
