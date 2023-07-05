<template>
  <div>
    <h2 id="Checkbox">Checkbox 多选框</h2>

    <div class="example">
      <el-row>
        <el-checkbox-group v-model="values">
          <el-checkbox label="a">复选框 A</el-checkbox>
          <el-checkbox label="b">复选框 B</el-checkbox>
          <el-checkbox label="c" disabled>禁用 C</el-checkbox>
          <el-checkbox label="d" disabled>选中且禁用 D</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox-group v-model="values">
          <el-checkbox-button label="a">复选框 A</el-checkbox-button>
          <el-checkbox-button label="b">复选框 B</el-checkbox-button>
          <el-checkbox-button label="c" disabled>禁用 C</el-checkbox-button>
          <el-checkbox-button label="d" disabled>选中且禁用 D</el-checkbox-button>
        </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox-group v-model="values">
          <el-checkbox label="a" border>复选框 A</el-checkbox>
          <el-checkbox label="b" border>复选框 B</el-checkbox>
          <el-checkbox label="c" border disabled>禁用 C</el-checkbox>
          <el-checkbox label="d" border disabled>选中且禁用 D</el-checkbox>
        </el-checkbox-group>
      </el-row>

      <el-row>
        <el-checkbox :indeterminate="indeterminate">全选</el-checkbox>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      values: ['a', 'c'],
      indeterminate: true,
    }
  },
}
</script>
