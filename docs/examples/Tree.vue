<template>
  <div>
    <h2>Tree</h2>

    <div class="example">
      <el-row>
        <el-tree :data="data" node-key="id" default-expand-all draggable />
      </el-row>

      <el-row>
        <el-tree
          :data="data"
          node-key="id"
          show-checkbox
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5, 7]"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
              disabled: true,
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
              children: [
                {
                  id: 11,
                  label: '三级 3-2-1',
                },
                {
                  id: 12,
                  label: '三级 3-2-2',
                },
                {
                  id: 13,
                  label: '三级 3-2-3',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {},
}
</script>
