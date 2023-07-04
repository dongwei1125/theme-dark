<template>
  <div>
    <h2>Tag</h2>

    <div class="example">
      <el-row>
        <el-tag closable>标签一</el-tag>
        <el-tag type="success" closable>标签二</el-tag>
        <el-tag type="info" closable>标签三</el-tag>
        <el-tag type="warning" closable>标签四</el-tag>
        <el-tag type="danger" closable>标签五</el-tag>
      </el-row>

      <el-row>
        <el-tag effect="dark" closable>标签一</el-tag>
        <el-tag type="success" effect="dark" closable>标签二</el-tag>
        <el-tag type="info" effect="dark" closable>标签三</el-tag>
        <el-tag type="warning" effect="dark" closable>标签四</el-tag>
        <el-tag type="danger" effect="dark" closable>标签五</el-tag>
      </el-row>

      <el-row>
        <el-tag effect="plain" closable>标签一</el-tag>
        <el-tag effect="plain" type="success" closable>标签二</el-tag>
        <el-tag effect="plain" type="info" closable>标签三</el-tag>
        <el-tag effect="plain" type="warning" closable>标签四</el-tag>
        <el-tag effect="plain" type="danger" closable>标签五</el-tag>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
}
</script>
