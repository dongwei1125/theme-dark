<template>
  <div>
    <h2 id="Button">Button 按钮</h2>

    <div class="example">
      <el-row>
        <el-button>默认</el-button>
        <el-button type="primary">主要</el-button>
        <el-button type="success">成功</el-button>
        <el-button type="info">信息</el-button>
        <el-button type="warning">警告</el-button>
        <el-button type="danger">危险</el-button>
      </el-row>

      <el-row>
        <el-button plain>朴素</el-button>
        <el-button type="primary" plain>主要</el-button>
        <el-button type="success" plain>成功</el-button>
        <el-button type="info" plain>信息</el-button>
        <el-button type="warning" plain>警告</el-button>
        <el-button type="danger" plain>危险</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle />
        <el-button type="primary" icon="el-icon-edit" circle />
        <el-button type="success" icon="el-icon-check" circle />
        <el-button type="info" icon="el-icon-message" circle />
        <el-button type="warning" icon="el-icon-star-off" circle />
        <el-button type="danger" icon="el-icon-delete" circle />
      </el-row>

      <el-row>
        <el-button disabled>默认</el-button>
        <el-button type="primary" disabled>主要</el-button>
        <el-button type="success" disabled>成功</el-button>
        <el-button type="info" disabled>信息</el-button>
        <el-button type="warning" disabled>警告</el-button>
        <el-button type="danger" disabled>危险</el-button>
      </el-row>

      <el-row>
        <el-button plain disabled>朴素</el-button>
        <el-button type="primary" plain disabled>主要</el-button>
        <el-button type="success" plain disabled>成功</el-button>
        <el-button type="info" plain disabled>信息</el-button>
        <el-button type="warning" plain disabled>警告</el-button>
        <el-button type="danger" plain disabled>危险</el-button>
      </el-row>

      <el-row>
        <el-button type="text">文字</el-button>
        <el-button type="text" disabled>文字</el-button>
      </el-row>

      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" />
          <el-button type="primary" icon="el-icon-share" />
          <el-button type="primary" icon="el-icon-delete" />
        </el-button-group>
      </el-row>

      <el-row>
        <el-button type="primary" :loading="true">加载中</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>
