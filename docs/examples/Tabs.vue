<template>
  <div>
    <h2 id="Tabs">Tabs 标签页</h2>

    <div class="example">
      <el-row>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second" disabled>配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>

      <el-row>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second" disabled>配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>

      <el-row>
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second" disabled>配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-row>

      <el-row>
        <el-tabs v-model="tab" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name">
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeName: 'second',
      tab: '2',
      tabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      tabIndex: 2,
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex + ''

        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content',
        })

        this.editableTabsValue = newTabName
      }

      if (action === 'remove') {
        const tabs = this.editableTabs
        var activeName = this.editableTabsValue

        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]

              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    },
  },
}
</script>
