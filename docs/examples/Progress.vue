<template>
  <div>
    <h2 id="Progress">Progress 进度条</h2>

    <div class="example">
      <el-row>
        <el-progress :percentage="20" define-back-color="" text-color="" />
        <el-progress :percentage="40" status="success" define-back-color="" text-color="" />
        <el-progress :percentage="60" status="warning" define-back-color="" text-color="" />
        <el-progress :percentage="80" status="exception" define-back-color="" text-color="" />
      </el-row>

      <el-row>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="20"
          define-back-color=""
          text-color=""
        />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="40"
          status="success"
          define-back-color=""
          text-color=""
        />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="60"
          status="warning"
          define-back-color=""
          text-color=""
        />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="80"
          status="exception"
          define-back-color=""
          text-color=""
        />
      </el-row>

      <el-row>
        <el-progress type="circle" :percentage="0" text-color="" />
        <el-progress type="circle" :percentage="25" text-color="" />
        <el-progress type="circle" :percentage="100" status="success" text-color="" />
        <el-progress type="circle" :percentage="70" status="warning" text-color="" />
        <el-progress type="circle" :percentage="50" status="exception" text-color="" />
      </el-row>

      <el-row>
        <el-progress type="dashboard" :percentage="percentage" text-color="" />

        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease" />
            <el-button icon="el-icon-plus" @click="increase" />
          </el-button-group>
        </div>
      </el-row>

      <el-row>
        <el-progress :percentage="60" color="#e6a23c" define-back-color="#409eff" text-color="#f56c6c" />
        <el-progress
          :percentage="60"
          type="circle"
          color="#e6a23c"
          define-back-color="#409eff"
          text-color="#f56c6c"
        />
        <el-progress
          :percentage="60"
          type="dashboard"
          color="#e6a23c"
          define-back-color="#409eff"
          text-color="#f56c6c"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data() {
    return {
      percentage: 10,
    }
  },
  methods: {
    increase() {
      this.percentage += 10

      if (this.percentage > 100) {
        this.percentage = 100
      }
    },

    decrease() {
      this.percentage -= 10

      if (this.percentage < 0) {
        this.percentage = 0
      }
    },
  },
}
</script>

<style scoped>
.el-progress--text-inside {
  margin-bottom: 12px;
}

.el-progress--text-inside:last-child {
  margin-bottom: 0;
}
</style>
