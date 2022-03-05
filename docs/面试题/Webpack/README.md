# Webpack 面试题

## Webpack 的作用

- 模块打包。可以将不同模块的文件打包整合在一起，并且保证它们之间的**引用正确，执行有序**。利用打包我们就可以在开发的时候根据我们自己的业务自由划分文件模块，保证项目结构的清晰和可读性。
- 编译兼容。在前端的“上古时期”，手写一堆浏览器兼容代码一直是令前端工程师头皮发麻的事情，而在今天这个问题被大大的弱化了，通过 `webpack` 的**Loader**机制，不仅仅可以帮助我们对代码做 `polyfill`，还可以编译转换诸如.less, .vue, .jsx 这类在浏览器无法识别的格式文件，让我们在开发的时候可以使用新特性和新语法做开发，提高开发效率。
- 能力扩展。通过 `webpack` 的**Plugin**机制，我们在实现模块化打包和编译兼容的基础上，可以进一步实现诸如按需加载，代码压缩等一系列功能，帮助我们进一步提高自动化程度，工程效率以及打包输出的质量。

## Webpack 的构建流程（打包原理）

- 读取`webpack`的配置参数：从配置文件和 shell 语句中读取与合并参数
- 启动`webpack`，创建`Compiler`对象并开始解析项目
- 从入口文件（`entry`）开始解析，并且找到其导入的依赖模块，递归遍历分析，形成依赖关系树
- 对不同文件类型的依赖模块文件使用对应的`Loader`进行编译，最终转为`Javascript`文件
- 整个过程中`webpack`会通过发布订阅模式，向外抛出一些`hooks`，而`webpack`的`plugin`即可通过监听这些关键的事件节点，执行插件任务进而达到干预输出结果的目的
- 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

## loader 的作用是什么？怎么实现一个 loader（loader 的实现原理）

`Webpack` 最后打包出来的成果是一份 `Javascript` 代码，实际上在 `Webpack` 内部默认也只能够处理 `JS` 模块代码，在打包过程中，会默认把所有遇到的文件都当作 `JavaScript` 代码进行解析，因此当项目存在非 JS 类型文件时，我们需要先对其进行必要的转换，才能继续执行打包任务，这也是 `Loader` 机制存在的意义。

针对每个文件类型，`loader` 是支持以数组的形式配置多个的，因此 `webpack` 会链式的调用每一个 `loader`，文件资源会从上一个 `loader` 传递到下一个，而 `loader` 的处理也遵循着从下到上的顺序，`loader` 有以下开发原则

- 单一原则: 每个 `Loader` 只做一件事，简单易用，便于维护；
- 链式调用: `Webpack` 会按顺序链式调用每个 `Loader`；
- 统一原则: 遵循 `Webpack` 制定的设计规则和结构，输入与输出均为字符串，各个 `Loader` 完全独立，即插即用；
- 无状态原则：在转换不同模块时，不应该在 `loader` 中保留状态；

## 有哪些常见的 loader，你使用过哪些？

- `file-loader`、`image-loader`、`url-loader` 处理图片
- `babel-loader` 把 es6 转化为 es5
- `ts-loader`、`awesome-typescript-loader` 把 ts 转为 js
- `sass-loader` 把 scss 转为 css
- `css-loader`
- `postcss-loader` 为 css 代码添加前缀
- `vue-loader` 加载.vue 单文件组件

## plugin 的作用是什么？怎么实现一个 plugin（plugin 的实现原理）

如果说 `Loader` 负责文件转换，那么 `Plugin` 便是负责功能扩展。

`Webpack` 基于发布订阅模式，在运行的生命周期中会广播出许多事件，`Plugin` 可以监听这些事件，在合适的时机通过 `Webpack` 提供的 `API` 改变输出结果

`Plugin` 的开发和开发 `Loader` 一样，需要遵循一些开发上的规范和原则：

- `compiler` 暴露了和 `Webpack` 整个生命周期相关的钩子
- `compilation` 暴露了与模块和依赖有关的粒度更小的事件钩子
- `plugin` 的本质是类，这个类包含 `apply` 方法，这样才能访问 `compiler` 实例；
- 传给每个插件的 `compiler` 和 `compilation` 对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件;
- 异步的事件需要在插件处理完任务时调用回调函数通知 `Webpack` 进入下一个流程，不然会卡住;

## 有哪些常见的 plugin，你使用过哪些？

