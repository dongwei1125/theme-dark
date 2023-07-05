<template>
  <div>
    <h2 id="Select">Select 选择器</h2>

    <div class="example">
      <el-row>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :disabled="item.disabled"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-select v-model="value" placeholder="请选择" disabled>
          <el-option
            v-for="item in options"
            :key="item.value"
            :disabled="item.disabled"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-row>

      <el-row>
        <el-select v-model="values" multiple collapse-tags placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>

      <el-row>
        <el-select v-model="groupValue" placeholder="请选择">
          <el-option-group v-for="group in groupOptions" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
      </el-row>

      <el-row>
        <el-select v-model="value" filterable placeholder="请输入关键词">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>

        <el-select
          v-model="values"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      value: '',
      values: [],
      groupValue: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
          disabled: true,
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      groupOptions: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海',
            },
            {
              value: 'Beijing',
              label: '北京',
            },
          ],
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都',
            },
            {
              value: 'Shenzhen',
              label: '深圳',
            },
            {
              value: 'Guangzhou',
              label: '广州',
            },
            {
              value: 'Dalian',
              label: '大连',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-select {
  margin-right: 12px;
}
</style>
