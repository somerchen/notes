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