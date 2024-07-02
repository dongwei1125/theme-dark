<h1 style="color: #409eff; text-align: center; font-size: 50px">Element-theme-darkplus</h1>

<p style='text-align: center'>
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

[简体中文](README.md) | English

## Introduction

The [element-theme-darkplus](https://github.com/dongwei1125/theme-dark) is an [Element](https://github.com/ElemeFE/element) component dark theme base on the latest version `v2.15.14`.

 - [Preview](https://dongwei1125.github.io/theme-dark)
 - [Look Around](https://juejin.cn/post/7254372820172030011)

## Sample

 - [Simple Switch](https://codepen.io/dongwei1125/pen/VwOoWLy)
 - [Progress](https://codepen.io/dongwei1125/pen/vYwoZez)
 - [StartViewTransition/Persistence/System Responsive](https://codepen.io/dongwei1125/pen/dyExzaP)

## Install

```bash
npm i element-theme-darkplus -S
```

## Import

```javascript
// webpack
import 'element-theme-darkplus/lib/index.css';

// CDN
<link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/index.css">
```

## Import on demand

```javascript
import 'element-theme-darkplus/lib/input.css';

// CDN
<link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/input.css">
```

## Switch

If you have a chalk theme, a dark theme, two themes free to switch, then this way is best for you.

```javascript
import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-darkplus/lib/index.color.css';
```

The official chalk theme [theme-chalk](https://github.com/ElementUI/theme-chalk) includes component basic styles and chalk colors, while the dark theme [element-theme-darkplus](https://github.com/dongwei1125/theme-dark) also includes component basic styles and dark colors. Importing both will result in redundant component basic styles. Therefore, we have provided an additional theme pack that only includes dark colors. The import method is very simple, just add a `color` suffix to the style file with the same name.

```javascript
import `element-theme-darkplus/lib/index.color.css`;
import `element-theme-darkplus/lib/input.color.css`;
```

## Advanced

The rating component [Rate](https://github.com/ElemeFE/element/blob/master/packages/rate/src/main.vue) is special, with default values defined for color related `props` within the `Element`, and inline styles used in the `template`, resulting in external theme styles that cannot be overwritten.

| `Props` | `Default` |
| --- | --- |
| `void-color` | `#c6d1de` |
| `disabled-void-color` | `#eff2f7` |
| `text-color` | `#1f2d3d` |

The transitive null value reset the corresponding `props` value for the subject to take effect.

```html
<el-rate :value="3" show-text void-color="" text-color="" />
```

The progress bar component [Progress](https://github.com/ElemeFE/element/blob/master/packages/progress/src/progress.vue) is similar, only line progress bar are supported, and circle and dashboard shapes are not supported.

| `Props` | `Default` |
| --- | --- |
| `define-back-color` | `#ebeef5` |
| `text-color` | `#606266` |

```html
<el-progress :percentage="20" define-back-color="" text-color="" />
```

Although the two components can pass null values to reset properties to support dark themes, for students who are not concerned about this feature, it is unclear why properties such as `text-color=""` are passed in, which undoubtedly adds mental burden at the development level.

The style approach cannot solve the fundamental problem of `Rate` and `Progress`.

We have considered another approach, which is to redefine the `Rate` and `Progress` components, but without compromising the scalability and uniqueness of the original components. Therefore, we adopted the method of inheriting the original components and added an intermediate layer in `javascript` to help users initially empty the relevant color `props`.

### Import

```javascript
import ElementUI from 'element-ui'
import Darken from 'element-theme-darkplus/utils/darken'

Vue.use(ElementUI)
Vue.use(Darken(ElementUI))
```

### Import on demand

```javascript
import { Progress, Rate } from 'element-ui'
import Darken from 'element-theme-darkplus/utils/darken'

Vue.component(Progress.name, Darken(Progress))// or Vue.use(Darken(Progress))
Vue.component(Rate.name, Darken(Rate))
```

### CDN

```html
<script src="https://unpkg.com/element-theme-darkplus/utils/darken.js"></script>
```

## Problem

### How to persist themes, update themes responsive to the system?

The theme `switch` in [The preview page](https://dongwei1125.github.io/theme-dark) has added common dark theme functions, such as browser caching to permanently save the user's frequently used theme status, dynamically switching theme styles according to operating system presets, and media query style transition. You can refer to the component [ThemeToggle](https://github.com/dongwei1125/theme-dark/tree/master/docs/components/ThemeToggle/dark).

### Persistent loading for the first time in dark mode with white screen?

The reason is that the page has already been loaded, and the instance component only starts adding the `dark` class name to the `DOM` root element during the [Vue](https://v2.cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90) lifecycle. However, before the loading time, it still defaults to the initial style, which will cause the page to white screen.

The solution is very simple. Add a script to the `head` in the `html`, which reads cache or operating system theme keywords before loading the page, and considers whether to add a `dark` class name to the root element of the `DOM`.

```html
<script src="https://unpkg.com/element-theme-darkplus/utils/dark-mode.js"></script>
```
