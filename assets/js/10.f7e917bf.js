(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{395:function(t,v,_){"use strict";_.r(v);var e=_(52),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"js-面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-面试题"}},[t._v("#")]),t._v(" JS 面试题")]),t._v(" "),_("h2",{attrs:{id:"强类型语言与弱类型语言的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强类型语言与弱类型语言的区别"}},[t._v("#")]),t._v(" 强类型语言与弱类型语言的区别")]),t._v(" "),_("ul",[_("li",[t._v("强类型语言：也就是强制必须定义变量类型的语言，变量的使用需要符合类型定义，所有变量如果不进行强制类型转换，那么就永远是一种类型。")]),t._v(" "),_("li",[t._v("弱语言类型：是一种变量类型可以忽略的语言，js 就是弱语言类型，在 js 中，如果变量不符合要求会进行强制类型转化")]),t._v(" "),_("li",[t._v("区别：强类型语言速度可能略逊色于弱语言类型，但是带来的严谨性可以帮助避免许多错误")])]),t._v(" "),_("h2",{attrs:{id:"js-的数据类型有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-的数据类型有哪些"}},[t._v("#")]),t._v(" js 的数据类型有哪些？")]),t._v(" "),_("p",[t._v("js 共有 8 种数据类型，其中：")]),t._v(" "),_("ul",[_("li",[t._v("引用类型："),_("code",[t._v("object")])]),t._v(" "),_("li",[t._v("原始数据类型："),_("code",[t._v("null")]),t._v(" "),_("code",[t._v("undefined")]),t._v(" "),_("code",[t._v("boolean")]),t._v(" "),_("code",[t._v("number")]),t._v(" "),_("code",[t._v("string")]),t._v(" "),_("code",[t._v("symbol")]),t._v(" "),_("code",[t._v("bigInt")])])]),t._v(" "),_("h2",{attrs:{id:"数据类型的检测有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据类型的检测有哪些"}},[t._v("#")]),t._v(" 数据类型的检测有哪些？")]),t._v(" "),_("ul",[_("li",[t._v("typeof：数组、null、对象都会被识别为 object，其他都正确")]),t._v(" "),_("li",[t._v("instanceof：只能正确的判断引用数据类型")]),t._v(" "),_("li",[t._v("constructor："),_("code",[t._v("(type).constructor.name.toLowerCase()")]),t._v("，如果原型被修改过就不能判断")]),t._v(" "),_("li",[_("code",[t._v("Object.prototype.toString.call()")])])]),t._v(" "),_("h2",{attrs:{id:"判断数组的方法有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#判断数组的方法有哪些"}},[t._v("#")]),t._v(" 判断数组的方法有哪些？")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Object.prototype.toString.call()")])]),t._v(" "),_("li",[t._v("原型链："),_("code",[t._v("arr.__proto__ === Array.prototype")])]),t._v(" "),_("li",[_("code",[t._v("Array.isArray(arr)")])]),t._v(" "),_("li",[t._v("instanceof")]),t._v(" "),_("li",[_("code",[t._v("Array.prototype.isPrototypeOf(arr)")])])]),t._v(" "),_("h2",{attrs:{id:"null-和-undefined-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#null-和-undefined-的区别"}},[t._v("#")]),t._v(" null 和 undefined 的区别")]),t._v(" "),_("p",[t._v("null 和 undefined 两个基本类型都只有一个值，就是 null 和 undefined。\nundefined 的含义是未定义，null 的含义是空对象。变量声明了但未赋值时默认就是 undefined，null 则是常用于赋值给一些可能会返回对象的变量作为初始值。")]),t._v(" "),_("h2",{attrs:{id:"typeof-null-的结果是什么-为什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#typeof-null-的结果是什么-为什么"}},[t._v("#")]),t._v(" typeof null 的结果是什么？为什么？")]),t._v(" "),_("p",[t._v("结果是 object。\n这是 js 的历史遗留问题。早期的 javascript 的值是包含一个"),_("strong",[t._v("类型标签")]),t._v("的，object 的类型标签是 000，null 的值也全是 0，所以 null 会被判定为 object。")]),t._v(" "),_("h2",{attrs:{id:"instanceof-操作符的实现原理及实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-操作符的实现原理及实现"}},[t._v("#")]),t._v(" instanceof 操作符的实现原理及实现")]),t._v(" "),_("p",[t._v("instanceof 运算符用于判断构造函数的 prototype 属性是否出现对象的原型链中的任何位置。")]),t._v(" "),_("h2",{attrs:{id:"为什么-0-1-0-2-0-3-如何让其相等"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么-0-1-0-2-0-3-如何让其相等"}},[t._v("#")]),t._v(" 为什么 0.1+0.2 !== 0.3？如何让其相等？")]),t._v(" "),_("p",[t._v("因为 js 的数字类型是根据 IEEE754 标准实现的，使用 64 位固定长度表示。而小数在转化成二进制后，会根据长度保留有效数字，遵循“0 舍 1 入”的原则。所以难免会有误差。")]),t._v(" "),_("p",[t._v("而要解决误差，最直接的就是设置一个误差范围，对 js 来说，这个误差范围在"),_("code",[t._v("Number.EPSILON")]),t._v("内，就可以认为是相等的。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[t._v("console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Number"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EPSILON")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("p",[t._v("还有一种就是把所有的小数转为整数计算后再变为小数")]),t._v(" "),_("h2",{attrs:{id:"typeof-nan-的值是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#typeof-nan-的值是什么"}},[t._v("#")]),t._v(" typeof NaN 的值是什么？")]),t._v(" "),_("p",[t._v("number")]),t._v(" "),_("p",[t._v("NaN 是一个特殊值，它和自身不相等是唯一一个 "),_("code",[t._v("x === x")]),t._v(" 不成立的值。\n要判断是否是 NaN，可以使用"),_("code",[t._v("isNaN")]),t._v("或"),_("code",[t._v("Number.isNaN")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("isNaN")]),t._v("：接收参数后，会把参数转为数值，再判断是否是"),_("code",[t._v("NaN")])]),t._v(" "),_("li",[_("code",[t._v("Number.isNaN")]),t._v("会先判断参数是否是数字，如果是再判断是否是"),_("code",[t._v("NaN")])])]),t._v(" "),_("h2",{attrs:{id:"操作符的强制类型转化规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作符的强制类型转化规则"}},[t._v("#")]),t._v(" == 操作符的强制类型转化规则")]),t._v(" "),_("p",[_("code",[t._v("==")]),t._v(" 会先判断左右两侧的变量类型是否相同，如果相同则比较值大小，如果不同，则会进行强制类型转化")]),t._v(" "),_("ol",[_("li",[t._v("双方是否是 "),_("code",[t._v("null")]),t._v(" 和 "),_("code",[t._v("undefined")]),t._v("，如是，返回"),_("code",[t._v("true")])]),t._v(" "),_("li",[t._v("判断两者类型是否是 "),_("code",[t._v("string")]),t._v(" 和 "),_("code",[t._v("number")]),t._v("，如果是则把 "),_("code",[t._v("string")]),t._v(" 转化为"),_("code",[t._v("number")])]),t._v(" "),_("li",[t._v("如果一方是"),_("code",[t._v("boolean")]),t._v("，则会把"),_("code",[t._v("boolean")]),t._v("转化为"),_("code",[t._v("number")]),t._v("再比较")]),t._v(" "),_("li",[t._v("如果一方是"),_("code",[t._v("object")]),t._v("，另一方是"),_("code",[t._v("string")]),t._v("，"),_("code",[t._v("number")]),t._v("，"),_("code",[t._v("symbol")]),t._v("，则把"),_("code",[t._v("object")]),t._v("转化为原始类型再比较")])]),t._v(" "),_("blockquote",[_("p",[t._v("symbol 不会进行隐式类型转换，只能显示的进行类型转换，但是 == 的另一方可以隐式转换")])]),t._v(" "),_("h2",{attrs:{id:"其他值到string的转换规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他值到string的转换规则"}},[t._v("#")]),t._v(" 其他值到"),_("code",[t._v("string")]),t._v("的转换规则")]),t._v(" "),_("ul",[_("li",[t._v("null -> 'null'")]),t._v(" "),_("li",[t._v("undefined -> 'undefined'")]),t._v(" "),_("li",[t._v("boolean: true -> 'true', false -> 'false'")]),t._v(" "),_("li",[t._v("number: 直接转化，但是极大和极小的数会用指数形式")]),t._v(" "),_("li",[t._v("symbol: 直接转化，但是只能显式转化")]),t._v(" "),_("li",[t._v("object: 先尝试 Symbol.toPrimitive 再 toString 再 valueOf，直到某一个方法返回原始值，如原始值不是字符串再按上述方法转化")])]),t._v(" "),_("h2",{attrs:{id:"其他值到number的转化规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他值到number的转化规则"}},[t._v("#")]),t._v(" 其他值到"),_("code",[t._v("number")]),t._v("的转化规则")]),t._v(" "),_("ul",[_("li",[t._v("null -> 0")]),t._v(" "),_("li",[t._v("undefined -> NaN")]),t._v(" "),_("li",[t._v("boolean: true -> 1, false -> 0")]),t._v(" "),_("li",[t._v("string: 使用 Number() 方法转换，包含非数字字符串则为 NaN，空字符串为 0")]),t._v(" "),_("li",[t._v("symbol: 不能转换为 number，会报错")]),t._v(" "),_("li",[t._v("object: 先尝试 Symbol.toPrimitive 再 valueOf 再 toString，直到某一个方法返回原始值，如原始值不是数字再按上述方法转化")])]),t._v(" "),_("h2",{attrs:{id:"其他值到-boolean-的转化规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他值到-boolean-的转化规则"}},[t._v("#")]),t._v(" 其他值到 boolean 的转化规则")]),t._v(" "),_("ul",[_("li",[t._v("0, +0, -0, NaN, '', null, undefined 会转化为 false")]),t._v(" "),_("li",[t._v("其他都转化为 true")])]),t._v(" "),_("h2",{attrs:{id:"object-is-和-、-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#object-is-和-、-区别"}},[t._v("#")]),t._v(" Object.is 和 ==、=== 区别？")]),t._v(" "),_("ul",[_("li",[t._v("== 判断时如果双方类型不同，会先转化类型再比较")]),t._v(" "),_("li",[t._v("=== 如果双方类型不同，会直接返回 false")]),t._v(" "),_("li",[t._v("Object.is 大致上与 === 相似，但是做了其他处理，+0 和 -0 不再相同，NaN 会等于 NaN")])]),t._v(" "),_("h2",{attrs:{id:"箭头函数与普通函数的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数与普通函数的区别"}},[t._v("#")]),t._v(" 箭头函数与普通函数的区别")]),t._v(" "),_("ul",[_("li",[t._v("箭头函数更简洁")]),t._v(" "),_("li",[t._v("箭头函数没有 this，它只会在自己作用域的上一层继承 this，所以它的 this 在定义的时候就固定了，后续不会再更改。call、apply、bing 不能改变箭头函数的 this 指向")]),t._v(" "),_("li",[t._v("箭头函数不能作为构造函数，没有 prototype 属性")]),t._v(" "),_("li",[t._v("箭头函数不能 Generator 函数，不能用 yield 关键字")]),t._v(" "),_("li",[t._v("箭头函数没有 arguments")])]),t._v(" "),_("h2",{attrs:{id:"扩展运算符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符"}},[t._v("#")]),t._v(" 扩展运算符")]),t._v(" "),_("ul",[_("li",[t._v("扩展运算符用于取出对象中的可遍历属性，拷贝到新对象中，与 Object.assign 作用相同")]),t._v(" "),_("li",[t._v("数组也和对象一样使用扩展运算符")]),t._v(" "),_("li",[t._v("rest 参数：把一个分离的序列整合成一个数组/对象，可用于解构，函数参数")])]),t._v(" "),_("h2",{attrs:{id:"proxy-可以实现什么功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#proxy-可以实现什么功能"}},[t._v("#")]),t._v(" Proxy 可以实现什么功能")]),t._v(" "),_("p",[t._v("Proxy 接收两个参数，一个是要代理的对象，一个是处理器，我们可以在处理器中添加 get 和 set，可以在获取与修改值时做额外的事情。")]),t._v(" "),_("p",[t._v("Vue3 就是根据 Proxy 来实现依赖收集和派发的。")]),t._v(" "),_("p",[t._v("与 Object.defineProperty 相比，Proxy 无需一层层的为每个属性添加代理，一次就能完成所有工作，且可以监听到任何形式的更改，缺点是老旧的浏览器会不支持。")]),t._v(" "),_("h2",{attrs:{id:"new-操作符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-操作符"}},[t._v("#")]),t._v(" new 操作符")]),t._v(" "),_("ol",[_("li",[t._v("首先创建一个空对象")]),t._v(" "),_("li",[t._v("把空对象的原型设置为构造函数的 prototype")]),t._v(" "),_("li",[t._v("把函数的 this 指向这个空对象")]),t._v(" "),_("li",[t._v("执行构造函数")]),t._v(" "),_("li",[t._v("判断函数的返回类型，如果是原始值则返回创建的这个对象，如果是引用类型则返回这个引用")])]),t._v(" "),_("h2",{attrs:{id:"map-和-object-的比较"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-和-object-的比较"}},[t._v("#")]),t._v(" Map 和 Object 的比较")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}}),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Map")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Object")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("意外的键")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Map 默认情况下不包含任何键，只包含显示插入的键")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Object 的原型上可能存在和本身相同的键")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("键的类型")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("任何类型")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("字符串和 symbol")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("键的顺序")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("有序的，遍历时会按插入顺序遍历")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("无序的")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("size")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("使用 size 属性获取")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("只能手动计算")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("迭代")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Map 是 iterable 的，可以直接迭代")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("使用 Object.keys()获取 key 组成的数组后才能迭代")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("性能")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("在频繁插入删除的时候表现更好，有特殊的优化")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("没有优化")])])])]),t._v(" "),_("h2",{attrs:{id:"map-和-weakmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-和-weakmap"}},[t._v("#")]),t._v(" Map 和 weakMap")]),t._v(" "),_("ul",[_("li",[t._v("拥有的属性、方法不同\n"),_("ul",[_("li",[t._v("Map: size, has, get, set, delete, clear, keys, values, entries, forEach")]),t._v(" "),_("li",[t._v("weakMap: has, get, set, delete")])])]),t._v(" "),_("li",[t._v("键的类型不同\n"),_("ul",[_("li",[t._v("Map: 任意类型")]),t._v(" "),_("li",[t._v("weakMap: 对象类型")])])]),t._v(" "),_("li",[t._v("对键的引用类型不同\n"),_("ul",[_("li",[t._v("Map: 键是对象时，即使外部没有了这个对象的引用，也不会被垃圾回收")]),t._v(" "),_("li",[t._v("weakMap: 当外界失去了对键的引用，那么 weakMap 的键会被垃圾回收机制回收，所以 weakMap 没有 keys, values, entries, forEach 等遍历方法，它的键值随时会变化")])])])]),t._v(" "),_("h2",{attrs:{id:"js-类数组对象的定义-如何转化为数组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#js-类数组对象的定义-如何转化为数组"}},[t._v("#")]),t._v(" js 类数组对象的定义？如何转化为数组")]),t._v(" "),_("p",[t._v("定义：一个拥有 length 属性且有一系列索引属性的对象都可以称为类数组对象")]),t._v(" "),_("p",[t._v("转化方法：")]),t._v(" "),_("ul",[_("li",[t._v("Array.prototype.slice.call(arrayLike) // 不会改变原对象")]),t._v(" "),_("li",[t._v("Array.prototype.splice.call(arrayLike, 0) // 会改变原对象")]),t._v(" "),_("li",[t._v("Array.from(arrayLike) // 不会改变原对象")])]),t._v(" "),_("p",[t._v("如何遍历类数组：")]),t._v(" "),_("ul",[_("li",[t._v("将数组方法应用到类数组上")]),t._v(" "),_("li",[t._v("转化为数组")])]),t._v(" "),_("h2",{attrs:{id:"原型与原型链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型与原型链"}},[t._v("#")]),t._v(" 原型与原型链")]),t._v(" "),_("p",[t._v("当使用构造函数新建对象时")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("P")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("p",[t._v("p 被称为"),_("strong",[t._v("实例")]),t._v("，P 被称为"),_("strong",[t._v("构造函数")]),t._v("，构造函数的 "),_("code",[t._v("prototype")]),t._v(" 属性被称为"),_("strong",[t._v("原型对象")]),t._v("。")]),t._v(" "),_("p",[t._v("实例是一个对象，当访问一个实例上不存在的属性时，js 会去实例的原型上查找，实例的原型指向"),_("strong",[t._v("原型对象")]),t._v("。")]),t._v(" "),_("p",[t._v("当实例的原型上也找不到这个属性时，js 会去实例的原型的原型上去查找，也就是"),_("strong",[t._v("原型对象")]),t._v("自己的原型，直到"),_("code",[t._v("Object.prototype")]),t._v("为止。")]),t._v(" "),_("p",[t._v("一个实例，可以通过"),_("code",[t._v("__proto__")]),t._v("属性来查看自己的原型，"),_("code",[t._v("Object.prototype.__proto__")]),t._v("是"),_("code",[t._v("null")]),t._v("，这也是"),_("code",[t._v("Object.prototype")]),t._v("被认为是原型链的终点的原因。")]),t._v(" "),_("p",[t._v("默认情况下，原型对象只有一个 constructor 属性，这个属性指向构造函数本身。")]),t._v(" "),_("h2",{attrs:{id:"作用域-作用域链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用域-作用域链"}},[t._v("#")]),t._v(" 作用域/作用域链")]),t._v(" "),_("ul",[_("li",[t._v("作用域分为全局作用域、函数作用域、块作用域")]),t._v(" "),_("li",[t._v("作用域链是指在当前作用域使用的变量未定义时，会去上一级的作用域查找，直到全局作用域找到变量/报错")])]),t._v(" "),_("h2",{attrs:{id:"闭包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),_("p",[t._v("是指能在函数外部访问函数内部变量的函数")]),t._v(" "),_("h2",{attrs:{id:"this"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),_("p",[t._v("this 是执行上下文的一个属性，他指向最后一个调用这个方法的对象")]),t._v(" "),_("ul",[_("li",[t._v("函数调用：当一个函数不是对象的属性，直接作为函数来调用时，函数内部的 this 在非严格模式下指向全局对象，严格模式下指向 undefined")]),t._v(" "),_("li",[t._v("方法调用：当一个函数作为一个对象的属性方法来调用时，this 指向这个函数")]),t._v(" "),_("li",[t._v("构造函数调用：函数用 new 调用时，函数会先创建一个对象，this 指向这个对象")]),t._v(" "),_("li",[t._v("apply/call/bind: 这三个方法都可以改变函数的 this 指向\n"),_("ul",[_("li",[t._v("apply 接收两个参数，第一个是 this 要指向的对象，第二个是函数参数组成的数组")]),t._v(" "),_("li",[t._v("call 接受的第一个参数是 this 要指向的对象，其他的参数都会被作为函数参数传入函数")]),t._v(" "),_("li",[t._v("bind 返回一个绑定了 this 值的新函数，这个函数的 this 指向除了使用 new 时会改变，其他时候都不会变")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("这四种方法，优先级从高到低是 构造函数调用 > apply/call/bind > 方法调用 > 函数调用")])]),t._v(" "),_("h2",{attrs:{id:"settimeout-的-this-指向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-的-this-指向"}},[t._v("#")]),t._v(" setTimeout 的 this 指向")]),t._v(" "),_("ul",[_("li",[t._v("如果是个普通回调函数，则 this 会被挂载到 window")]),t._v(" "),_("li",[t._v("如果是个箭头函数，则 this 会被指向定义时的作用域 this 指向")])]),t._v(" "),_("h2",{attrs:{id:"事件循环与事件队列-eventloop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件循环与事件队列-eventloop"}},[t._v("#")]),t._v(" 事件循环与事件队列（EventLoop）")]),t._v(" "),_("p",[t._v("js 是单线程执行的，大多数时候都是从上到下执行代码，但是当遇到异步代码时，会根据异步函数的类别是宏任务还是微任务，加入到不同事件队列中，直到当前同步任务执行完毕，js 会检查微任务队列是否有待执行的微任务，然后依次执行，直到微任务队列清空，视情况渲染页面。然后继续检查宏任务队列，执行宏任务...循环往复直到所有队列清空。")]),t._v(" "),_("h2",{attrs:{id:"有哪些宏任务-哪些微任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有哪些宏任务-哪些微任务"}},[t._v("#")]),t._v(" 有哪些宏任务，哪些微任务")]),t._v(" "),_("ul",[_("li",[t._v("宏任务\n"),_("ul",[_("li",[t._v("script")]),t._v(" "),_("li",[t._v("setTimeout")]),t._v(" "),_("li",[t._v("setInterval")]),t._v(" "),_("li",[t._v("postMessage")]),t._v(" "),_("li",[t._v("MessageChannel")]),t._v(" "),_("li",[t._v("UI 交互事件")]),t._v(" "),_("li",[t._v("setImmediate(node)")])])]),t._v(" "),_("li",[t._v("微任务\n"),_("ul",[_("li",[t._v("Promise")]),t._v(" "),_("li",[t._v("MutationObserver")]),t._v(" "),_("li",[t._v("process.nextTick(node)")])])])]),t._v(" "),_("h2",{attrs:{id:"异步编程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[t._v("#")]),t._v(" 异步编程")]),t._v(" "),_("ul",[_("li",[t._v("回调函数：回调地狱")]),t._v(" "),_("li",[t._v("promise: 可以把回调形式改为链式调用")]),t._v(" "),_("li",[t._v("generator: 一种在函数执行过程中，可以把执行权转移出去，函数外部还可以把执行权转移回来。在遇到异步函数执行时，把函数执行权转移异步函数，异步函数执行完再把执行权转移回来。因此可以像写同步代码一样处理异步操作。\n"),_("blockquote",[_("p",[t._v("控制权的转移是个问题 "),_("br"),t._v("\n理解起来很困难")])])]),t._v(" "),_("li",[t._v("async/await: 是 generator 和 promise 实现的一个语法糖。await 要和 async 搭配使用，await 后面接收一个 promise，它会等待 promise 执行完成并且阻塞后续代码，当 promise 被 resolve 后继续执行，需要使用 try catch 来捕获 reject 抛出的错误。也可以把异步的逻辑当为同步的操作来书写。")])]),t._v(" "),_("h2",{attrs:{id:"面向对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),_("ul",[_("li",[t._v("创建对象\n"),_("ul",[_("li",[t._v("字面量：不适合大量创建时使用")]),t._v(" "),_("li",[t._v("工厂模式")]),t._v(" "),_("li",[t._v("构造函数模式")]),t._v(" "),_("li",[t._v("原型模式")]),t._v(" "),_("li",[t._v("组合使用构造函数模式和原型模式")]),t._v(" "),_("li",[t._v("动态原型模式")]),t._v(" "),_("li",[t._v("寄生构造函数模式")])])]),t._v(" "),_("li",[t._v("对象的继承\n"),_("ul",[_("li",[t._v("原型链继承")]),t._v(" "),_("li",[t._v("借助构造函数继承")]),t._v(" "),_("li",[t._v("组合继承")]),t._v(" "),_("li",[t._v("原型式继承")]),t._v(" "),_("li",[t._v("寄生式继承")]),t._v(" "),_("li",[t._v("寄生式组合继承")])])])]),t._v(" "),_("h2",{attrs:{id:"es6-有什么更新"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6-有什么更新"}},[t._v("#")]),t._v(" ES6 有什么更新")]),t._v(" "),_("p",[t._v("ES6 全称 ECMAScript6，指的是 2015 年发布的新一代 JavaScript 标准，一般也泛指包括 2015 年以后发布的所有新标准。")]),t._v(" "),_("ul",[_("li",[t._v("新增的 BigInt symbol 类型")]),t._v(" "),_("li",[_("strong",[t._v("let、const")])]),t._v(" "),_("li",[_("strong",[t._v("解构赋值")])]),t._v(" "),_("li",[_("strong",[t._v("模版字符串")])]),t._v(" "),_("li",[_("strong",[t._v("for of 遍历迭代器")])]),t._v(" "),_("li",[t._v("新增的字符串方法\n"),_("ul",[_("li",[t._v("includes()")]),t._v(" "),_("li",[t._v("startsWith()")]),t._v(" "),_("li",[t._v("endsWith()")]),t._v(" "),_("li",[t._v("repeat()")]),t._v(" "),_("li",[t._v("padStart()")]),t._v(" "),_("li",[t._v("padEnd()")]),t._v(" "),_("li",[t._v("trimStart()")]),t._v(" "),_("li",[t._v("trimEnd()")]),t._v(" "),_("li",[t._v("replaceAll()")])])]),t._v(" "),_("li",[t._v("数值的扩展\n"),_("ul",[_("li",[t._v("数值分隔符")]),t._v(" "),_("li",[t._v("Number.isFinite()")]),t._v(" "),_("li",[t._v("Number.isNaN()")]),t._v(" "),_("li",[t._v("Number.parseInt(), Number.parseFloat()")]),t._v(" "),_("li",[t._v("Number.isInteger()")]),t._v(" "),_("li",[t._v("Number.EPSILON")])])]),t._v(" "),_("li",[t._v("函数的扩展\n"),_("ul",[_("li",[_("strong",[t._v("参数的默认值")])]),t._v(" "),_("li",[_("strong",[t._v("rest 参数")])]),t._v(" "),_("li",[t._v("name 属性")]),t._v(" "),_("li",[_("strong",[t._v("箭头函数")])]),t._v(" "),_("li",[t._v("尾调用优化")]),t._v(" "),_("li",[t._v("catch 参数可省略")])])]),t._v(" "),_("li",[t._v("数组的扩展\n"),_("ul",[_("li",[_("strong",[t._v("扩展运算符")]),t._v(" "),_("code",[t._v("...")])]),t._v(" "),_("li",[t._v("Array.from")]),t._v(" "),_("li",[t._v("find()")]),t._v(" "),_("li",[t._v("findIndex()")]),t._v(" "),_("li",[t._v("fill()")]),t._v(" "),_("li",[_("strong",[t._v("includes()")])])])]),t._v(" "),_("li",[t._v("对象的扩展\n"),_("ul",[_("li",[_("strong",[t._v("属性与变量同名时可以简写")])]),t._v(" "),_("li",[t._v("属性是函数时，可以省略 "),_("code",[t._v(":function")])]),t._v(" "),_("li",[t._v("属性名表达式")]),t._v(" "),_("li",[t._v("super 关键字")]),t._v(" "),_("li",[t._v("新增的方法\n"),_("ul",[_("li",[t._v("Object.is()")]),t._v(" "),_("li",[_("strong",[t._v("Object.assign()")])]),t._v(" "),_("li",[t._v("Object.getOwnPropertyDescriptors()")]),t._v(" "),_("li",[t._v("Object.getPrototypeOf()")]),t._v(" "),_("li",[t._v("Object.setPrototypeOf()")]),t._v(" "),_("li",[t._v("Object.create()")]),t._v(" "),_("li",[t._v("Object.keys()")]),t._v(" "),_("li",[t._v("Object.values()")]),t._v(" "),_("li",[t._v("Object.entries()")]),t._v(" "),_("li",[t._v("Object.fromEntries()")])])])])]),t._v(" "),_("li",[t._v("运算符扩展\n"),_("ul",[_("li",[t._v("指数运算符 **")]),t._v(" "),_("li",[_("strong",[t._v("链判断运算符")]),t._v(" "),_("code",[t._v("?.")])]),t._v(" "),_("li",[_("strong",[t._v("Null 判断运算符")]),t._v(" "),_("code",[t._v("??")])])])]),t._v(" "),_("li",[t._v("Set WeakSet")]),t._v(" "),_("li",[t._v("Map WeakMap")]),t._v(" "),_("li",[_("strong",[t._v("Proxy")])]),t._v(" "),_("li",[t._v("Reflect")]),t._v(" "),_("li",[_("strong",[t._v("Promise")])]),t._v(" "),_("li",[_("strong",[t._v("async 函数")])]),t._v(" "),_("li",[t._v("Iterator 和 for...of 循环")]),t._v(" "),_("li",[t._v("Generator 函数")]),t._v(" "),_("li",[t._v("Class")]),t._v(" "),_("li",[_("strong",[t._v("Module")]),t._v(" "),_("ul",[_("li",[t._v("import from")]),t._v(" "),_("li",[t._v("import()")]),t._v(" "),_("li",[t._v("export")]),t._v(" "),_("li",[t._v("export default")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);