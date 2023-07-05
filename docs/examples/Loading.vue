<template>
  <div>
    <h2 id="Loading">Loading 加载</h2>

    <div class="example">
      <el-row>
        <el-table v-loading="loading" :data="tableData">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-row>

      <el-row>
        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(122, 122, 122, 0.8)"
          :data="tableData"
        >
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: true,
      tableData: [
        {
          date: '2023-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2023-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2023-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
    }
  },
}
</script>
