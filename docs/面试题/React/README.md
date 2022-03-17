# React 面试题

## React 是什么？（谈谈对 React 的理解）

React 是一个网页 UI 框架，通过组件化的方式解决视图层开发复用的问题，本质是一个组件化框架。

它的核心设计思路有三点，分别是声明式、组件化与通用性。

- 声明式的优势在于直观与组合。
- 组件化的优势在于视图的拆分与模块复用，可以更容易做到高内聚低耦合。
- 通用性在于一次学习，随处编写。比如 React Native，React 360 等， 这里主要靠虚拟 DOM 来保证实现。

这使得 React 的适用范围变得足够广，无论是 Web、Native、VR，甚至 Shell 应用都可以进行开发。这也是 React 的优势。

但作为一个视图层的框架，React 的劣势也十分明显。它并没有提供完整的一揽子解决方案，在开发大型前端应用时，需要向社区寻找并整合解决方案。虽然一定程度上促进了社区的繁荣，但也为开发者在技术选型和学习适用上造成了一定的成本。

## React 的事件机制

React17 以前的事件绑定都是绑定到 document 上，dom 上只是绑定一个空函数，当事件发生并冒泡上 document 上时，React 将事件内容封装并交给真正的处理函数执行。

- 目的：
  - 抹平浏览器差异，更好的实现跨平台
  - 避免垃圾回收，React 引入了事件池，在事件池获取或释放事件对象，避免频繁的创建和销毁
  - 方便事件统一管理和事物机制
- React17 改动
  - 事件绑定到 container 上，ReactDOM.render(app, container)，而不是 document 上，这样有利于微前端
  - 对齐浏览器原生事件：支持了原生的捕获事件，对齐了浏览器标准
  - 取消事件池，解决了在 setTimeout 打印时找不到 e.target 的问题

## React 生命周期

- 挂载阶段：挂载阶段是指组件从舒适化到完成加载的过程
  - `constructor` 是类通用的构造函数，常用于初始化，本身 constructor 并不属于 React 的生命周期，它只是 Class 的初始化函数，因此 现在已经被去除
  - `getDerivedStateFromProps` 让组件在 props 变化时更新 state，当 props 传入时，state 发生变化时，forceUpdate 被调用时都会触发
  - `UNSAFE_componentWillMount` 在组件即将加载前触发，已经被标记弃用，因为在 React 的异步渲染机制下，该方法可能会被多次调用
  - `render` 返回 JSX 结构，用于描述具体的渲染内容
  - `componentDidMount` 主要用于组件加载完成时做某些操作
- 更新阶段：更新阶段是指外部 props 传入，或者 state 发生变化时的阶段
  - `UNSAFE_componentWillReceiveProps` 已被标记弃用，因为其功能可被函数 getDerivedStateFromProps 所替代
  - `getDerivedStateFromProps` 同挂载阶段的表现一致
  - `shouldComponentUpdate` 该方法通过返回 true 或者 false 来确定是否需要触发新的渲染，通过添加判断条件来阻止不必要的渲染
  - `UNSAFE_componentWillUpdate` 同样已废弃，因为后续的 React 异步渲染设计中，可能会出现组件暂停更新渲染的情况
  - `render` 同挂载阶段的表现一致
  - `getSnapshotBeforeUpdate` 方法是配合 React 新的异步渲染的机制，在 DOM 更新发生前被调用，返回值将作为 componentDidUpdate 的第三个参数
  - `componentDidUpdate` 组件更新完成时触发
- 卸载阶段
  - `componentWillUnmount` 组件即将卸载时触发

## 类组件和函数组件有什么区别？

- 作为组件而言，类组件与函数组件在使用与呈现上没有任何不同，性能上在现代浏览器中也不会有明显差异。

- 它们在开发时的心智模型上却存在巨大的差异。类组件是基于面向对象编程的，它主打的是继承、生命周期等核心概念；而函数组件内核是函数式编程，主打的是 immutable、没有副作用、引用透明等特点。之前，在使用场景上，如果存在需要使用生命周期的组件，那么主推类组件；设计模式上，如果需要使用继承，那么主推类组件。但现在由于 React Hooks 的推出，生命周期概念的淡出，函数组件可以完全取代类组件。其次继承并不是组件最佳的设计模式，官方更推崇“组合优于继承”的设计概念，所以类组件在这方面的优势也在淡出。

- 性能优化上，类组件主要依靠 shouldComponentUpdate 阻断渲染来提升性能，而函数组件依靠 React.memo 缓存渲染结果来提升性能。

- 类组件在时间切片与并发模式中，由于生命周期带来的复杂度，并不易于优化。而函数组件本身轻量简单，且在 Hooks 的基础上提供了比原先更细粒度的逻辑组织与复用，更能适应 React 的未来发展。

