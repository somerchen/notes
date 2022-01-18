---
sidebarDepth: 3
---

# JS 面试题

## 强类型语言与弱类型语言的区别

- 强类型语言：也就是强制必须定义变量类型的语言，变量的使用需要符合类型定义，所有变量如果不进行强制类型转换，那么就永远是一种类型。
- 弱语言类型：是一种变量类型可以忽略的语言，js 就是弱语言类型，在 js 中，如果变量不符合要求会进行强制类型转化
- 区别：强类型语言速度可能略逊色于弱语言类型，但是带来的严谨性可以帮助避免许多错误

## js 的数据类型有哪些？

js 共有 8 种数据类型，其中：

- 引用类型：`object`
- 原始数据类型：`null` `undefined` `boolean` `number` `string` `symbol` `bigInt`

### 数据类型的检测有哪些？

- typeof：数组、null、对象都会被识别为 object，其他都正确
- instanceof：只能正确的判断引用数据类型
- constructor：`(type).contructor.name.toLowerCase()`，如果原型被修改过就不能判断
- `Object.prototype.toString.call()`

### 判断数组的方法有哪些？

- `Object.prototype.toString.call()`
- 原型链：`arr.__proto__ === Array.prototype`
- `Array.isArray(arr)`
- instanceof
- `Array.prototype.isPrototypeOf(arr)`

### null 和 undefined 的区别

null 和 undefined 两个基本类型都只有一个值，就是 null 和 undefined。
undefined 的含义是未定义，null 的含义是空对象。变量声明了但未赋值时默认就是 undefined，null 则是常用于赋值给一些可能会返回对象的变量作为初始值。

### typeof null 的结果是什么？为什么？

结果是 object。
这是 js 的历史遗留问题。早期的 javascript 的值是包含一个**类型标签**的，object 的类型标签是 000，null 的值也全是 0，所以 null 会被判定为 object。

### instanceof 操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现对象的原型链中的任何位置。

### 为什么 0.1+0.2 !== 0.3？如何让其相等？

因为 js 的数字类型是根据 IEEE754 标准实现的，使用 64 位固定长度表示。而小数在转化成二进制后，会根据长度保留有效数字，遵循“0 舍 1 入”的原则。所以难免会有误差。
而要解决误差，最直接的就是设置一个误差范围，对 js 来说，这个误差范围在`Number.EPSILON`内，就可以认为是相等的。

```js
console.log(Math.abs(0.1 + 0.2, 0.3) < Number.EPSILON);
```

### typeof NaN 的值是什么？

number

NaN 是一个特殊值，它和自身不相等是唯一一个 `x === x` 不成立的值。
要判断是否是 NaN，可以使用`isNaN`或`Number.isNaN`

- `isNaN`：接收参数后，会把参数转为数值，再判断是否是`NaN`
- `Number.isNaN`会先判断参数是否是数字，如果是再判断是否是`NaN`
