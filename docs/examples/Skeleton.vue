<template>
  <div>
    <h2 id="Skeleton">Skeleton 骨架屏</h2>

    <div class="example">
      <el-row>
        <el-skeleton />
      </el-row>

      <el-row>
        <el-skeleton animated>
          <template slot="template">
            <el-skeleton-item variant="image" />
            <el-skeleton-item style="width: 50%" />

            <div>
              <el-skeleton-item style="width: 50%" />
              <el-skeleton-item style="width: 30%" />
            </div>
          </template>
        </el-skeleton>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skeleton',
}
</script>

<style scoped>
.el-row:last-child >>> .el-skeleton {
  width: 240px !important;
}

.el-skeleton__image {
  width: 240px !important;
  height: 240px !important;
  margin-bottom: 6px;
}
</style>
