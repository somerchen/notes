# html 面试题

## DOCTYPE 文档类型的作用
DOCTYPE 是 HTML5 的一种标准通用标记语言的文档声明类型，它的目的是告诉浏览器当前 HTML 文档是使用什么版本的 HTML 来写的，这样浏览器才能按照声明的版本来正确的解析。

它必须在 HTML 文档的第一行。如果 DOCTYPE 不存在或者形式错误，HTML 文档会以混杂模式呈现，不同的渲染模式会影响浏览器对 CSS 和 JS 脚本的解析。

- 混杂模式：浏览器以自己的怪异模式解析渲染页面，页面以一种宽松的向后兼容的方式显示。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作。
- 标准模式：默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准显示页面。

## HTML5 为什么只需要写 \<!DOCTYPE html>
HTML5 不基于 SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对 DTD（DTD 文档定义类型）进行饮用，但是需要 DOCTYPE 来规范浏览器行为，`<!DOCTYPE html>` 会让浏览器进入标准模式，使用最新的 HTML5 标准来解析渲染页面。

HTML4.01 基于 SGML，所以需要饮用 DTD，才能告知浏览器文档所使用的文档类型，如下：
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

## 常用的 meta 标签有哪些？
`meta` 标签由 `name` 和 `content` 属性定义，用来描述网页的属性，比如网页的作者，网页描述，关键词等等。除了 HTTP 标准固定了一些 `name`，开发者还可以自定义自己的name。

常用的meta标签：

- `charset`，用来描述 HTML 文档的编码类型：
```html
<meta charset="utf-8">
```

- `keywords`，页面关键词：
```html
<meta name="keywords" content="关键词" />
```

- `description`，页面描述：
```html
<meta name="description" content="页面描述" />
```

- `refresh`，页面重定向或者刷新：
```html
<!-- 立即跳转到首页 -->
<meta http-equiv="refresh" content="0;url='/'" />

<!-- 2秒后跳转到百度 -->
<meta http-equiv="refresh" content="2;url='http://www.baidu.com'" />

<!-- 当前页面5秒刷新一次 -->
<meta http-equiv="refresh" content="5" />
```

- `viewport`，适配移动端，控制视口的大小和比例：
```html
<!--  
  content 支持参数： 
    width: 宽度(number | device-width);
    height: 高度(number | device-height);
    initial-scale: 初始缩放比例;
    maximum-scale: 最大缩放比例;
    minimum-scale: 最小缩放比例;
    user-scalable: 是否允许缩放(yes | no);
-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `robots`，搜索引擎索引方式：
```html
<!--  
  content 支持参数： 
    all: 文件将被检索，且页面上的链接可以被查询;
    none: 文件将不被检索，且页面上的链接不可以被查询;
    index: 文件将被检索;
    follow: 页面上的链接可以被查询;
    noindex: 文件将不被检索;
    nofollow: 页面上的链接不可以被查询;
-->
<meta name="robots" content="index, follow">
```

## 浏览器乱码的原因是什么？怎么解决？
产生乱码的原因：
- 网页源代码是 `gbk` 编码的，而内容中的中文字是 `utf-8` 编码的，这样浏览器打开就会出现乱码，反之也会出现乱码。
- 网页源代码是 `gbk` 编码的，而从数据库获取的内容是 `utf-8` 编码也会出现乱码。反之亦然。
- 浏览器不能自动检测网页编码，从而出现乱码。

解决方法：
- 重新编辑 HTML 文档，确保编码一致。
- 内容从数据库获取后进行 unicode 编码转化保证一致。
- 打开浏览器菜单选择编码方式。

## HTML5 有哪些更新
- 语义化标签
  - 理解：语义化是指根据内容的结构化，选择合适的标签。通俗来讲就是正确的标签做正确的事情
  - 优点：
    - 如果 CSS 文件加载失败也能展现出清晰的结构
    - 对机器友好，有利于与搜索引擎建立良好沟通，有利于爬虫爬取更多有效沟通，有利于 SEO，
    - 对开发者友好，使用语义类标签增强了可读性，结构更清晰，开发者能清晰的看出网页的结构，有利于团队的开发和维护。
  - 常见的语义化标签：
    - `<header></header>` 头部
    - `<nav></nav>` 导航栏
    - `<section></section>` 区块（有语义的 div）
    - `<main></main>` 主要区域
    - `<article></article>` 主要内容
    - `<aside></aside>` 侧边栏
    - `<footer></footer>` 底部

- 媒体标签
  - audio
  - video

- 进度条、度量器
  - progress 标签：表示任务的进度。max表示任务的最大进度，value表示完成了多少。

- Web 存储
  - `localStorage` 不清理就会始终存在的数据存储；
  - `sessionStorage` 标签关闭就会被自动清空的数据存储；

- DOM 查询
  
  选择的对象是 CSS 选择符
  - document.querySelector()
  - document.querySelectorAll()

- 表单
  - input 新增标签属性；

- 拖放：抓取对象以后拖放到另一个位置，设置元素可拖放：
```html
<img draggable="true" />
```

- canvas

- SVG

- 地理定位：Geolocation 用于定位用户的位置

- history Api: go、forward、back、pushstate

- websocket

- 移除元素：
  - 纯表现的元素：basefont，big，center，font，s，strike，tt，u；
  - 对可用性产生负面影响的元素：frame，frameset，noframes；

## head 标签有什么作用，其中什么标签必不可少？
head 标签用于定义文档的头部，它的所有头部元素的容器。head 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。

文档的头部描述了文档的各种属性和信息，包括文档的标题、在 web 中的位置和其他文档的关系等等。绝大多数文档头部包含的数据都不会作为真正的内容展示用户。

`base link meta script style title` 这些标签可以用在 head 中。

其中 `title` 定义文档的标题，是 head 中唯一必须的元素。如果缺失文档标题会展示成页面网址。

## 行内元素有哪些？块元素有哪些？空元素有哪些？
- 行内元素有：`a b span img input select strong`;
- 块元素有：`div ul ol li dl dt dd h1-h6 p header nav section main article aside footer`;
- 空元素，即在开始标签里闭合的标签：`br hr img input link meta area base col colgroup command embed keygen param source track wbr`;

## src 和 href 的区别
src 和 href 都是用来引用外部资源的，
- src：表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置，src 会将其指向的资源下载并引用到文档内。如请求 js 脚本，当浏览器解析到该内容时，会暂停其他资源的下载的处理，直到将该资源加载、编译、执行完毕，所以一般 js 脚本会放在页面底部。
- href：表示超文本引用，它指向一些网络资源，建立和当前文档的链接关系。当浏览器识别到它指向的文件时，就会并行下载资源，不会停止对当前文档的处理。常用在 a、link 等标签上。

## script 标签中 defer 和 async 的区别
defer（推迟）和 async（异步）都是布尔值，只要出现在 script 标签上就会生效，且都只对使用 src 属性的 script 标签生效。同样的，浏览器可以在下载脚本的同时继续解析和渲染文档。
- defer：会让浏览器把脚本的执行推迟到文档完全加载和解析之后，且会以在文档中出现的顺序执行。
- async：会在加载完毕后让浏览器尽快执行，如果同时出现 async 和 defer，async属性起作用。

> 如果 script 标签带有 type="module" 属性，则默认会在文档加载完毕后执行，如同加了 defer 一样，可以使用 async 属性来覆盖默认行为。

## img 的 srcset 属性的作用？
srcset 属性可以针对不同屏幕尺寸不同分辨率的设备，加载不同尺寸的图片。可以保证网站的良好工作。
老旧浏览器会忽略 srcset 并且正常加载 src 属性里的图像。
```html
<!-- 如下例子会在2倍屏上加载 img1.png 3倍屏上加载 img2.png，如果都不是，则加载 img3.png -->
<img srcset="img1.png 2x, img2.png 3x" src="img3.png">

