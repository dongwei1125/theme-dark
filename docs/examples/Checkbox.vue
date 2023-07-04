<template>
  <div>
    <h2>Checkbox</h2>

    <div class="example">
      <el-row>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="a">复选框 A</el-checkbox>
          <el-checkbox label="b">复选框 B</el-checkbox>
          <el-checkbox label="c" disabled>禁用 C</el-checkbox>
          <el-checkbox label="d" disabled>选中且禁用 D</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox :indeterminate="indeterminate">全选</el-checkbox>
      </el-row>

      <el-row>
        <el-checkbox-group v-model="checkList">
          <el-checkbox-button label="a">复选框 A</el-checkbox-button>
          <el-checkbox-button label="b">复选框 B</el-checkbox-button>
          <el-checkbox-button label="c" disabled>禁用 C</el-checkbox-button>
        </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox label="d" border>复选框 A</el-checkbox>
        <el-checkbox label="b" border>复选框 B</el-checkbox>
        <el-checkbox label="c" disabled border>禁用 C</el-checkbox>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checkList: ['a', 'c'],
      indeterminate: true,
    }
  },
}
</script>
