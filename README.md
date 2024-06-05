# element-theme-darkplus

> element component dark theme base on the latest version 2.15.14.

 - [Preview](https://dongwei1125.github.io/theme-dark)

## Example

 - [Example](/EXAMPLE.md)

## Installation

```shell
npm i element-theme-darkplus -S
```

## Usage

Use Sass import

```css
@import 'element-theme-darkplus';
```

Or Use webpack

```javascript
import 'element-theme-darkplus';
```

Or

```html
<link rel="stylesheet" href="https://unpkg.com/element-theme-darkplus/lib/index.css">
```

##  Import on demand

```javascript
import 'element-theme-darkplus/lib/input.css';
import 'element-theme-darkplus/lib/select.css';

// ...
```

##  Import color

```javascript
import 'element-ui/lib/theme-chalk/index.css';
import 'element-theme-darkplus/lib/index.color.css';

// ...
```

## Other

评分组件`Rate`较为特殊，[Element](https://github.com/ElemeFE/element) 内部与颜色相关的`props`均定义了默认值，且`template`模板中均采用内联样式，导致外部主题样式无法覆盖。

| `Props` | `默认值` |
| --- | --- |
| `colors` | `['#F7BA2A', '#F7BA2A', '#F7BA2A']` |
| `void-color` | `#C6D1DE` |
| `disabled-void-color` | `#EFF2F7` |
| `text-color` | `#1f2d3d` |

可传空值重置相应的`props`值使主题生效。

```html
<el-rate :value="3" show-text void-color="" text-color="" />
```

进度条组件`Progress`类似，目前仅线形进度条支持，环形和仪表盘形暂不支持。

| `Props` | `默认值` |
| --- | --- |
| `define-back-color` | `#ebeef5` |
| `text-color` | `#606266` |

```html
<el-progress :percentage="20" define-back-color="" text-color="" />
```