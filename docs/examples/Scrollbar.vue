<template>
  <div>
    <h2 id="Scrollbar">Scrollbar 滚动条</h2>

    <div class="example">
      <el-scrollbar tag="ul">
        <li v-for="(item, index) in 20" :key="index">{{ item }}</li>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scrollbar',
}
</script>

<style scoped>
.el-scrollbar >>> ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.el-scrollbar li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  color: #409eff;
  font-weight: bold;
  box-shadow: 0 0 1px 1px #409eff;
}

.el-scrollbar {
  height: 400px;
}

.el-scrollbar >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
