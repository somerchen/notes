# CSS 面试题

## CSS 选择器及其优先级

|    选择器    |         格式         | 优先级 |
| :----------: | :------------------: | :----: |
|  id 选择器   |         #id          |  100   |
|   类选择器   |        .class        |   10   |
|  属性选择器  | input[type="search"] |   10   |
|  伪类选择器  |    li:last-child     |   10   |
|  标签选择器  |         div          |   1    |
| 伪元素选择器 |      div::after      |   1    |
|  兄弟选择器  |        h1 + p        |   0    |
|   子选择器   |       ul > li        |   0    |
|  后代选择器  |        div p         |   0    |
| 通配符选择器 |          \*          |   0    |

> 选择器的优先级
>
> - 标签选择器、伪元素选择器 1
> - 伪类选择器、属性选择器、类选择器 10
> - id 选择器 100
> - 内联样式 1000
> - !important 样式优先级最高
> - 兄弟选择器、子选择器、后代选择器、通配符选择器对优先级没有影响
> - 继承的样式优先级最低
> - 相同优先级的样式，后面的会覆盖前面的

## CSS 中可继承与不可继承属性

1. 不可继承属性：

- display
- 文本属性：vertical-align, text-direction, text-shadow, white-space, unicode-bidi
- 盒子模型的属性：width, height, margin, padding, border
- 背景属性：background
- 定位属性：float, clear, position, left, right, top, bottom, min-width, min-height, max-width, max-height, clip, overflow, z-index
- 生成内容属性：content, content-reset, content-increment
- 轮廓样式属性：outline
- 页面样式属性：size, page-break-before, page-break-after
- 声音样式属性：pause, cue, play-during

2. 可继承属性：

- 字体系列属性：font-weight, font-size, font-family, font-style
- 文本系列属性：text-indent, text-align, line-height, word-space, letter-space, color, text-transform
- 元素可见性：visibility
- 列表布局属性：list-style
- 光标可见性：cursor

## 行内元素和块元素都有什么特点？

- 行内元素：
  - 设置宽高无效；
  - 可以设置水平方向的 margin 和 padding，设置竖向的 margin 和 padding 无效；
  - 不会自动换行；
- 快元素：
  - 可以设置宽高
  - 设置 margin 和 padding 都有效；
  - 会自动换行，多个块状排列默认从上到下；

## 隐藏元素的方法有哪些？

- display: none：渲染树不会渲染该元素，不占据位置，不响应监听事件
- visibility: hidden：仍占据空间，但是不响应监听事件
- opacity: 0：仍占据空间，且响应监听事件
- position: absolute：脱离文档流的方式消失在页面中
- z-index: -1
- clip/clip-path：仍占据空间，但是不响应监听事件
- transform: scale(0, 0)：仍占据空间，但是不响应监听事件

## transition 和 animate 的区别

- transition：强调过度，需要触发一个事件导致样式变化才会执行。需要一个开始关键帧，一个结束关键帧。
- animate：动画属性，设定之后可以自己执行，可以循环播放。可以在开始帧与结束帧之间设置任意关键帧。

## 对盒模型的理解

盒模型都是由四部分组成的，margin、border、padding、content。

标准盒模型和 IE 盒模型设置 width 和 height 时，所对应的区域不同：

- 标准盒模型：只包含 content；
- IE 盒模型：包含 border、padding、content；

可以修改元素的 border-sizing 来更改盒模型：

- `border-sizing: content-box`：默认样式，标准盒模型；
- `border-sizing: border-box`：表示 IE 盒模型；

## CSS3 新增了哪些新特性？

- 新增的各种 CSS 选择器
- 圆角（border-radius）
- 阴影（box-shadow）
- 文字特效（text-shadow, text-decoration）
- 渐变（gradient）
- 旋转、缩放、位移（transform）
- 动画（animation）

## 常见的图片格式和使用场景

- gif：当需要使用动图时使用；
- jpg/jpeg：当需要的图片尺寸较大时，jpg 图片体积更小；
- png：当图片需要透明背景时的首选，或者图片本身较小时；
- webp：相同图片质量时体积最小的，但是要做好兼容性处理；
- svg：矢量图，放大后不会失真，常用于 logo；

## 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x 这种图片

