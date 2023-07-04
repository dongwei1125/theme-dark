<template>
  <div class="index">
    <div class="navbar">
      <h1>Element-theme-darkplus</h1>

      <div>
        <a href="https://github.com/dongwei1125/theme-dark" target="_black">GitHub</a>
        <a href="https://gitee.com/dongwei1125/theme-dark" target="_black">Gitee</a>
        <a href="https://www.npmjs.com/package/element-theme-darkplus" target="_black">NPM</a>
        <el-switch v-model="dark" />
      </div>
    </div>

    <div class="content">
      <alert-example />
      <autocomplete-example />
      <avatar-example />
      <backtop-example />
      <badge-example />
      <breadcrumb-example />
      <button-example />
      <calendar-example />
      <card-example />
      <carousel-example />
      <cascader-example />
      <checkbox-example />
      <collapse-example />
      <color-picker-example />
      <date-picker-example />
      <descriptions-example />
      <dialog-example />
      <divider-example />
      <drawer-example />
      <dropdown-example />
      <empty-example />
      <form-example />
      <image-example />
      <input-number-example />
      <input-example />
      <link-example />
      <loading-example />
      <menu-example />
      <message-box-example />
      <message-example />
      <notification-example />
      <pageHeader-example />
      <pagination-example />
      <popconfirm-example />
      <popover-example />
      <progress-example />
      <radio-example />
      <rate-example />
      <result-example />
      <scrollbar-example />
      <select-example />
      <skeleton-example />
      <slider-example />
      <statistic-example />
      <steps-example />
      <switch-example />
      <table-example />
      <tabs-example />
      <tag-example />
      <time-picker-example />
      <timeline-example />
      <tooltip-example />
      <transfer-example />
      <tree-example />
      <upload-example />
    </div>
  </div>
</template>

<script>
import { hasClass, addClass, removeClass } from './utils/dom.js'

import AlertExample from './examples/Alert.vue'
import AutocompleteExample from './examples/Autocomplete.vue'
import AvatarExample from './examples/Avatar.vue'
import BacktopExample from './examples/Backtop.vue'
import BadgeExample from './examples/Badge.vue'
import BreadcrumbExample from './examples/Breadcrumb.vue'
import ButtonExample from './examples/Button.vue'
import CalendarExample from './examples/Calendar.vue'
import CardExample from './examples/Card.vue'
import CarouselExample from './examples/Carousel.vue'
import CascaderExample from './examples/Cascader.vue'
import CheckboxExample from './examples/Checkbox.vue'
import CollapseExample from './examples/Collapse.vue'
import ColorPickerExample from './examples/ColorPicker.vue'
import DatePickerExample from './examples/DatePicker.vue'
import DescriptionsExample from './examples/Descriptions.vue'
import DialogExample from './examples/Dialog.vue'
import DividerExample from './examples/Divider.vue'
import DrawerExample from './examples/Drawer.vue'
import DropdownExample from './examples/Dropdown.vue'
import EmptyExample from './examples/Empty.vue'
import FormExample from './examples/Form.vue'
import ImageExample from './examples/Image.vue'
import InputNumberExample from './examples/InputNumber.vue'
import InputExample from './examples/Input.vue'
import LinkExample from './examples/Link.vue'
import LoadingExample from './examples/Loading.vue'
import MenuExample from './examples/Menu.vue'
import MessageBoxExample from './examples/MessageBox.vue'
import MessageExample from './examples/Message.vue'
import NotificationExample from './examples/Notification.vue'
import PageHeaderExample from './examples/PageHeader.vue'
import PaginationExample from './examples/Pagination.vue'
import PopconfirmExample from './examples/Popconfirm.vue'
import PopoverExample from './examples/Popover.vue'
import ProgressExample from './examples/Progress.vue'
import RadioExample from './examples/Radio.vue'
import RateExample from './examples/Rate.vue'
import ResultExample from './examples/Result.vue'
import ScrollbarExample from './examples/Scrollbar.vue'
import SelectExample from './examples/Select.vue'
import SkeletonExample from './examples/Skeleton.vue'
import SliderExample from './examples/Slider.vue'
import StatisticExample from './examples/Statistic.vue'
import StepsExample from './examples/Steps.vue'
import SwitchExample from './examples/Switch.vue'
import TableExample from './examples/Table.vue'
import TabsExample from './examples/Tabs.vue'
import TagExample from './examples/Tag.vue'
import TimePickerExample from './examples/TimePicker.vue'
import TimelineExample from './examples/Timeline.vue'
import TooltipExample from './examples/Tooltip.vue'
import TransferExample from './examples/Transfer.vue'
import TreeExample from './examples/Tree.vue'
import UploadExample from './examples/Upload.vue'

const ClassName = 'dark'

export default {
  name: 'Index',
  components: {
    AlertExample,
    AutocompleteExample,
    AvatarExample,
    BacktopExample,
    BadgeExample,
    BreadcrumbExample,
    ButtonExample,
    CalendarExample,
    CardExample,
    CarouselExample,
    CascaderExample,
    CheckboxExample,
    CollapseExample,
    ColorPickerExample,
    DatePickerExample,
    DescriptionsExample,
    DialogExample,
    DividerExample,
    DrawerExample,
    DropdownExample,
    EmptyExample,
    FormExample,
    ImageExample,
    InputNumberExample,
    InputExample,
    LinkExample,
    LoadingExample,
    MenuExample,
    MessageBoxExample,
    MessageExample,
    NotificationExample,
    PageHeaderExample,
    PaginationExample,
    PopconfirmExample,
    PopoverExample,
    ProgressExample,
    RadioExample,
    RateExample,
    ResultExample,
    ScrollbarExample,
    SelectExample,
    SkeletonExample,
    SliderExample,
    StatisticExample,
    StepsExample,
    SwitchExample,
    TableExample,
    TabsExample,
    TagExample,
    TimePickerExample,
    TimelineExample,
    TooltipExample,
    TransferExample,
    TreeExample,
    UploadExample,
  },
  data() {
    return {
      dark: false,
    }
  },
  watch: {
    dark(value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    },
  },
  methods: {
    open() {
      const withoutClassName = !hasClass(document.documentElement, ClassName)

      if (withoutClassName) {
        addClass(document.documentElement, ClassName)
      }
    },

    close() {
      removeClass(document.documentElement, ClassName)
    },
  },
}
</script>

<style scoped>
.navbar {
  height: 55px;
  line-height: 55px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 26px 0 32px;
  border-bottom: 1px solid var(--border-color);
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
}

.navbar h1 {
  margin: 0;
  color: #409eff;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Segoe UI';
}

.navbar a {
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  font-size: 15px;
  font-weight: bold;
  color: #409eff;
  text-decoration: none;
}

.content {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
}
</style>
