# JS 面试题

## 强类型语言与弱类型语言的区别

- 强类型语言：也就是强制必须定义变量类型的语言，变量的使用需要符合类型定义，所有变量如果不进行强制类型转换，那么就永远是一种类型。
- 弱语言类型：是一种变量类型可以忽略的语言，js 就是弱语言类型，在 js 中，如果变量不符合要求会进行强制类型转化
- 区别：强类型语言速度可能略逊色于弱语言类型，但是带来的严谨性可以帮助避免许多错误

## js 的数据类型有哪些？

js 共有 8 种数据类型，其中：

- 引用类型：`object`
- 原始数据类型：`null` `undefined` `boolean` `number` `string` `symbol` `bigInt`

## 数据类型的检测有哪些？

- typeof：数组、null、对象都会被识别为 object，其他都正确
- instanceof：只能正确的判断引用数据类型
- constructor：`(type).constructor.name.toLowerCase()`，如果原型被修改过就不能判断
- `Object.prototype.toString.call()`

## 判断数组的方法有哪些？

- `Object.prototype.toString.call()`
- 原型链：`arr.__proto__ === Array.prototype`
- `Array.isArray(arr)`
- instanceof
- `Array.prototype.isPrototypeOf(arr)`

## null 和 undefined 的区别

null 和 undefined 两个基本类型都只有一个值，就是 null 和 undefined。
undefined 的含义是未定义，null 的含义是空对象。变量声明了但未赋值时默认就是 undefined，null 则是常用于赋值给一些可能会返回对象的变量作为初始值。

## typeof null 的结果是什么？为什么？

结果是 object。
这是 js 的历史遗留问题。早期的 javascript 的值是包含一个**类型标签**的，object 的类型标签是 000，null 的值也全是 0，所以 null 会被判定为 object。

## instanceof 操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现对象的原型链中的任何位置。

## 为什么 0.1+0.2 !== 0.3？如何让其相等？

因为 js 的数字类型是根据 IEEE754 标准实现的，使用 64 位固定长度表示。而小数在转化成二进制后，会根据长度保留有效数字，遵循“0 舍 1 入”的原则。所以难免会有误差。

而要解决误差，最直接的就是设置一个误差范围，对 js 来说，这个误差范围在`Number.EPSILON`内，就可以认为是相等的。

```js
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
```

还有一种就是把所有的小数转为整数计算后再变为小数

## typeof NaN 的值是什么？

number

NaN 是一个特殊值，它和自身不相等是唯一一个 `x === x` 不成立的值。
要判断是否是 NaN，可以使用`isNaN`或`Number.isNaN`

- `isNaN`：接收参数后，会把参数转为数值，再判断是否是`NaN`
- `Number.isNaN`会先判断参数是否是数字，如果是再判断是否是`NaN`

## == 操作符的强制类型转化规则

`==` 会先判断左右两侧的变量类型是否相同，如果相同则比较值大小，如果不同，则会进行强制类型转化

1. 双方是否是 `null` 和 `undefined`，如是，返回`true`
2. 判断两者类型是否是 `string` 和 `number`，如果是则把 `string` 转化为`number`
3. 如果一方是`boolean`，则会把`boolean`转化为`number`再比较
4. 如果一方是`object`，另一方是`string`，`number`，`symbol`，则把`object`转化为原始类型再比较

> symbol 不会进行隐式类型转换，只能显示的进行类型转换，但是 == 的另一方可以隐式转换

## 其他值到`string`的转换规则

- null -> 'null'
- undefined -> 'undefined'
- boolean: true -> 'true', false -> 'false'
- number: 直接转化，但是极大和极小的数会用指数形式
- symbol: 直接转化，但是只能显式转化
- object: 先尝试 Symbol.toPrimitive 再 toString 再 valueOf，直到某一个方法返回原始值，如原始值不是字符串再按上述方法转化

## 其他值到`number`的转化规则

- null -> 0
- undefined -> NaN
- boolean: true -> 1, false -> 0
- string: 使用 Number() 方法转换，包含非数字字符串则为 NaN，空字符串为 0
- symbol: 不能转换为 number，会报错
- object: 先尝试 Symbol.toPrimitive 再 valueOf 再 toString，直到某一个方法返回原始值，如原始值不是数字再按上述方法转化

## 其他值到 boolean 的转化规则

