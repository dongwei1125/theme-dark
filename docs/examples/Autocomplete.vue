<template>
  <div>
    <h2>Autocomplete</h2>

    <div class="example">
      <el-autocomplete v-model="value" :fetch-suggestions="querySearch" clearable placeholder="请输入" />
      <el-autocomplete
        v-model="value"
        :fetch-suggestions="querySearch"
        placeholder="请输入"
        suffix-icon="el-icon-edit"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  data() {
    return {
      value: '',
      list: [
        { value: 'vue' },
        { value: 'element' },
        { value: 'vuex' },
        { value: 'vue-router' },
        { value: 'babel' },
      ],
    }
  },
  methods: {
    querySearch(_, cb) {
      cb(this.list)
    },
  },
}
</script>

<style scoped>
.el-autocomplete {
  margin-right: 12px;
}
</style>
