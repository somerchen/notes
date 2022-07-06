# Vue 面试题

## MVVM、MVC 的区别

MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。

MVVM 分为 Model、View、ViewModel：Model 代表数据模型，数据和业务逻辑都在 Model 层中定义；View 代表 UI 视图，负责数据的展示；ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理用户交互操作；Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的，Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改变的数据也会在 Model 中同步。
这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作 DOM。

## 说说你对 Vue 的理解

Vue 是一个轻量级框架，核心库只关注视图层，是一个构建数据的视图集合，包体积打包后只有几十 kb；

作为国人开发的框架，中文文档齐全，不存在语言障碍 ，易于理解和学习；同时官方工具和官方库齐全，易于上手

除此之外，Vue 还有很多优点

- 双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；
- 组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；
- 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
- 虚拟 DOM：dom 操作是非常耗费性能的，不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；
- 运行速度更快：相比较于 react 而言，同样是操作虚拟 dom，就性能而言， vue 存在很大的优势。

## react 和 vue 的理解，有什么区别

### 相同点

- 都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库；
- 都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模板；
- 都使用了 Virtual DOM（虚拟 DOM）提高重绘性能；
- 都有 props 的概念，允许组件间的数据传递；
- 都鼓励组件化应用，将应用分拆成一个个功能明确的模块，提高复用性。

### 不同点

- 数据流

Vue 默认支持数据双向绑定，而 React 一直提倡单向数据流

- 虚拟 DOM

  - Vue 宣称可以更快地计算出 Virtual DOM 的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。
  - 对于 React 而言，每当应用的状态被改变时，全部子组件都会重新渲染。当然，这可以通过 PureComponent/shouldComponentUpdate 这个生命周期方法来进行控制，但 Vue 将此视为默认的优化。

- 组件化

  - Vue 鼓励写近似常规 HTML 的模板。写起来很接近标准 HTML 元素，只是多了一些属性。
  - React 推荐你所有的模板通用 JavaScript 的语法扩展——JSX 书写。

- 监听数据变化的实现原理不同

  - Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
  - React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的 vDOM 的重新渲染。这是因为 Vue 使用的是可变数据，而 React 更强调数据的不可变

- 高阶组件
  react 可以通过高阶组件（HOC）来扩展，而 Vue 需要通过 mixins 来扩展。

  高阶组件就是高阶函数，而 React 的组件本身就是纯粹的函数，所以高阶函数对 React 来说易如反掌。相反 Vue.js 使用 HTML 模板创建视图组件，这时模板无法有效的编译，因此 Vue 不能采用 HOC 来实现。

- 构建工具

  - React ==> Create React APP
  - Vue ==> vue-cli

- 跨平台

  - React ==> React Native
  - Vue ==> Weex

## 说一下 Vue 的生命周期

- beforeCreate（创建前）：数据观测和初始化事件还未开始，此时 data 的响应式追踪、event/watcher 都还没有被设置，也就是说不能访问到 data、computed、watch、methods 上的方法和数据。
- created（创建后）：实例创建完成，实例上配置的 options 包括 data、computed、watch、methods 等都配置完成，但是此时渲染得节点还未挂载到 DOM，所以不能访问到 $el 属性。
- beforeMount（挂载前）：在挂载开始之前被调用，相关的 render 函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。此时还没有挂载 html 到页面上。
- mounted（挂载后）：在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页面中。此过程中进行 ajax 交互。
- beforeUpdate（更新前）：响应式数据更新时调用，此时虽然响应式数据更新了，但是对应的真实 DOM 还没有被渲染。
- updated（更新后） ：在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。此时 DOM 已经根据响应式数据的变化更新了。调用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
- beforeDestroy（销毁前）：实例销毁之前调用。这一步，实例仍然完全可用，this 仍能获取到实例。
- destroyed（销毁后）：实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。

另外还有  keep-alive  独有的生命周期，分别为  activated  和  deactivated 。用  keep-alive  包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行  deactivated  钩子函数，命中缓存渲染后会执行  activated  钩子函数。

