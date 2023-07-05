<template>
  <div>
    <h2 id="Menu">Menu 导航菜单</h2>

    <div class="example">
      <el-row>
        <el-menu mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>

            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>

            <el-submenu index="2-4">
              <template slot="title">选项4</template>

              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="8">
          <el-menu>
            <el-menu-item index="1">处理中心</el-menu-item>

            <el-submenu index="2">
              <template slot="title">我的工作台</template>

              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>

              <el-submenu index="2-4">
                <template slot="title">选项4</template>

                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="8">
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>

            <el-submenu index="2">
              <template slot="title">我的工作台</template>

              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>

              <el-submenu index="2-4">
                <template slot="title">选项4</template>

                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="8">
          <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>

          <el-menu :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location" />
                <span slot="title">导航一</span>
              </template>

              <el-menu-item-group>
                <span slot="title">分组一</span>

                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>

              <el-submenu index="1-4">
                <span slot="title">选项4</span>

                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="2">
              <i class="el-icon-menu" />
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document" />
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting" />
              <span slot="title">导航四</span>
            </el-menu-item>

            <el-submenu index="5" :popper-append-to-body="false">
              <template slot="title">
                <i class="el-icon-s-order" />
                <span slot="title">导航五</span>
              </template>

              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-menu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isCollapse: true,
    }
  },
}
</script>

<style scoped>
.el-radio-group {
  margin-bottom: 20px;
}

.el-col:last-child .el-menu:not(.el-menu--collapse) {
  width: 220px;
}
</style>
