<template>
  <div>
    <h2 id="Notification">Notification 通知</h2>

    <div class="example">
      <el-button plain @click="open1">成功</el-button>
      <el-button plain @click="open2">警告</el-button>
      <el-button plain @click="open3">消息</el-button>
      <el-button plain @click="open4">错误</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    open1() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      })
    },

    open2() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      })
    },

    open3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息',
      })
    },

    open4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息',
      })
    },
  },
}
</script>
