<template>
  <div>
    <h2 id="Table">Table 表格</h2>

    <div class="example">
      <el-row>
        <el-table :data="tableData" stripe border highlight-current-row>
          <el-table-column type="selection" width="55" />
          <el-table-column type="index" width="50" />
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-row>

      <el-row>
        <el-table :data="tableData" :row-class-name="tableRowClassName">
          <el-table-column prop="date" label="日期" width="150" />
          <el-table-column label="配送信息">
            <el-table-column prop="name" label="姓名" width="120" />

            <el-table-column label="地址">
              <el-table-column prop="province" label="省份" width="120" />
              <el-table-column prop="city" label="市区" width="120" />
              <el-table-column prop="address" label="地址" width="300" />
              <el-table-column prop="zip" label="邮编" width="120" />
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-row>

      <el-row>
        <el-table :data="tableData" border>
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180"
            :filters="[
              { text: '2023-05-01', value: '2023-05-01' },
              { text: '2023-05-02', value: '2023-05-02' },
              { text: '2023-05-03', value: '2023-05-03' },
              { text: '2023-05-04', value: '2023-05-04' },
            ]"
          />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </el-row>

      <el-row>
        <el-table :data="goodsData">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline>
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column label="商品 ID" prop="id" />
          <el-table-column label="商品名称" prop="name" />
          <el-table-column label="描述" prop="desc" />
        </el-table>
      </el-row>

      <el-row>
        <el-table :data="amountData" border show-summary>
          <el-table-column prop="id" label="ID" width="180" fixed />
          <el-table-column prop="name" label="姓名" fixed />
          <el-table-column prop="amount1" label="数值 1（元）" />
          <el-table-column prop="amount2" label="数值 2（元）" fixed="right" />
          <el-table-column prop="amount3" label="数值 3（元）" fixed="right" />
        </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableData: [
        {
          date: '2023-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2023-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
      goodsData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
        },
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
        },
        {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
        },
        {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
        },
      ],
      amountData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
    }
  },
  methods: {
    tableRowClassName({ _, rowIndex }) {
      return rowIndex % 2 ? 'success-row' : 'current-row'
    },
  },
}
</script>

<style scoped>
.el-table >>> .success-row {
  background: #f0f9eb;
}

.dark .el-table >>> .success-row {
  background: #1c2518;
}

.el-form >>> .el-form-item__label {
  width: 90px;
  color: #99a9bf;
}

.el-form >>> .el-form-item {
  margin-bottom: 0;
  width: 50%;
}
</style>
