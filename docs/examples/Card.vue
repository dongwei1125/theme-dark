<template>
  <div>
    <h2>Card</h2>

    <div class="example">
      <el-card shadow="hover">
        <template slot="header">卡片</template>

        <ul>
          <li v-for="(item, index) in list" :key="index">{{ item }}</li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      list: ['黄金糕', '双皮奶', '蚵仔煎'],
    }
  },
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  font-size: 14px;
  margin-bottom: 12px;
  list-style: none;
}

li:last-child {
  margin-bottom: 0;
}
</style>
