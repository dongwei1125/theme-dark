<template>
  <div>
    <h2 id="Upload">Upload 上传</h2>

    <div class="example">
      <el-row>
        <el-upload :action="action" :file-list="fileList">
          <el-button type="primary">点击上传</el-button>
        </el-upload>
      </el-row>

      <el-row>
        <el-upload :action="action" :file-list="fileList" :on-preview="onPreview" list-type="picture-card">
          <i class="el-icon-plus" />
        </el-upload>
      </el-row>

      <el-row>
        <el-upload :action="action" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <p slot="tip">只能上传jpg/png文件，且不超过500kb</p>
        </el-upload>
      </el-row>

      <el-row>
        <el-upload :action="action" :file-list="fileList" drag>
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <p slot="tip">只能上传jpg/png文件，且不超过500kb</p>
        </el-upload>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    onPreview() {},
  },
}
</script>