- 0, +0, -0, NaN, '', null, undefined 会转化为 false
- 其他都转化为 true

## Object.is 和 ==、=== 区别？

- == 判断时如果双方类型不同，会先转化类型再比较
- === 如果双方类型不同，会直接返回 false
- Object.is 大致上与 === 相似，但是做了其他处理，+0 和 -0 不再相同，NaN 会等于 NaN

## 箭头函数与普通函数的区别

- 箭头函数更简洁
- 箭头函数没有 this，它只会在自己作用域的上一层继承 this，所以它的 this 在定义的时候就固定了，后续不会再更改。call、apply、bing 不能改变箭头函数的 this 指向
- 箭头函数不能作为构造函数
- 箭头函数不能 Generator 函数，不能用 yield 关键字
- 箭头函数没有 arguments
- 箭头函数没有 prototype

## 扩展运算符

- 扩展运算符用于取出对象中的可遍历属性，拷贝到新对象中，与 Object.assign 作用相同
- 数组也和对象一样使用扩展运算符
- rest 参数：把一个分离的序列整合成一个数组/对象，可用于解构，函数参数

## Proxy 可以实现什么功能

Proxy 接收两个参数，一个是要代理的对象，一个是处理器，我们可以在处理器中添加 get 和 set，可以在获取与修改值时做额外的事情。

Vue3 就是根据 Proxy 来实现依赖收集和派发的。

与 Object.defineProperty 相比，Proxy 无需一层层的为每个属性添加代理，一次就能完成所有工作，且可以监听到任何形式的更改，缺点是老旧的浏览器会不支持。

## new 操作符

1. 首先创建一个空对象
2. 把空对象的原型设置为构造函数的 prototype
3. 把函数的 this 指向这个空对象
4. 执行构造函数
5. 判断函数的返回类型，如果是原始值则返回创建的这个对象，如果是引用类型则返回这个引用

## Map 和 Object 的比较

|          |                      Map                       |                     Object                      |
| :------: | :--------------------------------------------: | :---------------------------------------------: |
| 意外的键 | Map 默认情况下不包含任何键，只包含显示插入的键 |      Object 的原型上可能存在和本身相同的键      |
| 键的类型 |                    任何类型                    |                 字符串和 symbol                 |
| 键的顺序 |         有序的，遍历时会按插入顺序遍历         |                     无序的                      |
|   size   |               使用 size 属性获取               |                  只能手动计算                   |
|   迭代   |        Map 是 iterable 的，可以直接迭代        | 使用 Object.keys()获取 key 组成的数组后才能迭代 |
|   性能   |   在频繁插入删除的时候表现更好，有特殊的优化   |                    没有优化                     |

## Map 和 weakMap

- 拥有的属性、方法不同
  - Map: size, has, get, set, delete, clear, keys, values, entries, forEach
  - weakMap: has, get, set, delete
- 键的类型不同
  - Map: 任意类型
  - weakMap: 对象类型
- 对键的引用类型不同
  - Map: 键是对象时，即使外部没有了这个对象的引用，也不会被垃圾回收
  - weakMap: 当外界失去了对键的引用，那么 weakMap 的键会被垃圾回收机制回收，所以 weakMap 没有 keys, values, entries, forEach 等遍历方法，它的键值随时会变化

## js 类数组对象的定义？如何转化为数组

定义：一个拥有 length 属性且有一系列索引属性的对象都可以称为类数组对象

转化方法：

- Array.prototype.slice.call(arrayLike) // 不会改变原对象
- Array.prototype.splice.call(arrayLike, 0) // 会改变原对象
- Array.from(arrayLike) // 不会改变原对象

如何遍历类数组：

- 将数组方法应用到类数组上
- 转化为数组

## 原型与原型链

当使用构造函数新建对象时

```js
const p = new P();
```

p 被称为**实例**，P 被称为**构造函数**，构造函数的 `prototype` 属性被称为**原型对象**。

实例是一个对象，当访问一个实例上不存在的属性时，js 会去实例的原型上查找，实例的原型指向**原型对象**。

当实例的原型上也找不到这个属性时，js 会去实例的原型的原型上去查找，也就是**原型对象**自己的原型，直到`Object.prototype`为止。

一个实例，可以通过`__proto__`属性来查看自己的原型，`Object.prototype.__proto__`是`null`，这也是`Object.prototype`被认为是原型链的终点的原因。