## 双向数据绑定的原理

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

当一个 Vue 实例创建时，Vue 会遍历 data 中的属性，用 Object.defineProperty（vue3.0 使用 proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

## vue diff 算法

diff 算法是一种通过同节点的树节点进行比较的高效算法

特点

- 只会同层级比较，不会跨层级
- 在 diff 比较的过程中，会从两端循环向中间进行比较

当数据变更时，订阅者 watcher 会调用 patch 对真实的 dom 打补丁

- 新老节点比较时，如果没有新节点，则直接删除老节点
- 如果没有老节点，说明是初始化，直接创建新节点
- 如果是相同节点，则进行 patchNode
- 如果不相同会删除老节点，创建新节点

patchNode：

- 判断新老节点是否都是文本节点且不相等，如是，则把新节点的内容替换到老节点上
- 如果新节点是文本，老节点有子节点，则删除老节点的子组件树
- 如果新节点有子节点，老节点是文本，则创建新的树
- 如果子节点不完全一致则会 updateChildren

updateChildren：

- 先定义新老组件树的 start 和 end 节点，然后循环对比
- 如果新老组件的开头节点相同，则更新，startIndex 右移
- 如果新老组件的结尾节点相同，也更新，endIndex 左移
- 如果新组件的开头和老组件的结尾节点相同，则把老组件的结尾节点移动到开头的序号处，然后把老节点的 endIndex 左移
- 如果新组件的结尾和老组件的开头节点相同，则把老组件的开头节点移动到结尾处，然后 startIndex 右移
- 如果都不相同，说明没有组件可以服用，这时候会根据老节点的 key 值，在新节点树的 hash 表中找到这个组件，然后移动这个组件
- 如果没有没有找到相同 key 值的新节点，则会创建直接新节点

## defineProperty 和 proxy 的区别

共同点：Vue 在实例初始化时遍历 data 中的所有属性，并把这些属性全部转为 getter/setter。Vue2 中使用 defineProperty，Vue3 使用 proxy
区别：

- defineProperty

  - 添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用 Object.defineProperty()处理。
  - 无法监控到数组下标和长度的变化。

- Proxy
  - Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
  - Proxy 可以监听数组的变化。

## Computed 和 Watch 的区别

- computed 计算属性：依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。当需要进行数值计算时使用，避免每次获取值时都要重新计算。
- watch 侦听器：主要是监听 data/props 数据，无缓存性，每当监听的数据变化时都会执行回调进行后续操作。

## v-if 和 v-show 的区别

- 手段：v-if 是动态的向 DOM 树内添加或者删除 DOM 元素；v-show 是通过设置 DOM 元素的 display 样式属性控制显隐；
- 编译过程：v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show 只是简单的基于 css 切换；
- 编译条件：v-if 是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译； v-show 是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且 DOM 元素保留；
- 性能消耗：v-if 有更高的切换消耗；v-show 有更高的初始渲染消耗；
- 使用场景：v-if 适合运营条件不大可能改变；v-show 适合频繁切换

## data 为什么是一个函数而不是对象

JavaScript 中的对象是引用类型，当多个实例引用同一个对象时，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化。

而在 Vue 中，更多的是想要复用组件，那就需要每个组件都有自己的数据，这样组件之间才不会相互干扰。所以组件的数据不能写成对象的形式，而是要写成函数的形式。数据以函数返回值的形式定义，这样当每次复用组件的时候，就会返回一个新的 data，也就是说每个组件都有自己的私有数据空间，它们各自维护自己的数据，不会干扰其他组件的正常运行。

## $nextTick 原理及作用

nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。

Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作 DOM。有时候在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构，这个操作就需要方法在 nextTick()的回调函数中

## Vue 如何做性能优化

- 尽量减少 data 中的数据，data 中的数据都会增加 getter 和 setter，会收集对应的 watcher
- v-if 和 v-for 不能连用
- 如果需要使用 v-for 给每项元素绑定事件时使用事件代理
- SPA 页面采用 keep-alive 缓存组件
- 在更多的情况下，使用 v-if 替代 v-show
- key 保证唯一
- 使用路由懒加载、异步组件

