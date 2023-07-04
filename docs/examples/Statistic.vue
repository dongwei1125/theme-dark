<template>
  <div>
    <h2>Statistic</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-statistic group-separator="," :precision="2" :value="2222" title="今年的增长" />
        </el-col>
        <el-col :span="6">
          <el-statistic title="男女比">
            <template slot="formatter">456/2</template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic
            group-separator=","
            :precision="2"
            decimal-separator="."
            :value="4154.564"
            title="今年的增长"
          >
            <template slot="prefix">
              <i class="el-icon-s-flag" />
            </template>

            <template slot="suffix">
              <i class="el-icon-s-flag" />
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic :value="like ? 521 : 520" title="Feedback">
            <template slot="suffix">
              <span @click="like = !like">
                <i v-show="like" class="el-icon-star-on" />
                <i v-show="!like" class="el-icon-star-off" />
              </span>
            </template>
          </el-statistic>
        </el-col>
      </el-row>

      <el-row>
        <el-statistic :value="deadline" time-indices title="商品降价">
          <template slot="suffix">抢购即将开始</template>
        </el-statistic>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  data() {
    return {
      like: true,
      deadline: Date.now() + 1000 * 60 * 60 * 8,
    }
  },
}
</script>

<style scoped>
.el-icon-star-on,
.el-icon-s-flag {
  color: red;
}
</style>
