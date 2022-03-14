# 浏览器相关面试题

## 兼容性问题

1. IOS 识别时间格式限制：只能识别 YYYY/MM/DD 不能识别 YYYY-MM-DD
2. IOS 部分版本不支持 border-style 的 dashed dotted，需要使用 background-image 来实现虚线点线的效果
3. IOS 低版本使用 padding 撑起盒子高度时，border 会被裁减一部分，需要使用 height 属性指定高度
4. 输入汉字时，IOS 会在 input 输入框内显示拼音，并且把拼音也算作内容的一部分，当输入框有长度限制时，就会导致计算出错；需要使用 compositionStart、compositionEnd 重新调整计算逻辑
5. 部分安卓设备的按钮垂直居中文字会有偏上的情况

## 错误监控

## 安全策略
