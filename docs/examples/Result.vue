<template>
  <div>
    <h2>Result</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-result icon="success" title="成功提示" sub-title="请根据提示进行操作">
            <el-button slot="extra" type="primary" size="medium">返回</el-button>
          </el-result>
        </el-col>
        <el-col :span="6">
          <el-result icon="warning" title="警告提示" sub-title="请根据提示进行操作">
            <el-button slot="extra" type="primary" size="medium">返回</el-button>
          </el-result>
        </el-col>
        <el-col :span="6">
          <el-result icon="error" title="错误提示" sub-title="请根据提示进行操作">
            <el-button slot="extra" type="primary" size="medium">返回</el-button>
          </el-result>
        </el-col>
        <el-col :span="6">
          <el-result icon="info" title="信息提示" sub-title="请根据提示进行操作">
            <el-button slot="extra" type="primary" size="medium">返回</el-button>
          </el-result>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
}
</script>
