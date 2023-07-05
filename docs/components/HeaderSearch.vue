<template>
  <div class="header-search" :class="{ 'header-search--expand': isExpand }" @click.stop="toggle">
    <i class="el-icon-search" />

    <el-select
      ref="select"
      v-model="keywords"
      :remote-method="handleSearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="`${item.value} ${item.label}`"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      isExpand: false,
      keywords: '',
      options: [],
      searchPool: [
        {
          value: 'Alert',
          label: '警告',
        },
        {
          value: 'Autocomplete',
          label: '自动补全输入框',
        },
        {
          value: 'Avatar',
          label: '头像',
        },
        {
          value: 'Backtop',
          label: '回到顶部',
        },
        {
          value: 'Badge',
          label: '标记',
        },
        {
          value: 'Breadcrumb',
          label: '面包屑',
        },
        {
          value: 'Button',
          label: '按钮',
        },
        {
          value: 'Calendar',
          label: '日历',
        },
        {
          value: 'Card',
          label: '卡片',
        },
        {
          value: 'Carousel',
          label: '走马灯',
        },
        {
          value: 'Cascader',
          label: '级联选择器',
        },
        {
          value: 'Checkbox',
          label: '多选框',
        },
        {
          value: 'Collapse',
          label: '折叠面板',
        },
        {
          value: 'ColorPicker',
          label: '颜色选择器',
        },
        {
          value: 'DatePicker',
          label: '日期选择器',
        },
        {
          value: 'Descriptions',
          label: '描述列表',
        },
        {
          value: 'Dialog',
          label: '对话框',
        },
        {
          value: 'Divider',
          label: '分割线',
        },
        {
          value: 'Drawer',
          label: '抽屉',
        },
        {
          value: 'Dropdown',
          label: '下拉菜单',
        },
        {
          value: 'Empty',
          label: '空状态',
        },
        {
          value: 'Form',
          label: '表单',
        },
        {
          value: 'Image',
          label: '图片',
        },
        {
          value: 'InputNumber',
          label: '计数器',
        },
        {
          value: 'Input',
          label: '输入框',
        },
        {
          value: 'Link',
          label: '文字链接',
        },
        {
          value: 'Loading',
          label: '加载',
        },
        {
          value: 'Menu',
          label: '导航菜单',
        },
        {
          value: 'MessageBox',
          label: '弹框',
        },
        {
          value: 'Message',
          label: '消息提示',
        },
        {
          value: 'Notification',
          label: '通知',
        },
        {
          value: 'PageHeader',
          label: '页头',
        },
        {
          value: 'Pagination',
          label: '分页',
        },
        {
          value: 'Popconfirm',
          label: '气泡确认框',
        },
        {
          value: 'Popover',
          label: '弹出框',
        },
        {
          value: 'Progress',
          label: '进度条',
        },
        {
          value: 'Radio',
          label: '单选框',
        },
        {
          value: 'Rate',
          label: '评分',
        },
        {
          value: 'Result',
          label: '结果',
        },
        {
          value: 'Scrollbar',
          label: '滚动条',
        },
        {
          value: 'Select',
          label: '选择器',
        },
        {
          value: 'Skeleton',
          label: '骨架屏',
        },
        {
          value: 'Slider',
          label: '滑块',
        },
        {
          value: 'Statistic',
          label: '统计数值',
        },
        {
          value: 'Steps',
          label: '步骤条',
        },
        {
          value: 'Switch',
          label: '开关',
        },
        {
          value: 'Table',
          label: '表格',
        },
        {
          value: 'Tabs',
          label: '标签页',
        },
        {
          value: 'Tag',
          label: '标签',
        },
        {
          value: 'TimePicker',
          label: '时间选择器',
        },
        {
          value: 'Timeline',
          label: '时间线',
        },
        {
          value: 'Tooltip',
          label: '文字提示',
        },
        {
          value: 'Transfer',
          label: '穿梭框',
        },
        {
          value: 'Tree',
          label: '树形控件',
        },
        {
          value: 'Upload',
          label: '上传',
        },
      ],
      fuse: null,
    }
  },
  watch: {
    isExpand(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    },
  },
  mounted() {
    this.initTo()
    this.initFuse()
  },
  methods: {
    initTo() {
      const hash = location.hash

      if (hash) {
        this.linkTo(hash.slice(1))
      }
    },

    initFuse() {
      const keys = [
        { name: 'value', weight: 0.5 },
        { name: 'label', weight: 0.5 },
      ]

      this.fuse = new window.Fuse(this.searchPool, { keys, threshold: 0.4 })
    },

    handleSearch(text) {
      if (text) {
        this.options = this.fuse.search(text).map(({ item }) => item)
      } else {
        this.options = []
      }
    },

    change(anchor) {
      this.linkTo(anchor)

      this.keywords = ''
      this.options = []
      this.isExpand = false
    },

    linkTo(anchor) {
      const { origin, pathname } = location
      const link = document.createElement('a')

      link.href = `${origin}${pathname}#${anchor}`

      link.click()
    },

    toggle() {
      this.isExpand = !this.isExpand

      if (this.isExpand) {
        this.$refs.select?.focus()
      }
    },

    close() {
      this.isExpand = false
      this.options = []
    },
  },
}
</script>

<style scoped>
.header-search {
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
}

.el-icon-search {
  font-size: 18px;
  color: #409eff;
  font-weight: bold;
}

.el-select {
  width: 0;
  transition: width 0.2s;
  overflow: hidden;
  vertical-align: middle;
}

.header-search--expand .el-select {
  width: 210px;
}

.el-select >>> input {
  padding: 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #409eff;
}

.el-select >>> .el-input__suffix {
  display: none;
}
</style>