## setState 是同步更新还是异步更新？

setState 在 React 可以控制的地方，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略，这个时候就是异步的。

但在 React 无法控制的地方，比如原生事件，具体就是在 addEventListener、setTimeout、setInterval 等事件中，就是同步更新的。

## React 中如何进行组件间通信

- 如果是父传子，直接在 props 中传递即可
- 如果是子传父，则需要使用回调函数，即父组件传递一个函数给子组件，子组件在合适的时机触发这个函数，把要通信的信息作为参数即可
- 如果是跨层级，多层级的组件间通信，可以使用 React 的 Context API，挂载新对象到 window 上，或者引入状态管理框架
- 如果是多页面的组件间通信，则是使用链接传值，或者存储在 localStorage 里

## Virtual DOM 的工作原理是什么

工作原理是通过 JS 对象模拟 DOM 节点，这个对象会描述自己的 tag 类型、props 属性以及 children 情况等，通过树形结构组成一棵虚拟 DOM 树。

当状态发生变更时，将变更前后的虚拟 DOM 树进行差异比较，这个过程称为 diff，生成的结果称为 patch。计算之后，会渲染 Patch 完成对真实 DOM 的操作。

虚拟 DOM 的优点主要有三点

- 改善大规模 DOM 操作的性能
- 规避 XSS 风险
- 能以较低的成本实现跨平台开发

虚拟 DOM 的缺点主要有两点

- 内存占用较高，因为需要模拟整个网页的真实 DOM。
- 高性能应用场景存在难以优化的情况，类似像 Google Earth 一类的高性能前端应用在技术选型上往往不会选择 React

## React 的 diff 算法

diff 算法就是虚拟 DOM 树发生变化后，生成 DOM 树更新补丁的方式。它通过对比新旧两株虚拟 DOM 树的变更差异，将更新补丁作用于真实 DOM，以最小成本完成视图更新

React 的 diff 算法采用了深度优先遍历算法。因为广度优先遍历可能会导致组件的生命周期时序错乱，而深度优先遍历算法就可以解决这个问题

深度优先遍历算法复杂度是 O(n<sup>3</sup>)，React 通过从树、组件及元素三个层面进行复杂度的优化到了 O(n)

- 忽略节点跨层级操作场景，提升比对效率：两棵树对比过程中，如果发现节点不存在了，那么所有的子节点都会被删除，不需要进一步的对比
- 在组件比对的过程中，如果组件是同一类型则进行树比对；如果不是则直接放入补丁中，只要父组件类型不同，就会被重新渲染
- 同一层级的子节点，可以通过标记 key 的方式进行列表对比，相同的 key React 会认为是同一节点，可以直接移动 DOM 节点，降低内耗

自 React 16 起，引入了 Fiber 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。

整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点

## 说说你对 fiber 的理解

React15 在渲染时，会递归遍历 VirtualDOM 树，找出需要变动的节点，然后同步更新它们，一气呵成。这个过程期间，React 会占据浏览器资源，这会导致用户触发的事件得不到响应，并且会导致掉帧，导致用户感觉到卡顿。所以 React 通过 Fiber 架构，让这个执行过程变成可被中断。“适时”地让出 CPU 执行权。

fiber 也称协程或者纤程，fiber 本身没有并发或者并行能力，他只是一种控制流程的让出机制。渲染的过程可以中断，将控制权交给浏览器，让 CPU 能先执行优先级更高的任务，浏览器空闲后再渲染。

React 通过浏览器的`requestIdleCallback`API，让浏览器在有空的时候就执行我们的回调，但是在浏览器繁忙的时候，可能不会有盈余时间，这时候 requestIdleCallback 回调可能就不会被执行。 为了避免这种情况，可以通过 requestIdleCallback 的第二个参数指定一个超时时间。

这个超时时间不是死的，低优先级的可以慢慢等待, 高优先级的任务应该率先被执行. 目前 React 预定义了 5 个优先级

- `Immediate`(-1) - 这个优先级的任务会同步执行, 或者说要马上执行且不能中断
- `UserBlocking`(250ms) 这些任务一般是用户交互的结果, 需要即时得到反馈
- `Normal` (5s) 对应那些不需要立即感受到的任务，例如网络请求
- `Low` (10s) 这些任务可以放后，但是最终应该得到执行. 例如分析通知
- `Idle` (没有超时时间) 一些没有必要做的任务 (e.g. 比如隐藏的内容), 可能会被饿死

## React Hook 的使用限制有哪些

1. 在 React 的函数组件中调用 Hook
2. 不要在循环、条件或嵌套函数中调用 Hook，hook 在每次渲染时都会根据一个全局的 id 去获取 hook，在循环、条件、嵌套函数中执行的次数都是不确定的，这样就会导致获取的 hook 是不一定的，从而导致混乱