默认情况下，原型对象只有一个 constructor 属性，这个属性指向构造函数本身。

## 作用域/作用域链

- 作用域分为全局作用域、函数作用域、块作用域
- 作用域链是指在当前作用域使用的变量未定义时，会去上一级的作用域查找，直到全局作用域找到变量/报错

## 闭包

是指能在函数外部访问函数内部变量的函数

## this

this 是执行上下文的一个属性，他指向最后一个调用这个方法的对象

- 函数调用：当一个函数不是对象的属性，直接作为函数来调用时，函数内部的 this 在非严格模式下指向全局对象，严格模式下指向 undefined
- 方法调用：当一个函数作为一个对象的属性方法来调用时，this 指向这个函数
- 构造函数调用：函数用 new 调用时，函数会先创建一个对象，this 指向这个对象
- apply/call/bind: 这三个方法都可以改变函数的 this 指向
  - apply 接收两个参数，第一个是 this 要指向的对象，第二个是函数参数组成的数组
  - call 接受的第一个参数是 this 要指向的对象，其他的参数都会被作为函数参数传入函数
  - bind 返回一个绑定了 this 值的新函数，这个函数的 this 指向除了使用 new 时会改变，其他时候都不会变

> 这四种方法，优先级从高到低是 构造函数调用 > apply/call/bind > 方法调用 > 函数调用

## 异步编程

- 回调函数：回调地狱
- promise: 可以把回调形式改为链式调用
- generator: 一种在函数执行过程中，可以把执行权转移出去，函数外部还可以把执行权转移回来。在遇到异步函数执行时，把函数执行权转移异步函数，异步函数执行完再把执行权转移回来。因此可以像写同步代码一样处理异步操作。
  > 控制权的转移是个问题 <br>
  > 理解起来很困难
- async/await: 是 generator 和 promise 实现的一个语法糖。await 要和 async 搭配使用，await 后面接收一个 promise，它会等待 promise 执行完成并且阻塞后续代码，当 promise 被 resolve 后继续执行，需要使用 try catch 来捕获 reject 抛出的错误。也可以把异步的逻辑当为同步的操作来书写。

## 面向对象

- 创建对象
  - 字面量：不适合大量创建时使用
  - 工厂模式
  - 构造函数模式
  - 原型模式
  - 组合使用构造函数模式和原型模式
  - 动态原型模式
  - 寄生构造函数模式
- 对象的继承
  - 原型链继承
  - 借助构造函数继承
  - 组合继承
  - 原型式继承
  - 寄生式继承
  - 寄生式组合继承

## ES6 有什么更新

ES6 全称 ECMAScript6，指的是 2015 年发布的新一代 JavaScript 标准，一般也泛指包括 2015 年以后发布的所有新标准。

- 新增的 BigInt symbol 类型
- let、const
- 解构赋值
- 模版字符串
- for of 遍历迭代器
- 新增的字符串方法
  - includes()
  - startsWith()
  - endsWith()
  - repeat()
  - padStart()
  - padEnd()
  - trimStart()
  - trimEnd()
  - replaceAll()
- 数值的扩展
  - 数值分隔符
  - Number.isFinite()
  - Number.isNaN()
  - Number.parseInt(), Number.parseFloat()
  - Number.isInteger()
  - Number.EPSILON
- 函数的扩展
  - 参数的默认值
  - rest 参数
  - name 属性
  - 箭头函数
  - 尾调用优化
  - catch 参数可省略
- 数组的扩展
  - 扩展运算符 ...
  - Array.from
  - find()
  - findIndex()
  - fill()
  - includes()
- 对象的扩展
  - 属性与变量同名时可以简写
  - 属性是函数时，可以省略 `:function`
  - 属性名表达式
  - super 关键字
  - 新增的方法
    - Object.is()
    - Object.assign()
    - Object.getOwnPropertyDescriptors()
    - Object.getPrototypeOf()
    - Object.setPrototypeOf()
    - Object.create()
    - Object.keys()
    - Object.values()
    - Object.entries()
    - Object.fromEntries()
- 运算符扩展
  - 指数运算符 \*\*
  - 链判断运算符 ?.
  - Null 判断运算符 ??
- Set WeakSet
- Map WeakMap
- Proxy
- Reflect
- Promise
- async 函数
- Iterator 和 for...of 循环
- Generator 函数
- Class
- Module
  - import from
  - import()
  - export
  - export default
