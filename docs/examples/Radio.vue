<template>
  <div>
    <h2 id="Radio">Radio 单选框</h2>

    <div class="example">
      <el-row>
        <el-radio-group v-model="value">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9" disabled>备选项</el-radio>
        </el-radio-group>
      </el-row>

      <el-row>
        <el-radio-group v-model="value">
          <el-radio-button :label="3">备选项</el-radio-button>
          <el-radio-button :label="6">备选项</el-radio-button>
          <el-radio-button :label="9" disabled>备选项</el-radio-button>
        </el-radio-group>
      </el-row>

      <el-row>
        <el-radio-group v-model="value">
          <el-radio :label="3" border>备选项</el-radio>
          <el-radio :label="6" border>备选项</el-radio>
          <el-radio :label="9" disabled border>备选项</el-radio>
        </el-radio-group>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      value: 9,
    }
  },
}
</script>
