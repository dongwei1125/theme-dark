<template>
  <div>
    <h2>Steps</h2>

    <div class="example">
      <el-row>
        <el-steps :active="1" finish-status="success">
          <el-step title="步骤 1" />
          <el-step title="步骤 2" />
          <el-step title="步骤 3" />
        </el-steps>
      </el-row>

      <el-row>
        <el-steps :active="1">
          <el-step title="步骤 1" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字" />
          <el-step title="步骤 2" icon="el-icon-upload" description="这是一段很长很长很长的描述性文字" />
          <el-step title="步骤 3" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字" />
        </el-steps>
      </el-row>

      <el-row>
        <el-steps :active="1" simple>
          <el-step title="步骤 1" icon="el-icon-edit" />
          <el-step title="步骤 2" icon="el-icon-upload" />
          <el-step title="步骤 3" icon="el-icon-picture" />
        </el-steps>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
}
</script>
