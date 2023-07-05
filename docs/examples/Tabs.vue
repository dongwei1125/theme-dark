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
        <el-tabs v-model="tab" type="card" editable @edit="handleEdit">
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
    handleEdit(targetTab, action) {
      if (action === 'add') {
        const tab = ++this.tabIndex + ''

        this.tabs.push({
          title: 'New Tab',
          name: tab,
          content: 'New Tab content',
        })

        this.tab = tab
      }

      if (action === 'remove') {
        const tabs = this.tabs
        var tab = this.tab

        if (tab === targetTab) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetTab) {
              const nextTab = tabs[index + 1] || tabs[index - 1]

              if (nextTab) {
                tab = nextTab.name
              }
            }
          })
        }

        this.tab = tab
        this.tabs = tabs.filter(tab => tab.name !== targetTab)
      }
    },
  },
}
</script>
