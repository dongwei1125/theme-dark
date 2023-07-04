<template>
  <div>
    <h2>Cascader</h2>

    <div class="example">
      <el-row>
        <el-cascader placeholder="试试搜索：指南" :options="options" clearable filterable />
        <el-cascader v-model="value" :options="options" disabled />
      </el-row>

      <el-row>
        <el-cascader :options="options" :props="{ checkStrictly: true }" clearable />
        <el-cascader
          :options="options"
          collapse-tags
          :props="{ multiple: true }"
          clearable
          filterable
          placeholder="请选择"
        />
      </el-row>

      <el-row>
        <el-cascader-panel :options="options" />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cascader',
  data() {
    return {
      value: ['zhinan', 'yuanze', 'yizhi'],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'yuanze',
              label: '原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'kekong',
                  label: '可控',
                  disabled: true,
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-cascader {
  margin-right: 12px;
}

.el-cascader:last-child {
  margin-right: 0;
}
</style>
