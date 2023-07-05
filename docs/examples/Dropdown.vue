<template>
  <div>
    <h2 id="Dropdown">Dropdown 下拉菜单</h2>

    <div class="example">
      <el-row>
        <el-dropdown :hide-on-click="false" trigger="click">
          <span>
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right" />
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown :hide-on-click="false" trigger="click" split-button>
          更多菜单

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown :hide-on-click="false" trigger="click" split-button type="primary">
          更多菜单

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>

      <el-row>
        <el-dropdown :hide-on-click="false" trigger="click">
          <span disabled>更多菜单</span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
}
</script>

<style scoped>
.el-dropdown {
  margin-right: 12px;
}
</style>
