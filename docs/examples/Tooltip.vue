<template>
  <div>
    <h2 id="Tooltip">Tooltip 文字提示</h2>

    <div class="example">
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
}
</script>