- `html-webpack-plugin` 简化 HTML 文件创建
- `uglifyjs-webpack-plugin` 压缩代码
- `mini-css-extract-plugin` 分离样式文件，CSS 提取为独立文件，支持按需加载
- `clean-webpack-plugin` 每次构建时清理上一次构建的文件
- `webpack-bundle-analyzer` 可视化 Webpack 输出文件的体积

## 你了解 sourceMap 吗

`sourceMap` 是一项将编译、打包、压缩后的代码映射回源代码的技术，由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中 `debug` 问题会带来非常糟糕的体验，`sourceMap` 可以帮助我们快速定位到源代码的位置，提高我们的开发效率。

`sourceMap` 其实并不是 `Webpack` 特有的功能，而是 `Webpack` 支持 `sourceMap`，像 `JQuery` 也支持 `sourceMap`。

## 说一下热更新（HRM）的原理

- 第一步，在 `webpack` 的 `watch` 模式下，文件系统中某一个文件发生修改，`webpack` 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 `JavaScript` 对象保存在内存中。
- 第二步是 `webpack-dev-server` 和 `webpack` 之间的接口交互，而在这一步，主要是 `dev-server` 的中间件 `webpack-dev-middleware` 和 `webpack` 之间的交互，`webpack-dev-middleware` 调用 `webpack` 暴露的 `API` 对代码变化进行监控，并且告诉 `webpack`，将代码打包到内存中。
- 第三步是 `webpack-dev-server` 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了 `devServer.watchContentBase` 为 `true` 的时候，`Server` 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 `live reload`。注意，这儿是浏览器刷新，和 `HMR` 是两个概念。
- 第四步也是 `webpack-dev-server` 代码的工作，该步骤主要是通过 `sockjs`（`webpack-dev-server` 的依赖）在浏览器端和服务端之间建立一个 `websocket` 长连接，将 `webpack` 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 `Server` 监听静态文件变化的信息。浏览器端根据这些 `socket` 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 `hash` 值，后面的步骤根据这一 `hash` 值来进行模块热替换。
- `webpack-dev-server/client` 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 `webpack`，`webpack/hot/dev-server` 的工作就是根据 `webpack-dev-server/client` 传给它的信息以及 `dev-server` 的配置决定是刷新浏览器，还是进行模块热更新。
- `HotModuleReplacement.runtime` 是客户端 `HMR` 的中枢，它接收到上一步传递给他的新模块的 `hash` 值，它通过 `JsonpMainTemplate.runtime` 向 `server` 端发送 `Ajax` 请求，服务端返回一个 `json`，该 `json` 包含了所有要更新的模块的 `hash` 值，获取到更新列表后，该模块再次通过 `jsonp` 请求，获取到最新的模块代码。
- `HotModulePlugin` 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
- 最后一步，当 `HMR` 失败后，回退到 `live reload` 操作，也就是进行浏览器刷新来获取最新打包代码。

简单来说，就是 `webpack` 在 `watch` 状态下监听到了文件的修改，然后通过与浏览器之间建立的 `websocket` 通知浏览器哪些文件更改了，之后浏览器会重新获取资源然后替换该文件对应的模块。

## 如何优化 Webpack 的构建速度

- 使用高版本的 `webpack` 和 `nodejs`
- 多线程构建 `thread-loader`
- 压缩代码 `uglifyjs-webpack-plugin` `terser-webpack-plugin`
- 压缩图片 image-webpack-loader
- 缩小打包作用域
- 提取页面公共资源
- 使用 `DllPlugin` 进行分包，把基本不会改变的代码打包成静态资源，避免反复编译浪费时间
- 利用缓存
- `Tree Shaking`

## 如何减少打包出来的文件体积

- 写代码时按需引入
- 提取公共文件
- 开启 `tree shaking`

使用 `webpack-bundle-analyzer` 查看打包出来的文件体积，然后针对性的优化

## 聊一聊 babel 原理吧

`babel` 的作用是把 `es6` 代码转为 `es5` 代码，保证开发体验和效率的同时兼容了低版本浏览器

- 解析：将代码转换成 `AST`

- 转换：访问 `AST` 的节点进行变换操作生产新的 `AST`

- 生成：以新的 `AST` 为基础生成代码

## webpack5 和 webpack4 有什么区别

`webpack5` 相比 `webpack4` 把很多的插件才有的功能实现了内置，比如 `tree shaking`、`缓存`、`压缩代码`、`启动服务`等

`webpack5` 总体上来说更快（长久缓存），更小（tree shaking）
