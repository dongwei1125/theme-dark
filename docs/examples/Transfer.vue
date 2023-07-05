<template>
  <div>
    <h2 id="Transfer">Transfer 穿梭框</h2>

    <div class="example">
      <el-row>
        <el-transfer v-model="values" filterable filter-placeholder="请输入城市拼音" :data="data">
          <el-button slot="left-footer" size="small">操作</el-button>
          <el-button slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data() {
    return {
      values: [],
      data: [
        {
          label: '上海',
          key: 0,
          pinyin: 'shanghai',
        },
        {
          label: '北京',
          key: 1,
          pinyin: 'beijing',
        },
        {
          label: '广州',
          key: 2,
          pinyin: 'guangzhou',
          disabled: true,
        },
        {
          label: '深圳',
          key: 3,
          pinyin: 'shenzhen',
        },
        {
          label: '南京',
          key: 4,
          pinyin: 'nanjing',
        },
        {
          label: '西安',
          key: 5,
          pinyin: 'xian',
        },
        {
          label: '成都',
          key: 6,
          pinyin: 'chengdu',
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-button--small {
  margin-left: 12px;
  padding: 6px 5px;
}
</style>
