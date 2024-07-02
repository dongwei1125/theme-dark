<template>
  <div>
    <h2 id="Rate">Rate 评分</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-rate v-model="value" />
        </el-col>
        <el-col :span="6">
          <el-rate v-model="value" :colors="colors" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="6">
          <el-rate v-model="value" show-text />
        </el-col>
        <el-col :span="6">
          <el-rate
            v-model="value"
            :colors="colors"
            void-icon-class="el-icon-cloudy"
            :icon-classes="iconClasses"
          />
        </el-col>
        <el-col :span="6">
          <el-rate v-model="value" disabled show-score score-template="{value}" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="6">
          <el-rate v-model="value" show-text void-color="#409eff" text-color="#f56c6c" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  data() {
    return {
      value: 3,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      iconClasses: ['el-icon-light-rain', 'el-icon-lightning', 'el-icon-heavy-rain'],
    }
  },
}
</script>