<!-- 这个例子会根据设备尺寸（sizes 里的媒体查询条件），来加载不同尺寸的图片（加载 srcset 中与第一个符合要求的媒体查询最接近的大小的图像） -->
<img 
  srcset="img1-320w.jpg 320w, img1-480w.jpg 480w, img1-800w.jpg 800w"
  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px"
  src="img1-800w.jpg"
/>
```

## iframe 有哪些优点和缺点？
iframe 元素会创建包含另外一个文档的内联框架：
- 优点：
  - 用来加载速度较慢的内容
  - 可以使脚本并行下载
  - 可以实现跨子域通信
- 缺点：
  - iframe 会阻塞主页面的 onload 事件
  - 无法被一些搜索引擎识别
  - 会产生很多页面，不容易管理

## label 的作用是什么？如何使用？
label 标签用来定义表单控件的关系：当用户选择 label 标签时，会自动聚焦到与 label 标签相关联的表单控件上。
- 使用方法1: 使用 for 与 id；
- 使用方法2: 用 label 把表单控件包裹起来；

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？
- title 没有明确的意义，只是表示是个标题；h1 则表示层级分明的明确的标题，对页面抓取信息有很大的影响。
- b 只是表示文本加粗；strong 则是表示加重语气，是通过文本加粗的形式达到这种目的，搜索引擎会更注重 strong。
- i 表示内容展示为斜体；em 表示强调的文本。

## 说一下 web worker
在 html 页面中，如果在执行脚本时，页面是不可响应的，直到脚本执行结束为止。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。并且通过 postMessage 把执行结果回传到主线程。这样，当执行复杂脚本时就不会阻塞主线程了。

## html5 离线缓存的原理？
当浏览器发现 html 头部有 manifest 属性时，会去加载 manifest 文件，如果是第一次加载页面，则会根据 manifest 文件内容进行离线存储，第二次进入时，会对比新旧 manifest 文件，并对离线资源更新。
在任何时候，失去了因特网连接时，会使用离线资源展示页面。

manifest 内容：
- CACHE：表示要离线的资源列表，包含 manifest 文件的页面会被自动离线存储。
- NETWORK：表示只有在在线时才能访问的资源列表，即不使用离线存储。优先级低于 CACHE。
- FALLBACK：表示资源加载失败时，使用的备用资源。

## canvas 和 svg 的区别
- canvas：画布，通过 js 来绘制 2D 图形，是逐像素进行渲染的，位置发生改变，就会重新渲染。
  - 依赖分辨率；
  - 需要使用 api 来添加事件
  - 能够以 .png 和 .jpg 格式保存结果图像
- svg：可缩放矢量图形。是基于 xml 描述的 2D 图形语言，可以直接附加 js 和 css。在 svg 中，每个被绘制的图形都会被视为对象，当对象的属性发生改变时，就会重新渲染图形。
  - 不依赖分辨率
  - 支持事件处理器和添加样式
  - 复杂度高对减慢渲染速度

