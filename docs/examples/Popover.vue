<template>
  <div>
    <h2 id="Popover">Popover 弹出框</h2>

    <div class="example">
      <el-popover
        title="标题"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <el-button slot="reference">click 激活</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
}
</script>
