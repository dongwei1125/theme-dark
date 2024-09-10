<h1 align="center">Element-theme-darkplus</h1>

<p align="center">
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.15.14-blue.svg" alt="element-ui" />
  </a>
  <a href="https://github.com/gulpjs/gulp">
    <img src="https://img.shields.io/badge/gulp-4.0.2-brightgreen.svg" alt="gulp" />
  </a>
  <a href="https://github.com/sass/dart-sass">
    <img src="https://img.shields.io/badge/sass-1.32.13-important.svg" alt="sass" />
  </a>
</p>

简体中文 | [English](README.en.md)

## 简介

[element-theme-darkplus](https://github.com/dongwei1125/theme-dark) 是一套暗黑风格主题，基于 [Element](https://github.com/ElemeFE/element) 最新版本`v2.15.14`。

 - [在线预览](https://dongwei1125.github.io/theme-dark)
 - [随便看看](https://juejin.cn/post/7254372820172030011)

## 示例

 - [简单切换](https://codepen.io/dongwei1125/pen/VwOoWLy)
 - [Progress](https://codepen.io/dongwei1125/pen/vYwoZez)
 - [视图过渡/持久化/操作系统响应式](https://codepen.io/dongwei1125/pen/dyExzaP)

## 安装

```bash
npm i element-theme-darkplus -S
```

## 引入

```javascript
// Webpack
import 'element-theme-darkplus/lib/index.css';

// CDN
<link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/index.css">
```

## 部分引入

```javascript
// Webpack
import 'element-theme-darkplus/lib/input.css';

// CDN
<link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/input.css">
```

## 切换式

如果你准备了一套白垩主题，一套暗黑主题，两种主题自由切换，那么以下最适合你。

```javascript
import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-darkplus/lib/index.color.css';
```

其中官方白垩主题 [theme-chalk](https://github.com/ElementUI/theme-chalk) 包含了组件基础样式和白垩颜色，暗黑主题 [element-theme-darkplus](https://github.com/dongwei1125/theme-dark) 也包括了组件基础样式和暗黑颜色，两者同时引入将造成组件基础样式重复冗余，因此我们额外提供了一套仅包含暗黑颜色的主题包，引入方式非常简单，同名样式文件添加`color`后缀即可。

```javascript
import `element-theme-darkplus/lib/index.color.css`;
import `element-theme-darkplus/lib/input.color.css`;
```

## 高级

评分组件 [Rate](https://github.com/ElemeFE/element/blob/master/packages/rate/src/main.vue) 较为特殊，`Element`内部与颜色相关`props`均定义了默认值，且`template`模板中都采用内联样式，导致外部主题样式无法覆盖。

| `Props` | `默认值` |
| --- | --- |
| `void-color` | `#c6d1de` |
| `disabled-void-color` | `#eff2f7` |
| `text-color` | `#1f2d3d` |

可传空值重置相应`props`值使主题生效。

```html
<el-rate :value="3" show-text void-color="" text-color="" />
```

进度条组件 [Progress](https://github.com/ElemeFE/element/blob/master/packages/progress/src/progress.vue) 类似，仅线形进度条支持，环形和仪表盘形不支持。

| `Props` | `默认值` |
| --- | --- |
| `define-back-color` | `#ebeef5` |
| `text-color` | `#606266` |

```html
<el-progress :percentage="20" define-back-color="" text-color="" />
```

虽然两组件可以传空值重置属性以支持暗黑主题，而对于不关心此功能的同学，却不清楚为什么会传入诸如`text-color=""`这样的属性，这无疑在开发层面徒增了心智负担。

嗯`...`样式么法解决`Rate`和`Progress`根本性问题了。

重新定义`Rate`和`Progress`组件可以吗？还不能破坏原组件的拓展性和唯一性，则采用继承原始组件并在`javascript`里做了一个中间层，帮助用户初始置空相关颜色`props`。

### 全量引入

```javascript
import ElementUI from 'element-ui'
import Darken from 'element-theme-darkplus/utils/darken'

Vue.use(ElementUI)
Vue.use(Darken(ElementUI))
```

### 按需引入

```javascript
import { Progress, Rate } from 'element-ui'
import Darken from 'element-theme-darkplus/utils/darken'

Vue.component(Progress.name, Darken(Progress))// or Vue.use(Darken(Progress))
Vue.component(Rate.name, Darken(Rate))
```

### CDN 引入

```html
<script src="https://unpkg.com/element-theme-darkplus/utils/darken.js"></script>
```

## 常见问题

### 如何持久化主题、跟随系统响应式更新主题等？

[预览页](https://dongwei1125.github.io/theme-dark) 中主题切换开关`switch`添加了常见的暗黑主题功能，例如浏览器缓存永久保存用户常用主题状态、跟随操作系统预设动态切换主题风格、媒体查询式主题风格过渡等，可参考组件 [ThemeToggle](https://github.com/dongwei1125/theme-dark/tree/master/docs/components/ThemeToggle/dark) 和 [示例](https://codepen.io/dongwei1125/pen/dyExzaP)。

### 持久化首次载入暗黑模式白屏？

原因在于页面已经加载，实例组件在 [Vue](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90) 生命周期内才开始对`DOM`根元素增加`dark`类名，而在载入时间前，还是默认初始样式，此段时间将造成页面白屏。

解决方式非常简单，在`html`内`head`新增脚本，即在载入页面前，读取缓存或者操作系统主题关键字，并考虑是否对`DOM`根元素增加`dark`类名。

```html
<script src="https://unpkg.com/element-theme-darkplus/utils/dark-mode.js"></script>
```

支持自定义浏览器缓存字的键名。

```html
<script src="https://unpkg.com/element-theme-darkplus/utils/dark-mode.js" storage-key="custom-theme-appearance"></script>
```
