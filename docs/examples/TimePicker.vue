<template>
  <div>
    <h2 id="TimePicker">TimePicker 时间选择器</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-time-select
            v-model="selectValue"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
              minTime: '08:30',
            }"
            placeholder="选择时间"
          >
          </el-time-select>
        </el-col>
        <el-col :span="8">
          <el-time-picker
            v-model="pickerValue"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00',
            }"
            arrow-control
            placeholder="任意时间点"
          >
          </el-time-picker>
        </el-col>
      </el-row>

      <el-row>
        <el-time-picker
          v-model="values"
          is-range
          arrow-control
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
        >
        </el-time-picker>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimePicker',
  data() {
    return {
      selectValue: '',
      pickerValue: '',
      values: [new Date(), new Date()],
    }
  },
}
</script>