## 你是怎么做 React 的性能优化的

- 对 React 组件本身做优化
  - 能用其他状态计算出来就不用单独声明 useState 状态，理应使用 useMemo 缓存计算值
  - 保证 useState 数据源唯一
  - useState 适当合并
  - 使用 React.memo 来缓存组件
  - 只有变化时，需要重新执行 useEffect 的变量，才要放到 deps 中。而不是 useEffect 用到的变量都放到 deps 中
  - 在有延迟调用场景时，可以通过 ref 来解决闭包问题
  - 使用 React.useMemo 缓存大量的计算。
  - 使用 React.useCallback 缓存声明的函数，避免每次 render 都会改变函数的引用导致接收这个函数的子组件重渲染（子组件需要使用 memo/componentShouldUpdate/PureComponent 缓存）。
  - 利用 React.lazy 和 React.Suspense 延迟加载不是立即需要的组件。
  - 尽量使用 CSS 控制显隐，而不是强制加载和卸载组件。
  - 使用 React.Fragment 避免添加额外的 DOM。
- 对于第三方包做优化
  - 引用第三方包时按需加载，不要全盘引入
  - 不是立马需要使用的包使用`import()`延时加载
- 对图片进行优化
  - 根据设备分辨率使用不同尺寸的图片
  - 尽量使用 webp 格式的图片
- 网络优化
  - 开启 gzip 压缩
  - 资源放到 cdn 上
  - 使用更高版本的 http 协议
- 打包优化
  - 适当分包
  - tree shaking 去掉未使用代码

## React17 以上的版本有哪些变化，解决了什么问题

### React17

React17 是没有新特性的大版本更新，主要是提供了多版本 React 共存的能力，同时为以后的快速迭代做好铺垫

- 改变了原来的事件代理模式，原来是统一代理到 document 上，现在是代理到 container 上
- 微调了合成事件，使其更符合浏览器原生事件
  - onScroll 事件不再冒泡
  - onFocus onBlur 底层改为 focusin focusout
  - 捕获事件使用浏览器的捕获监听器
  - 去除事件池，在现代浏览器上这个优化没有意义，反而因为重用事件对象造成困扰
- useEffect 的清空操作改为异步执行，将在 render 渲染后调用

### React18

React18 会提供可渐进的升级策略，我们可以不需要改动原来的代码就能升级到 18，并且可以选择性的使用 React18 的新特性

- 新的 Root API `ReactDOM.createRoot()`

  react18 中的其他新特性，都需要使用新的 root API 来创建根节点

- 并发渲染（concurrent rendering）

  根据用户的设备性能和网速对渲染过程进行适当的调整， 保证 React 应用在长时间的渲染过程中依旧保持可交互性，避免页面出现卡顿或无响应的情况，从而提升用户体验

- 批量更新（automatic batching）

  在 17 以前的版本中，只有合成事件里的多个 setState 才会自动合并更新，对 promise.then，setTimeout，以及原生事件中的多个 setState 只会逐条更新，react18 中只需要使用新的 createRoot 去渲染根节点，就会自动启用批量更新，不需要额外配置。

  如果希望保留逐条更新，可以使用 flushSync 来阻止

- 新的服务端渲染支持（Suspense Hydration）

  - React18 之前的 SSR，客户端必须一次性的等待 HTML 数据加载到服务器上并且等待所有 JavaScript 加载完毕。18 版本里服务器可以不需要等待被 Suspense 包裹组件是否加载到完毕，即可发送 HTML，而代替 suspense 包裹的组件是 fallback 中的内容，一般是一个占位符（spinner），以最小内联 script 标签标记此 HTML 的位置。等待服务器上组件的数据准备好后，React 再将剩余的 HTML 发送到同一个流中。

  - hydration 的过程是逐步的，不需要等待所有的 js 加载完毕再开始 hydration，避免了页面的卡顿。

  - React 会提前监听页面上交互事件（如鼠标的点击），对发生交互的区域优先级进行 hydration

- 新增的 hooks
  - useId 是一个新的 Hook，用于在客户端和服务端生成唯一 id，同时避免 hydration 的不兼容，这可以解决 React 17 以及更低版本的问题。
  - useSyncExternalStore 是一个新的 Hook，可以防止在 concurrent 模式下，任务中断后第三方 store 被修改，恢复任务时出现 tearing 从而数据不一致问题，它允许外部存储通过强制同步更新来支持并发读取。推荐把这个新的 API 推荐应用到任何与 React 外部状态集成的库。
  - useInsertionEffect 是一个新的 Hook，它可以解决 CSS-in-JS 库在渲染中动态注入样式的性能问题。
