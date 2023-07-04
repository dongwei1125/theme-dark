<template>
  <div>
    <h2>Pagination</h2>

    <div class="example">
      <el-row>
        <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="500" />
      </el-row>

      <el-row>
        <el-pagination background layout="prev, pager, next" :total="50" />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
}
</script>