## Vue 中如何实现组件间通信

- 父子组件间通信

  - 子组件通过 props 属性来接受父组件的数据，然后父组件在子组件上注册监听事件，子组件通过 emit 触发事件来向父组件发送数据。
  - 通过 ref 属性给子组件设置一个名字。父组件通过 $refs 组件名来获得子组件，子组件通过 $parent 获得父组件，这样也可以实现通信。
  - 使用 provide/inject，在父组件中通过 provide 提供变量，在子组件中通过 inject 来将变量注入到组件中。不论子组件有多深，只要调用了 inject 那么就可以注入 provide 中的数据。

- 兄弟组件间通信

  - 使用 eventBus 的方法，它的本质是通过创建一个空的 Vue 实例来作为消息传递的对象，通信的组件引入这个实例，通信的组件通过在这个实例上监听和触发事件，来实现消息的传递。
  - 通过 $parent/$refs 来获取到兄弟组件，也可以进行通信。

- 任意组件之间
  - 使用 eventBus ，其实就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。
  - vuex：将这一些公共的数据抽离出来，将它作为一个全局的变量来管理，然后其他组件就可以对这个公共数据进行读写操作

## 路由的 hash 和 history 模式的区别

### hash 模式

**简介：** hash 模式是开发中默认的模式，它的 URL 带着一个#，例如：`www.abc.com/#/vue`，它的 hash 值就是`#/vue`。

**特点：** hash 值会出现在 URL 里面，但是不会出现在 HTTP 请求中，对后端完全没有影响。所以改变 hash 值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的 IE 浏览器也支持这种模式。hash 路由被称为是前端路由，已经成为 SPA（单页面应用）的标配。

**原理：** hash 模式的主要原理就是 onhashchange()事件：

```js
window.onhashchange = function (event) {
  console.log(event.oldURL, event.newURL);
  let hash = location.hash.slice(1);
};
```

使用`onhashchange()`事件的好处就是，在页面的 hash 值发生变化时，无需向后端发起请求，window 就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash 值变化对应的 URL 都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的 hash 值和对应的 URL 关联起来了。

### history 模式

**简介：** history 模式的 URL 中没有#，它使用的是传统的路由分发模式，即用户在输入一个 URL 时，服务器会接收这个请求，并解析这个 URL，然后做出相应的逻辑处理。

**特点：** 当使用 history 模式时，URL 就像这样：`abc.com/user/id`。相比 hash 模式更加好看。但是，history 模式需要后台配置支持。如果后台没有正确配置，访问时会返回 404。
**API：** history api 可以分为两大部分，切换历史状态和修改历史状态：

- 修改历史状态：包括了 HTML5 History Interface 中新增的 `pushState()` 和 `replaceState()` 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了 url，但浏览器不会立即向后端发送请求。如果要做到改变 url 但又不刷新页面的效果，就需要前端用上这两个 API。
- 切换历史状态： 包括`forward()`、`back()`、`go()`三个方法，对应浏览器的前进，后退，跳转操作。

虽然 history 模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出 404 来。
如果想要切换到 history 模式，就要进行以下配置（后端也要进行配置）：

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

### 两种模式对比

调用 history.pushState() 相比于直接修改 hash，存在以下优势:

- pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
- pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
- pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
- pushState() 可额外设置 title 属性供后续使用。
- hash 模式下，仅 hash 符号之前的 url 会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回 404 错误；history 模式下，前端的 url 必须和实际向后端发起请求的 url 一致，如果没有对用的路由处理，将返回 404 错误。

## Vue-router 导航守卫有哪些

- 全局前置/钩子：beforeEach、beforeResolve、afterEach
- 路由独享的守卫：beforeEnter
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

## Vuex 的理解

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着应用中我们想要提升到全局去管理的状态（通常是多个组件都使用到的状态）。

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

