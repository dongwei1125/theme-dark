<template>
  <div>
    <h2>Input</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-input v-model="input" placeholder="请输入内容" clearable />
        </el-col>
        <el-col :span="8">
          <el-input disabled placeholder="请输入内容" />
        </el-col>
        <el-col :span="8">
          <el-input v-model="input" suffix-icon="el-icon-date" prefix-icon="el-icon-search" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="8">
          <el-input v-model="input" maxlength="5" show-word-limit />
        </el-col>
        <el-col :span="8">
          <el-input value="123456" maxlength="5" show-word-limit />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="12">
          <el-input v-model="input">
            <template slot="prepend">Http://</template>
            <template slot="append">.com</template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input v-model="input">
            <el-select slot="prepend" v-model="select">
              <el-option label="餐厅名" value="1" />
              <el-option label="订单号" value="2" />
            </el-select>
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="12">
          <el-input v-model="input" type="textarea" placeholder="请输入内容" maxlength="30" show-word-limit />
        </el-col>
        <el-col :span="12">
          <el-input v-model="input" type="textarea" disabled />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      input: '',
      select: '',
    }
  },
}
</script>

<style scoped>
.el-select >>> .el-input {
  width: 130px;
}
</style>