- 物理像素，就是设备上实际拥有的像素点；
- 逻辑像素，就是在 CSS 中以 px 为单位刚刚占满屏幕宽度时的像素值；
- 像素密度，物理像素/逻辑像素，即常说的 2 倍屏，3 倍屏；

> 以 iphone6 为例，设备实际拥有的像素点是 750 \* 1334，但是写 CSS 时，375px 和 667px 就能刚好占满屏幕，那么像素比就是 2，也就是 2 倍屏。

移动端开发时，针对 2 倍屏 3 倍屏，如果图片尺寸不变，那么就会出现失真的情况。所以需要根据设备像素比来加载不同尺寸的图片，可以使用 img 标签的 `srcset` 属性来实现。

> 还是以 iphone6 为例，像素比为 2 的情况下，图片尺寸不变，那么 1 像素的图片需要去填满 2\*2 的区域，就会出现失真

## CSS 优化和提升性能的方法有哪些？

- 加载性能
  - 压缩代码，提及更小
  - 使用 link 标签放在 head 中，早于 dom 加载，避免样式闪烁
- 选择器性能
  - 尽量使用类选择器，少用标签选择器，尽量不用 \*
  - 后代选择器嵌套层级避免过深（每次都会遍历子元素去寻找对应标签）
- 渲染性能
  - 尽量减少回流重绘，慎重选择使用 float position
  - 适当使用 transform 的 GPU 加速
- 可维护性
  - 重复样式抽成公共样式
  - 尽量不使用内联样式

## CSS 预处理器和后处理器是什么？为什么使用？

- 预处理器：如 sass less stylus 等，预处理器为 css 添加了一些编程特性，可以使用变量、函数、mixin 等更强大的功能
- 后处理器：如 postcss，在完成 css 编写后，根据 css 规范对代码进行处理，目前常用的是添加各浏览器的样式前缀
- 为什么使用
  - 结构清晰，便于扩展
  - 屏蔽浏览器之间的差异性
  - 兼容性强，老项目也可以使用

## CSS 常见单位有哪些？使用场景？

- px：固定像素单位，设置后不会改变大小，适用于 pc 端网页；
- em：相对父级字体大小的单位，1em 等同于父元素 font-size 大小，只在设置 text-indent 的时候用到过；
- rem：相对 html 上的 font-size 大小来决定大小的单位，常在移动端使用 rem 布局时，由 postcss 自动编译而来；
- vw：相对于设备屏幕宽度的单位。100vw 为屏幕宽度。可用在移动端 vw 布局，与 rem 类似；
- vh：同 vw，但是是相对设备屏幕高度。
- vmin/vmax：vw 和 vh 中的较小/大值。

## BFC 理解

BFC 是块格式化上下文，是一个独立的布局环境，这个容器中按照一定的布局规则来展示，不会影响外部环境。如果一个元素满足 BFC 的触发条件，则外部环境也不会影响元素内部。

创建 BFC 的条件：

- 根节点 body;
- overflow: scroll/hidden/auto;
- display: flex/inline-block;
- position: absolute/fixed;
- float: left/right;

BFC 的特点：

- 垂直方向上从上到下排列，和文档流的方式一致
- BFC 内部上下相邻的两个元素 margin 会重叠
- BFC 元素不会和浮动元素重叠
- 计算高度时需要计算浮动元素的高度
- BFC 是独立容器，与外界互不影响

BFC 作用：

- 解决 margin 重叠：BFC 与外界不影响，把两个元素设为 BFC，就解决了 margin 重叠的问题
- 解决高度塌陷：当子元素浮动时，父元素高度会塌陷下去，把父元素设为 BFC 即可
- 页面布局使用

## 有没有用过 scroll-behavior？

scroll-behavior 决定了当用户手动导航时或者 js 控制页面滚动到其他位置时的表现方式

- auto 立即滚动
- smooth 平滑滚动（有一个动画效果）

## 如何解决移动端 1px 边框问题？

1. 直接写 0.5px：兼容性不好；
2. border-width 设为 1px，border-image 替代 border-color 使用渐变色，一半透明一半又颜色；
3. transform: scale 缩放；
4. 更改页面 meta viewport 的缩放值为 1/window.devicePixelRatio，然后直接写 1px 即可。其他 px 单位也会被缩放，需要注意兼容。
