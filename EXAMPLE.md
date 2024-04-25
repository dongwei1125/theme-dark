# Example

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Example</title>

  <script src="https://unpkg.com/vue@2.5.17/dist/vue.min.js"></script>
  <script src="https://unpkg.com/element-ui@2.15.13/lib/index.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.13/lib/theme-chalk/button.css">
  <link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/button.color.css">

  <style>
    html {
      background: #ffffff;
    }

    .dark {
      background: #141414;
      transition: background 0.2s;
    }

    body {
      margin: 0;
      padding: 24px;
    }

    .el-row {
      margin-top: 24px;
    }
  </style>
</head>

<body>
  <div id="app">
    <el-button @click="dark = !dark">切换</el-button>

    <el-row>
      <el-button>默认</el-button>
      <el-button type="primary">主要</el-button>
      <el-button type="success">成功</el-button>
      <el-button type="info">信息</el-button>
      <el-button type="warning">警告</el-button>
      <el-button type="danger">危险</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素</el-button>
      <el-button type="primary" plain>主要</el-button>
      <el-button type="success" plain>成功</el-button>
      <el-button type="info" plain>信息</el-button>
      <el-button type="warning" plain>警告</el-button>
      <el-button type="danger" plain>危险</el-button>
    </el-row>
  </div>

  <script>
    new Vue({
      el: '#app',
      data() {
        return {
          dark: false,
        }
      },
      watch: {
        dark(value) {
          value ? this.open() : this.close()
        },
      },
      methods: {
        open() {
          const withoutClassName = !document.documentElement.classList.contains('dark')

          withoutClassName && document.documentElement.classList.add('dark')
        },

        close() {
          document.documentElement.classList.remove('dark')
        },
      },
    })
  </script>
</body>

</html>
```