<template>
  <div>
    <h2>Carousel</h2>

    <div class="example">
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(item, index) in list" :key="index">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      list: [1, 2, 3, 4],
    }
  },
}
</script>

<style scoped>
.el-carousel__item h3 {
  font-size: 24px;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
