<template>
  <div>
    <h2 id="DatePicker">DatePicker 日期选择器</h2>

    <div class="example">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-date-picker
            v-model="dateValue"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="datetimeValue" type="datetime" placeholder="选择日期时间" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="8">
          <el-date-picker v-model="weekValue" type="week" format="yyyy 第 WW 周" placeholder="选择周" />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="monthValue" type="month" placeholder="选择月" />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="yearValue" type="year" placeholder="选择年" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="8">
          <el-date-picker v-model="datesValues" type="dates" placeholder="选择一个或多个日期" />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="monthsValues" type="months" placeholder="选择一个或多个月" />
        </el-col>
        <el-col :span="8">
          <el-date-picker v-model="yearsValues" type="years" placeholder="选择一个或多个年" />
        </el-col>
      </el-row>

      <el-row :gutter="12">
        <el-col :span="12">
          <el-date-picker
            v-model="monthrangeValues"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
          />
        </el-col>
        <el-col :span="12">
          <el-date-picker
            v-model="daterangeValues"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-col>
      </el-row>

      <el-row>
        <el-date-picker
          v-model="datetimerangeValues"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      dateValue: '',
      datetimeValue: '',
      weekValue: '',
      monthValue: '',
      yearValue: '',
      datesValues: [],
      monthsValues: [],
      yearsValues: [],
      monthrangeValues: [],
      daterangeValues: [],
      datetimerangeValues: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()

              date.setTime(date.getTime() - 3600 * 1000 * 24)

              picker.$emit('pick', date)
            },
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()

              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)

              picker.$emit('pick', date)
            },
          },
        ],
      },
    }
  },
}
</script>