## Redux 和 Vuex 有什么区别，它们的共同思想

### Redux 和 Vuex 区别

- Vuex 改进了 Redux 中的 Action 和 Reducer 函数，以 mutations 变化函数取代 Reducer，无需 switch，只需在对应的 mutation 函数里改变 state 值即可
- Vuex 由于 Vue 自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的 State 即可
- Vuex 数据流的顺序是 ∶View 调用 store.commit 提交对应的请求到 Store 中对应的 mutation 函数->store 改变（vue 检测到数据变化自动渲染）

通俗点理解就是，vuex 弱化 dispatch，通过 commit 进行 store 状态的一次更变;取消了 action 概念，不必传入特定的 action 形式进行指定变更;弱化 reducer，基于 commit 参数直接对数据进行转变，使得框架更加简易;

### 共同思想

- 单—的数据源
- 变化可以预测

本质上 redux 与 vuex 都是对 mvvm 思想的服务，将数据从视图中抽离的一种方案

## Vue3.0 有什么更新

### 监测机制的改变

- 3.0 将带来基于代理 Proxy 的 observer 实现，提供全语言覆盖的反应性跟踪。
- 消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制：
  - 只能监测对象的属性，不能监测对象本身；
  - 检测属性的添加和删除；
  - 检测数组索引和长度的变更；
  - 支持 Map、Set、WeakMap 和 WeakSet。

### 模板

作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
同时，对于 render 函数的方面，vue3.0 也会进行一系列更改来方便习惯直接使用 api 来生成 vdom 。

### 对象式的组件声明方式

vue2.x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。
3.0 修改了组件的声明方式，改成了类式的写法，这样使得和 TypeScript 的结合变得很容易

### 其它方面的更改

- 支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。
- 支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
- 基于 tree shaking 优化，提供了更多的内置功能

## Vue 3.0 中的 Vue Composition API？

在 Vue2 中，代码是 Options API 风格的，也就是通过填充 (option) data、methods、computed 等属性来完成一个 Vue 组件。这种风格使得 Vue 相对于 React 极为容易上手，同时也造成了几个问题：

1. 由于 Options API 不够灵活的开发方式，使得 Vue 开发缺乏优雅的方法来在组件间共用代码。
2. Vue 组件过于依赖 this 上下文，Vue 背后的一些小技巧使得 Vue 组件的开发看起来与 JavaScript 的开发原则相悖，比如在 methods 中的 this 竟然指向组件实例来不指向 methods 所在的对象。这也使得 TypeScript 在 Vue2 中很不好用。

于是在 Vue3 中，舍弃了 Options API，转而投向 Composition API。Composition API 本质上是将 Options API 背后的机制暴露给用户直接使用，这样用户就拥有了更多的灵活性，也使得 Vue3 更适合于 TypeScript 结合。同时 Vue Composition API 使得 Vue3 的开发风格更接近于原生 JavaScript，带给开发者更多地灵活性

## Composition API 与 React Hook 很像，区别是什么

从 React Hook 的实现角度看，React Hook 是根据 useState 调用的顺序来确定下一次重渲染时的 state 是来源于哪个 useState，所以出现了以下限制

- 不能在循环、条件、嵌套函数中调用 Hook
- 必须确保总是在你的 React 函数的顶层调用 Hook
- useEffect、useMemo 等函数必须手动确定依赖关系

而 Composition API 是基于 Vue 的响应式系统实现的，同时借鉴了 React Hook 的设计思想，但是也有一些不同：

- 声明在 setup 函数内，一次组件实例化只调用一次 setup，而 React Hook 每次重渲染都需要调用 Hook，使得 React 的 GC 比 Vue 更有压力，性能也相对于 Vue 来说也较慢
- Compositon API 的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
- 响应式系统自动实现了依赖收集，进而组件的部分的性能优化由 Vue 内部自己完成，而 React Hook 需要手动传入依赖，而且必须必须保证依赖的顺序，让 useEffect、useMemo 等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降。
