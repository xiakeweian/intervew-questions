# 前端所有面试题汇总

## 盒模型是指什么？

盒模型指的是页面在渲染时，DOM 元素所采用的布局模型，一个元素占用的空间大小由几个部分组成，内容(content)、内边距(padding)，边框(border)和外边距(margin)。
w3c 盒子模型  =  内容区域 content(height,width)+内边距(padding)+边框(border)+外边距(margin),content = width
IE 盒模型 width = content + paddding + border
后来 W3C 中加入了  box-sizing 样式，属性包含 content-box 和 border-box；content-box 就是默认的样式（W3C 盒模型），border-box（IE 盒模型）是 width 包含了 content+padding+boder

## css 选择器优先级

**！important>内联选择器>ID 选择器>类别选择器>属性选择器>伪类>元素选择器>通配符选择器>继承选择器**
属性选择器有以下几种：

- 第一种：[属性]

          [title] {
              color: blue;
          }

- 第二种：属性=值

          [title=one] {
              border: 5px solid green;
              color: crimson;
          }

- 第三种：[属性~=值] 属性中包含独立的单词

          [title~=one] {
              color: dodgerblue;
          }

* 第四种 属性中必须是完整且唯一的单词，或用" - "隔开
  [lang|=one] {
  background: #72D1FF;
  font-weight: 600;
  text-align: center;
  }

- 第五种：[属性*=值] 属性中做字符串拆分，只要能拆出来 value 这个词就行

          .box .content [title*=one] {
              color: orange;
          }

- 第六种：[属性^=值] 属性的前几个字母是值就可以

                  .box .content [title^=one] {
                      color: darkorchid;
                  }

  ## 伪类和伪元素分别有哪些，什么区别？

  伪类：
  |属性|用法|说明|
  |:---|:---:|:---|
  |:link |用法--a:link |选择所有未访问链接|
  |:visited |用法--a:visited |选择所有访问过的链接|
  |:active |用法--a:active |选择活动链接|
  |:hover |用法--a:hover |选择鼠标在链接上面时|
  |:focus |用法--input:focus |选择具有焦点的输入元素|
  |:first-letter |用法--p:first-letter |选择每一个<p>元素的第一个字母|
  |:first-line |用法--p:first-line |选择每一个<p>元素的第一行|
  |:first-child |用法--p:first-child |指定只有当<p>元素是其父级的第一个子级的样式|
  |:lang |用法--p:lang(it) |选择一个 lang 属性的起始值="it"的所有<p>元素|
  |:enable |用法--p:enable|选择每个已启动的元素|
  |:disable |用法--p:disable|选择每个已禁止的元素|
  |:checked |用法--p:checked|选择每个被选中的元素|
  |:target |用法--p:target|选择当前的锚点元素|
  |:first-of-type |用法--p:first-of-type|选择满足是其父元素的第一个某类型子元素的元素|
  |:last-of-type |用法--p:last-of-type|选择满足是其父元素的最后一个某类型子元素的元素|
  |:only-of-type |用法--p:only-of-type|选择满足是其父元素的唯一一个某类型子元素的元素|
  |:nth-of-type(n) |用法--p:nth-of-type(n)|选择满足是其父元素的第 n 个某类型子元素的元素|
  |:nth-last-of-type(n) |用法--p:nth-last-of-type(n)|选择满足是其父元素的倒数第 n 个某类型的元素|
  |:only-child |用法--p:only-child|选择满足是其父元素的唯一一个子元素的元素|
  |:last-child |用法--p:last-child|选择满足是其父元素的最后一个元素的元素|
  |:nth-child(n) |用法--p:nth-child(n)|选择满足是其父元素的第 n 个子元素的元素|
  |:nth-last-child(n) |用法--p:nth-last-child(n)|选择满足是其父元素的倒数第 n 个子元素的元素|
  |:empty |用法--p:empty|选择满足没有子元素的元素|
  |:in-range |用法--p:in-range|选择满足值在指定范围内的元素|
  |:out-of-range |用法--p:out-of-range|选择值不在指定范围内的元素|
  |:invalid |用法--p:invalid|选择满足值为无效值的元素|
  |:valid |用法--p:valid|选择满足值为有效值的元素|
  |:not(selector) |用法--p:not(selector) |选择不满足 selector 的元素|
  |:optional |用法--p:optional|选择为可选项的表单元素，即没有“required”属性|
  |:read-only |用法--p:read-only |选择有"readonly"的表单元素|
  |:read-write |用法--p:read-write|选择没有"readonly"的表单元素|
  |:root |用法--div:read-write|选择根元素|

伪元素：
|属性|用法|说明|
|:---|:---:|:---|
|:before |用法--p:before |在每个<p>元素之前插入内容|
|:after |用法--p:after |在每个<p>元素之后插入内容|
|::first-letter|用法--p::first-letter| 选择指定元素的第一个单词|
|::first-line|用法--p::first-line| 选择指定元素的第一行|
|::selection|用法--p::selection| 选择指定元素中被用户选中的内容|
区别：伪类的操作对象是文档树中已有的元素，本身存在，只是在特定场景下才会触发，而伪元素则创建了一个文档树外的 dom 元素,并为其添加样式.

## 什么是 BFC，BFC 实现原理，如何创建 BFC。可以解决的问题?

### 什么是 BFC？

.BFC(Block formatting context)直译为“块级格式化上下文”。1.BFC 它是一个独立的渲染区域，只有 （块元素）参与，它规定了内部的 块元素如何布局，并且与这个区域外部毫不相关。 2.可以理解成：创建了 BFC 的元素就是一个独立的盒子，里面的子元素不会在布局上影响外面的元素（里面怎么布局都不会影响外部），**BFC 仍属于文档中的普通流** 3.不是所有的元素，模式都能产生 BFC 。w3c 规范：display 属性为 block, list-item ,table 的元素，会产生 BFC。

### BFC 的原理是什么？

1）内部的 Box 会在垂直方向，一个接一个地放置。
2）Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
3）每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4）BFC 的区域不会与 float box 重叠。
5）BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6）计算 BFC 的高度时，浮动元素也参与计算。

### 如何创建 BFC?

1）根元素
2）float 属性不为 none
3）position 不为 static 和 relative
4）overflow 不为 visible
5）display 为 inline-block, table-cell, table-caption, flex, inline-flex

### BFC 作用？

1）防止外边距重叠。
bfc 导致的属于同一个 bfc 中的子元素的 margin 重叠(Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠)
我们可以在 div 外面包裹一层容器，并触发该容器生成一个 BFC。那么两个 div 便不属于同一个 BFC，就不会发生 margin 重叠了。
2）清除浮动的影响
块级子元素浮动，如果块级父元素没有设置高度，其会有高度塌陷的情况发生。
原因：子元素浮动后，均开启了 BFC，父元素不会被子元素撑开。
解决方法：由第六条原理得，计算 BFC 的高度时，浮动元素也参与计算。所以只要将父容器设置为 bfc
就可以把子元素包含进去：这个容器将包含浮动的子元素，它的高度将扩展到可以包含它的
子元素，在这个 BFC，这些元素将会回到页面的常规文档流。
3）防止文字环绕

## 什么是 margin 重叠？

是指两个或多个盒子(可能相邻也可能嵌套)的相邻边界(其间没有任何非空内容、补白、边框)重合在一起而形成一个单一边界,发生在（垂直相邻边界），即上下结果的边界宽度是相邻边界宽度中（最大的值）.
边界的重叠也有例外情况：
1、水平边距永远不会重合。
2、在规范文档中，2 个或以上的块级盒模型相邻的垂直 margin 会重叠。最终的 margin 值计算方法如下：
3、全部都为正值，取最大者；
4、不全是正值，则都取绝对值，然后用正值减去最大值；
5、没有正值，则都取绝对值，然后用 0 减去最大值。

## CSS 中如何使用@规则？

常用规则：

- @charset, 定义样式表使用的字符集。
  `@charset "UTF-8";`
- @import, 告诉 CSS 引擎引入一个外部样式表。(常用)
  `@import '~antd/es/style/themes/default.less';`
- @media，如果满足媒介查询的条件则条件规则组里的规则生效。(常用)
  ```
  @media screen and (max-width: @screen-xs) {
  .container {
    width: 100% !important;
  }
  }
  ```
  
- @font-face，引入外部下载的外部的字体。(常用)
  ```
  @font-face {
  font-family: 'PingFangSC-Regular';
  src: url('./assets/fonts/苹方黑体-准-简.ttf');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  }
  ```
- @keyframes，描述 CSS 动画的中间步骤。(常用)
  ```
  @keyframes slideRightIn {
  0% {
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -webkit-transform: scaleX(0.8);
    transform: scaleX(0.8);
  }
  100% {
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  }
  ```
  不常用：

- @namespace, 告诉 CSS 引擎必须考虑 XML 命名空间。
- @supports, 一般用于检测 css 属性，如果满足给定条件则条件规则组里的规则生效。
  ```
  @supports (display: grid) {
    .container {
     color: red;
  }
  }
  ```
  
- @page，描述打印文档时布局的变化。
- @document，如果文档样式表满足给定条件则条件规则组里的规则生效。 (推延至 CSS Level 4 规范)
- @counter-style — 一个 @counter-style 规则定义了如何把一个计数器的值转化为字符串表示。
- @font-feature-values (plus @swash, @ornaments, @annotation, @stylistic, @styleset and @character-variant)， 允许作者在 font-variant-alternates 中使用通用名称，用于在 OpenType 中以不同方式激活功能。它允许在使用几种字体时简化 CSS。
- @property （实验性），是 CSS Houdini API 的一部分，它允许开发者显式地定义他们的 css 自定义属性, 允许进行属性类型检查、设定默认值以及定义该自定义属性是否可以被继承。
- @layer， 声明了一个 级联层，同一层内的规则将级联在一起，这给予了开发者对层叠机制的更多控制。

## HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理

文档流指的是元素排版布局过程中，元素会默认自动从左往右，从上往下的流式排列方式。并最终窗体自上而下分成一行行，并在每行中从左至右的顺序排放元素。
HTML 文档流的排版规则：html 标签分成了块级元素和行内元素，块级元素在标准文档流中独占一行，多个块级元素垂直排列，行内元素在标准文档流中没有宽高，与其他元素排成一排。
css 定位规则：绝对定位（position:absolute;）脱离标准文档流，以父元素左上角为定位原点、相对定位（position:relative;）不脱离文档流，以自身左上角为定为定位原点、固定定位（position:fixed;）、粘性定位（position:sticky）设置 position:sticky 的元素并不会脱离文档流，粘性定位可以被认为是相对定位(position: relative)和固定定位(position: fixed)的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
雪碧图实现原理：雪碧图就是 css sprite,也叫 css 精灵，是将很多个小图标放到一张背景图上，通过定位的方式获取
雪碧图优点：减少加载网页图片时对服务器的请求次数

## 水平垂直居中的方案、可以实现 6 种以上并对比它们的优缺点

水平垂直对齐包含文字水平垂直对齐，图片/容器水平垂直对齐
文字水平可以用 text-align:center;垂直对齐用：1.vertical-align:middle;2.paddding,3.line-height:1.5;
或者给文字容器设置宽度，设置右浮动，在设置 text-align:center;
图片/容器水平垂直对齐可以用：

1. 绝对定位 position:absolute;left,top,margin-left,margin-top 
2. position:absolute;left,top,transform:translate(-50%,-50%)
3. margin:具体值 auto
4. 父元素的padding
5. 用flex布局
6. display:flex和margin:auto
7. 父元素固定定位，父元素固定定位,left,right,top,bottom 都为0，添加一个：after占位，height:100%;vertical-align:middle;子元素display:inline-block;vertical-align: middle;
[水平垂直对齐](../demo/水平垂直对齐.html)


## CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染

## 熟练使用 CSS 实现常见动画，如渐变、移动、旋转、缩放等等

https://www.cnblogs.com/starof/p/4968769.html

## CSS 浏览器兼容性的写法，了解不同 API 在不同浏览器下的兼容性情况

- -webkit-,针对 safari、chrome 浏览器的内核
- -moz-，针对 firefox 浏览器内核
- -ms-，针对 ie 内核
- -o-，针对 Opera 内核

## 掌握一套完整的响应式布局方案

1.第三方库：normalize.css、bootstrap
2.JavaScript 计算
3.CSS：css3 @media、rem、postcss

## 谈谈 js 的数据类型,typeof,instanceof

基本数据类型：Number，String，Undefined，Null，Boolean
引用数据类型：Object，Array, Function
基本数据类型存储在栈（stack）中，占据空间小，大小固定，属于频繁使用的数据
引用数据类型存储在堆中，占据空间大，大小不固定，如果存储在栈中，将会影响程序运行的性能，引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后，从堆中获取实体。
基本数据类型具有不可变的性质，方法操作无法改变一个基本类型的值
引用数据类型是可以改变的，引用类型的值是同时保存在栈内存和堆内存中的对象
javascript 和其他语言不同，不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间，实际上操作对象的引用，所以引用类型的值是按照引用访问的，准确的说 ，引用数据类型的存储需要内存中的栈区和 堆区共同完成，栈区内存保存变量标识符和指向堆内存 中该对象的指针，也可以说是该对象在堆内存的地址。
在方法体内改变形参,将同时改变实参

```
function fun(param)  //相对于fun方法来说 param是形参
 {
    param[0]=99;
　    return param;
}
 var num=[10];
 var result=fun(num); //相对于fun方法来说 num是实参
 console.log(num[0]);  //99
 console.log(result);//[99]
```

typeof 是一个一元运算，放在一个运算数之前，运算数可以是任意类型。
它返回值是一个字符串，该字符串说明运算数的类型。（typeof 运算符返回一个用来表示表达式的数据类型的字符串。 ）
typeof 其实就是判断参数是什么类型的实例，就一个参数
instanceof  运算符用来测试一个对象在其原型链中是否存在一个构造函数的  prototype  属性。
语法：object instanceof constructor
参数：object（要检测的对象.）constructor（某个构造函数）
描述：instanceof  运算符用来检测  constructor.prototype  是否存在于参数  object  的原型链上。
判断 A 是否是在 B 对象的原型链上
instanceof  运算符用于检测构造函数的  prototype  属性是否出现在某个实例对象的原型链上。
number，string,bool,undefined,null
其他数据类型：引用数据类型：Function,Object, Array,
==的两边的转换，判断 true 或者 false，为什么？

## 什么是闭包,有什么优缺点？

闭包是函数和声明该函数的词法环境的组合。闭包有权访问一个函数作用域中的变量的函数。
闭包的特点：
特性：闭包具有封闭性，外部作用域无法访问闭包内部的数据，如果在闭包内部声明变量，外界是无法访问的，除非闭包向外界暴露接口；
持久性：一般函数被调用完毕之后系统 自动注销函数，对于闭包来说，在外部函数被调用之后闭包结构依然存在
缺点：由于闭包含有自身内部的函数，所以占有内存比较多，占有内存资源，过多的使用闭包会导致内存溢出等。
优点：减少全局变量的声明，减少参数的传递，封闭性。

## 三次握手四次挥手

SYN(synchronous 建立联机) ACK(acknowledgement 确认) PSH(push 传送) FIN(finish 结束) 
SYN 表示建立连接，
FIN 表示关闭连接，
ACK 表示响应，
PSH 表示有 DATA 数据传输，
RST 表示连接重置。
  其中，ACK 是可能与 SYN，FIN 等同时使用的，比如 SYN 和 ACK 可能同时为 1，它表示的就是建立连接之后的响应，
  如果只是单个的一个 SYN，它表示的只是建立连接。
TCP 的几次握手就是通过这样的 ACK 表现出来的。
  但 SYN 与 FIN 是不会同时为 1 的，因为前者表示的是建立连接，而后者表示的是断开连接。
 |握手|握手详情|
|:---|:---|  
|第一次握手|客户端发送一个连接请求消息 SYN=1 到服务端,然后等待服务端响应|
|第二次握手|服务端接收到客户端发送到连接请求 SYN=1 消息之后，知道自己与客户端是可以连接成功的，给客户端应答，发送 ACK=1，SYN=1|
|第三次握手|客户端接收到服务端的应答反馈之后，确定自己和服务端是可以连接的，然后发送 http 请求|
四次挥手
 |挥手|挥手详情|
|:---|:---|
|第一次挥手|首先客户端请求关闭客户端到服务端方向的连接，这时客户端就要发送一个 FIN=1，表示要关闭一个方向的连接|
|第二次挥手|服务端接收到后是需要确认一下的，所以返回了一个 ACK=1|
|第三次挥手|这时只关闭了一个方向，另一个方向也需要关闭，所以服务端也向客户端发了一个 FIN=1 ACK=1|
|第四次挥手|客户端接收到后发送 ACK=1，表示接受成功|

## http 的长轮询，短轮询缓存机制，长连接，短连接

http 长轮询：客户端发起请求，如果服务端的数据没有发生变更，那么就 hold 住请求，直到服务端的数据发生了变更，或者达到了一定的时间就会返回。这样就减少了客户端和服务端不断频繁连接和传递数据的过程，并且不会消耗服务端太多资源。长轮询在传输层本质上还是走的 TCP 协议。
http 长轮询的局限:
浏览器端对统一服务器同时 http 连接有最大限制, 最好同一用户只存在一个长轮询;
服务器端没有数据 hold 住连接时会造成浪费, 容易产生服务器瓶颈;

http 短轮询：就是一遍一遍的查询，不断的发送 http 请求，服务器收到请求不管是否有数据都直接响应 http 请求; 浏览器收到 http 响应隔一段时间再发送同样的 http 请求查询是否有数据;http 短轮询如果频率较高，那么就会导致服务端压力大，如果频率低则实时性低;
两者相同点：
可以看出 http 长轮询和 http 短轮询的都会 hold 一段时间;
两者不同点
间隔发生在服务端还是浏览器端: http 长轮询在服务端会 hold 一段时间, http 短轮询在浏览器端 “hold” 一段时间;
轮询的优势：所有浏览器都支持，使用 XHR 对象和 setTimeout()就能实现。

和短连接和长连接有本质区别

1. 短轮询：重复发送 Http 请求，查询目标事件是否完成，优点：编写简单，缺点：浪费带宽和服务器资源
2. 长轮询：在服务端 hold 住 Http 请求（死循环或者 sleep 等等方式），等到目标时间发生，返回 Http 响应。优点：在无消息的情况下不会频繁的请求，缺点：编写复杂

应用：
长轮询一般用在 web im（网页即时通信工具）, im 实时性要求高, http 长轮询的控制权一直在服务器端, 而数据是在服务器端的, 因此实时性高;
像新浪微薄的 im, 朋友网的 im 以及 webQQ 都是用 http 长轮询实现的;
NodeJS 的异步机制貌似可以很好的处理 http 长轮询导致的服务器瓶颈问题, 这个有待研究.
http 短轮询一般用在实时性要求不高的地方, 比如新浪微薄的未读条数查询就是浏览器端每隔一段时间查询的.

HTTP 协议是基于请求/响应模式的，因此只要服务端给了响应，本次 HTTP 连接就结束了，或者更准确的说，是本次 HTTP 请求就结束了，根本没有长连接这一说。那么自然也就没有短连接这一说了。
之所以说 HTTP 分为长连接和短连接，其实本质上是说的 TCP 连接。**TCP 连接是一个双向的通道，它是可以保持一段时间不关闭的，因此 TCP 连接才有真正的长连接和短连接这一说。**
**http 协议是应用层协议，TCP 是传输协议**，如果 http 请求是一个物品的话，TCP 就是传输物品的一个通道，HTTP 请求和响应都是通过 TCP 连接这个通道进行传输的
长连接：
在 HTTP1.0 和 HTTP1.1 协议中都有对长连接的支持。其中 HTTP1.0 需要在 request 的 header 中设置 Connection:keep-alive;这个需要客户端和服务端同时设置，这样就建立起长连接了，http1.1 默认就是长连接。
为什么我们会用长连接呢，有什么好处？这里就要说到 TCP 连接的复用性，一个网页里面肯定包含 css,js，图片等一系列资源，如果是短连接的话，那么每次 http 请求都要建立一个 TCP 连接，那么打开一个网页基本要建立几个甚至几十个 TCP 连接，这样就会浪费资源，但是如果是长连接，那么多次 http 请求，使用一个 TCP 连接，很显然可以节省 TCP 的连接和断开消耗。
短连接：
浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个 TCP 连接，服务器完成请求处理后立即断开 TCP 连接，服务器不跟踪每个客户也不记录过去的请求。

## 图片

![](../public/images/connect.png)

## http1.0-http2.0 的变化

http1.0 在 1996 年就已经产生，已经能满足 ajax 的需求，但是同时也有很多的缺点，http1.0 最大的问题就是 TCP 连接，TCP 是传输层协议，所以就需要不断的建立连接断开链接，这样使高并发的状态下，带宽的利用率很低，并且有很大的带宽消耗，所以 1999 年就推出了 http1.1
http1.1 相对 1.0 有以下优点：
http1.1 支持长连接。在 http1.1 中默认 Connection:keep-alive，在一个 TCP 链接上可以传送多个 HTTP 链接，减少了建立和断开连接的带宽消耗和延迟。
带宽优化以及网络连接使用。http1.0 中存在很严重的带宽浪费的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
错误通知管理。在 http1.1 中增加了 124 个错误状态相应码，当发生错误的时候能及时通知。
Host 头处理。在 http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此请求消息中 URL 并没有传递主机，但是随着虚拟技术发展，在一台物理服务器上可以存在多个虚拟主机，并且他们都共享一个 IP 地址，HTTP1.1 的请求消息和相应消息都支持 Host 头域，且请求消息中中如果没有 Host 头域会报告一个错误（400 Bad Request）
http1.1 缺点：
发生堵塞，请求到达的服务器速度是不同的， 如果先发的请求到达可能会发生阻塞，这样带宽就降低了；
不支持服务器推送，如果要求做一个服务端数据变动页面立即改变的组件就要用长轮询和短轮询，这样对带宽的影响是很大，

降低延迟：
http 和 https 的区别： 1.网站 URL 中分为两部分：通信协议和域名地址。域名地址很好理解，不同的域名表示网站中不同的页面，而通信协议简单 说就是浏览器和服务器之间沟通的协议。网站中通信协议一般就是 http 和 https 协议。
http 协议是一种明文数据传输的网络协议，一直以来 http 协议都是最主流的网页协议，但是互联网发展到今天，http 协议的明文传输会让用户存在一个非常大的安宣隐患，设想一下，假如一个 http 协议网站上购物，你需要在网页上输入你的银行卡和密码，然后把数据提交到服务器购买，假如这个适合，你的传输数据就会被第三者截获，由于 http 明文数据传输到原因，你的银行卡和密码两会被这个截获人所得到，购物网站还安全吗？
https 协议是 http 协议的升级，在 http 协议的基础上，增加了数据加密就是 SSL（safe socket level）安全套接层，在数据进行传输的过程中对数据进行加密，这样就算数据被第三者截获，由于数据是加密的， 所以个人信息还是安全的，这就是 http 和 https 的区别。 2.如果你足够细心电话，就会发现很多大型互联网网站，如百度，淘宝，腾讯很早就把 http 换成了 https
其他不同点：当你 使用 Chrome 浏览器访问 http 网站的时候，你会发现，浏览器会对 http 网站数据显示‘不安全’的安全警告，提示用户当前所访问的网站可能存在风险。假如你访问的是 https 网站时情况就完全不一样，你回发现浏览器地址栏会变成绿色，企业名称会展示在地址栏中，地址栏上面还会出现一把安全锁图标，这些都会给用户很大的视觉上的安全体验，
3.https 对搜索排名提升，百度谷歌两大搜索引擎都已经明确表示，https 网站将会作为搜索排名 了一个重要的权重指标，也就是说 https 比 http 网站在搜索排名中更有优势。

## 谈谈 websocket 的基本用法，与 http 有什么区别

WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。
在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。
现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每 1 秒），由浏览器对服务器发出 HTTP 请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而 HTTP 请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。
HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。

|                            |          | http     | websocket |
| -------------------------- | :------- | :------- | :-------- |
| 握手                       | 三次握手 | 一次握手 |
| 服务端向客户端主动发送请求 | 不允许   | 允许     |
| 连接数据                   | 单向     | 双向     |

| 事件    | 事件处理程序     | 描述                         |
| :------ | :--------------- | :--------------------------- |
| open    | Socket.onopen    | 连接建立时触发               |
| message | Socker.onmessage | 客户端接收服务端数据时候触发 |
| error   | Socket.onerror   | 通信发生错误时触发           |
| close   | Socket.onclose   | 连接关闭时触发               |

| 方法           | 描述             |
| :------------- | :--------------- |
| Socket.send()  | 使用连接发送数据 |
| Socket.close() | 关闭连接         |

**! WebSocket 协议本质上是一个基于 TCP 的协议。**
为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

```
    const websocket = new WebSocket(`${curHost}/cmc-user/websocket/server/${id}`);
    websocket.onopen = function () {
      // websocket.send(1);
    };
    // 获得消息事件
    websocket.onmessage = function (event) {

    };
    websocket.onerror = function () {

    };
    websocket.onclose = function (event) {
    //websocket.close();
    };
```

WebSocket 是 HTML5 新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。
为什么传统的 HTTP 协议不能做到 WebSocket 实现的功能？这是因为 HTTP 协议是一个请求/响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。换句话说，浏览器不主动请求，服务器是没法主动发数据给浏览器的。

WebSocket 连接必须由浏览器发起，因为请求协议是一个标准的 HTTP 请求

该请求和普通的 HTTP 请求有几点不同：
1. GET 请求的地址不是类似/path/，而是以 ws://开头的地址；
2.  请求头 Upgrade: websocket 和 Connection: Upgrade 表示这个连接将要被转换为 WebSocket 连接；
3. Sec-WebSocket-Key 是用于标识这个连接，并非用于加密数据；
4. Sec-WebSocket-Version 指定了 WebSocket 的协议版本。
![](../public/images/socket_header.png)

为什么 WebSocket 连接可以实现全双工通信而 HTTP 连接不行呢？实际上 HTTP 协议是建立在 TCP 协议之上的，TCP 协议本身就实现了全双工通信，但是 HTTP 协议的请求－应答机制限制了全双工通信。WebSocket 连接建立以后，其实只是简单规定了一下：接下来，咱们通信就不使用 HTTP 协议了，直接互相发数据吧。

## 谈谈原型，原型链

原型：每个函数都有一个prototype属性，**是函数特有的属性**，这个属性叫做原型，因为这个属性的值是个对象，也称为原型对象
- 原型可以放一些属性和方法，共享给实例对象使用
- 原型可以做继承

原型链：每个对象都有__proto__属性，这个属性指向它的原型对象，原型对象也是对象，也有__proto__属性，指向原型对象的原型对象，这样一层层形成的链式结构 称之为原型链，最顶层找不到就返回null。当我们去访问一个对象的属性或者方法的时候，首先在它本身查找，如果它本身没找到，会向它上级的原型上去找，如果还是没找到会向原型的原型上去查找，直到找到为止，这样就形成一条原型链。
![](../public/images/prototypeChain.png)

## 谈谈 js 的继承，继承怎样实现/JS 继承方案
[es6的class和extends实现继承](../src/questions/ClassExtend.js)
[原型链继承](../src/questions/prototype.js)
[构造函数继承](../src/questions/constructor.js)
[组合继承](../src/questions/combinateExtend.js)
[组合继承优化1](../src/questions/combinateExtendOpt1.js)
[组合继承优化2](../src/questions/combinateExtendOpt2.js)
## es6的新特性，es7，es8,es9,es10中新特性
### es6新特性
1. **新增块级作用域**
let 定义变量，他定义的变量被限定在特定范围内才能使用，离开这个范围不能被访问到；
const定义常量，即无法被更改值的变量,避免了变量提升。
2. **提供了定义类的语法糖（class）**
ES6引入了class关键字，使对象的创建，继承更加直观，并且父类方法的调用，实例化，静态方法和构造函数等概念更加形象化。
[es6的class和extends实现继承](../src/questions/ClassExtend.js)
3. **对象和数组新增了扩展运算符**
```
let a = [1,2,3];
let b = [...a];
let a = {
    name : "Jyy",
    msg : {
        age : 29
    }
}
let b = {...a};
```
4. **新增了变量的解构赋值**
分解数据结构，并为变量赋值，从数组或者对象中提取值，按照对应的位置，对变量赋值。
```
var { house, mouse} = $('body').data() // 我们会拿到house和mouse的值的
var {jsonMiddleware} = require('body-parser')
var {username, password} = req.body
```
5. **函数参数允许设置默认值，引入了不定参/rest参数，新增了箭头函数。**
- 设置默认值
```
var link = function(widht=50,height=50,color='red',url='http://www.baidu.com'){...}
```
- 引入不定参
```
function add(a,b,...x){
	return x.reduce((m,n)=>m+n);
}
```
- 箭头函数 
简化函数定义的语法，自动绑定this,不用再let self = this, _this = this或者.bind(this)绑定this，
如果函数只有一行代码可以省略大括号，如果行参只有一个，可以省略小括号（如果没有行参，不能省略小括号）
```
const a = (x,y) => x + y;
const b = x => x;
```

6. **新增模板字符串，多行字符串**

```
//javascript中字符串写法：
var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id；
//ES6中
var name = `Your name is ${first} ${last}`
var url = `http://localhost:3000/api/messages/${id}`
```
```
//javascript中多行字符串写法：
var roadPoem = 'Then took the other, as just as fair,nt'
    + 'And having perhaps the better claimnt'
    + 'Because it was grassy and wanted wear,nt'
    + 'Though as for that the passing therent'
    + 'Had worn them really about the same,nt'
//ES6中多行字符串，直接两个反引号即可
var fourAgreements = `You have the right to be you.
    You can only be you when you do your best.` 
```
7. **新增了一种基本数据类型（Symbol）**
Symbol一种独一无二的值，最大的用法是用来定义对象的唯一属性名
[Symbol](../src/questions/symbol.js)

8. **ES6新增了模块化（import / export）**
为了解决作用域的问题，引进了模块，是一种打包和封装功能的方式。
导出语法，可以导出数据，函数，类：
```
// 导出数据
export var color = 'red'
export let name = 'John'
export const number = 7
//导出函数
export function sum(num1,num2) {
return num1 + num2
}
//导出类
export class RectAngle {

constructor(length,width) {
this.length = length
this.width = width
}
// 或者定义一个模块然后export导出
function mutiply(num1,num2) {
return num1 * num2
}
export mutiply

}
```

导入语法：可用通过关键字import在另一个模块访问
```
import {identifier1,identifier12} from './example.js'
```
使用模块，有如下方法：
1. 在脚本中添加script元素通过src属性添加加载代码地址来加载javascript代码文件；
```
<script type='module' src='./module.js'></script>
//异步加载文件
<script type='module' async src='./module.js'></script>
```
2. 将javascript代码内嵌到<script></script>元素中
```
<script type='module'>
  import {sum} from './example.js'
  let result = sum(1,2)
</script>
```
3. 通过Web Worker或Service Worker的方法加载并执行javascript文件；
let worker = new Worker('./script.js')

9. **ES6新增Map,Set，WeakMap,WeakSet数据结构。**
- Set
Set 本身是一种构造函数，用来生成 Set 数据结构。
Set的存储结构与数组类似，Set中不允许存放重复数据,只有键值没有键名，类似数组，可以用Set去重数组。
可以遍历，自带方法 add新增，相当于 array里的push,has判断集合中是否存在 value,delete存在即删除集合中value,clear清空集合
Set集合没有键名，但是仍然保留了key，当输出键名时，键名和键值是相等的

- WeakSet
  在WeakSet实例中，如果向add()方法中传入非对象参数会导致程序报错，向has()和delete()方法中传入非对象参数则会返回false；
  WeakSet集合不可迭代，不能被用于for-of循环；
  WeakSet集合不暴露任何迭代器，如keys,values方法，无法通过程序本身检测其中内容；
  WeakSet集合不支持forEach,不支持size属性，方法有add ,delete，has, clear方法已废弃
  成员都是对象
  成员都是 弱引用，随时都可以消失，可以用来保存dom节点，不容易造成内存泄漏
 不能遍历，方法有add ,delete, has clear方法已废弃
**WeakSet 与 Set 的区别：**
1. WeakSet只能储存对象引用，不能存放值，而 Set 对象都可以
2. WeakSet对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素

- Map
1. 本身是键值对的集合，类似集合；
2. 可以遍历，方法很多，可以跟多种数据结构进行转换；
3. 属性：constructor：构造函数；size：返回字典中所包含的元素个数；
4. 操作方法：
- set(key, value)：向字典中添加新元素
- get(key)：通过键查找特定的数值并返回
- has(key)：判断字典中是否存在键key
- delete(key)：通过键 key 从字典中移除对应的数据
- clear()：将这个字典中的所有元素删除

5. 遍历方法
- Keys()：将字典中包含的所有键名以迭代器形式返回
- values()：将字典中包含的所有数值以迭代器形式返回
- entries()：返回所有成员的迭代器
- forEach()：遍历字典的所有成员
6. 与其他数据结构的相互转换
[与其他数据结构的相互转换](../src/questions/map_set.js)

- WeakMap
WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
WeakMap 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的key则变成无效的），所以，WeakMap 的 key 是不可枚举的。
直接受对象作为健名（null除外），不接受其他类型的值作为健名
健名所指向的对象，不计入垃圾回收机制
不能遍历，方法同get,set,has,delete

10. **ES6新增Proxy和Reflect**
调用new Proxy()可创建代替其他目标（target）对象的代理，代理可以拦截javascript引擎内部目标的底层对象操作，这些底层操作被拦截后会触发响应特定操作的陷阱函数。
反射API以Reflect对象的形式出现，对象中方法的默认特性与相同的底层操作一致，而代理可以覆写这些操作，每个代理陷阱对应一个命名和参数都相同的Reflect方法:
![](../public/images/proxy.jpeg)
[Proxy和Reflect](../src/questions/proxyAndPeflect.js)

11. **ES6新增了迭代器（Iterator）和 生成器（Generator）**
迭代器的使用可以极大的简化数据操作，于是ES6中添加了这个迭代器的特性，新的数组方法和新的集合类型（例如Set和Map集合）都依赖迭代器实现，这个新特性对于高效的数据处理而言是不可或缺的，for-of循环，展开运算符（...）,甚至异步编程都可以使用迭代器。
1. 迭代器（Iterator）:
迭代器是一种特殊对象，它具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次掉用都返回一个结果对象，结果对象有两个属性，一个是value,表示下一个将要返回的值，另一个是done,它是一个布尔类型的值，当没有更多可返回数据时返回true，迭代器会保存一个内部指针，用来指向当前集合中值的位置，每次调用一次next()方法，都会返回下一个可用的值。
如果在最后一个值返回后再调用next()方法，那么返回的对象中属性done的值为true,属性value则包含迭代器最终返回的值，这个返回的值不是数据集的一部分，他与函数的返回值类似，是函数调用过程中最后一次给调用者传递信息的方法，如果函数没有相关数据则返回undefined
2. 生成器（Generator）:
生成器是一个返回迭代器的函数，通过function关键字后的星号（*）来表示，函数中会用到新的关键字yield,星号可以紧挨着function关键字，也可以在中间添加一个空格，如下：
[生成器generator](../src/questions/iteratorAndgenerator.js)

createIterator()前的*表明它是一个生成器，yield关键字是ES6新增的特性，可以通过它来指定调用迭代器的next()方法时的返回值及返回顺序。生成迭代器后，连续3次调用它的next()方法返回3个不同的值，分别是1，2，3.生成器调用过程和吧其他函数一样，最终返回的是创建好的迭代器。
生成器函数每执行完一条yield语句后就会自动停止执行，直到调用迭代器的next()方法才会继续执行。
**yield关键字只能在生成器函数中使用**，在其他地方使用会导致程序抛出语法错误，即使在生成器内部的函数里使用也是不可以的。
  ```
  function *createIterator(items) {
  items.forEach(function(item){
  yield item // 语法错误，因为在生成器内部函数中使用也是不可以的
  })
  }
  ```
使用yield关键字可以返回任何值或表达式，所以可以通过生成器函数批量的给迭代器添加元素，可以在循环中使用yield关键字：
[循环使用yield关键字](../src/questions/iteratorAndgenerator.js)
生成器函数表达式：也可以通过函数表达式来创建生成器函数，只需要在function关键字和小括号中间添加一个*即可：
[生成器函数表达式](../src/questions/iteratorAndgenerator.js)
不能用箭头函数来创建生成器。
生成器对象的方法，有两种写法,可以通过函数表达式创建生成器，也可以简写方式：只需在函数名前添加一个星号(*)，如下：
```
let o = {
    createIterator: function* (items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i]
        }
    },
    *createIterator1 (items) {

        for (let i = 0; i < items.length; i++) {
            yield items[i]
        }

    }
}
let iterator = o.createIterator([1, 2, 3])
let iterator2 = o.createIterator([4, 5, 6])
```
可迭代对象和for-of循环
可迭代对象具有Symbol.iterator属性，是一种与迭代器密切相关的对象，Symbol.iterator通过制定的函数可以返回一个作用于附属对象的迭代器。ES6中所有集合（数组，Map和Set集合）和字符串都是可迭代对象 ，这些对象都有默认的迭代器，for-of循环需要用到可迭代对象的这些功能。

12. **数组新增了一些API，如isArray / Array.from / for of 方法；**
- Object.is()
经常用来判断是否相等的运算符==或===，开发者更喜欢后者，但是在javascript引起中，+0和-0标示为两个完全不同的实体，如果用全等运算符（===）对两者进行比较，得到的结果却是两者相等，同样NaN === NaN 的值返回false,需要使用isNaN()方法才可以正确检测NaN,所以ES6引入Object.is()方法弥补===的缺陷。
[Object.is()用法](../src/questions/test.js)
- Object.setPrototypeOf()
ES5添加了Object.getPrototypeOf()方法来返回任意指定对象的原型，但是任然缺少对象在实例化之后改变原型的方法，所以ES6新添加了Object.setPrototypeOf(),通过这一方法可以任意改变指定对象的原型，它接受两个参数
[Object.setPrototypeOf()](../src/questions/test.js)
- Array.of()
Array.of()方法创建数组，只需要传入你希望数组中包含的值就行，无论传入单个数据还是多个数据，length长度都和传入数据的个数相等
对比使用new Array创建数组，如果Array中传入单个number的数字,那么数组length长度就是此数字的值； 如果 Array中传入单个string的数字，那么数组length长度就是1；如果Array传入多个值，那么数组的length就是多个值的个数。
[Array.of()用法](../src/questions/test.js)
- Array.from()
Array.from方法可以接受迭代对象或者类数组对象作为第一个参数，最终返回一个数组
```
function makeArray(arrayLike) {
Array.prototype.slice.call(arrayLike)
}
等价于ES6新增家的方法 Array.from()
```
- find()方法和findIndex()方法
二者都接受两个参数：一个回调函数，另一个可选参数，用于指定回调函数中this的值，两者唯一的区别是：find()方法返回查找到的值，findIndex()返回查找到的值的索引
- fill()
fill()方法用于指定值填充一个至多组元素
1. 只填一个参数(1)，代表数据全部填充为1
2. 只填充两个值(0,2)，代表从索引2开发填充0，一直到结尾
3. 填充三个值(0,1,3)，索引1开始，到索引3结束用0填充
[fill()用法](../src/questions/test.js)
- for of 值遍历
我们都知道for in 不用于遍历数组，类数组或者对象，ES6中引入的for of循环功能相似，不同的是每次循环它提供的不是序号，而是值
```
var someArray = [ "a", "b", "c" ];
for (v of someArray) {
    console.log(v);//输出 a,b,c
}
```
13. Promise
[promise](https://github.com/xiakeweian/promise)

### es7新特性
ES7在ES6的基础上添加三项内容：求幂运算符（**）、Array.prototype.includes()方法
1. Array includes
在ES7之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。
在ES7之后，我们可以通过includes来判断一个数组中是否包含一个指定的元素，根据情况，如果包含则返回 true，否则返回false
```
const arr = [10, 20, 30];
console.log(arr.includes(30)); // true
console.log(arr.includes(40)); // false
```
2. 求幂运算符
在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。
在ES7之后，增加了 ** 运算符，可以对数字来计算乘方。
```
const result1 = Math.pow(2, 2);
const result2 = 3 ** 2;

console.log(result1); // 4
console.log(result2); // 9
```

### es8新特性
1. 新增字符串填充
ES8新增padStart和 padEnd方法，分别对字符串的首尾进行填充，第一个参数, 填充到多少位; 第二个参数, 用什么来填充
```
const message = "Hello";
// 在开头用a填充到10位
console.log(message.padStart(10, "a")); // aaaaaHello
// 在结尾用b填充到10位
console.log(message.padEnd(10, "b")); // Hellobbbbb

```
2. 新增values和entries函数
- Object.values
之前我们可以通过 Object.keys 获取一个对象所有的key,Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值.
```
const obj = {
  name: "kaisa",
  age: 18,
  height: 1.88,
};
console.log(Object.values(obj)); // ['kaisa', 18, 1.88]
```
- Object.entries
Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值对数组。
可以针对对象操作；
```
const obj = {
  name: "why",
  age: 18,
  height: 1.88,
};
console.log(Object.entries(obj)); // [['name', 'why'], ['age', 18], ['height', 1.88]]
```
也可以针对数组、字符串进行操作, 数组和字符串会将索引作为key(了解)
```
const arr = [10, 20];
const str = "ab";
console.log(Object.entries(arr)); // [['0', 10], ['1', 20]]
console.log(Object.entries(str)); // [['0', 'a'], ['1', 'b']]
```

3. Object.getOwnPropertyDescriptors()
Object.getOwnPropertyDescriptors:获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象
4. Async/await 
用更加清晰的语义解决js异步代码，使得异步代码看起来像同步代码。  
```
async fetchData(query) =>{  
  try {      
    const response = await axios.get(`/query?query=${query}`); 
    const data = response.data;     
    return data;    
 }catch (error)    {      
   console.log(error)   
 }} 
fetchData(query).then(data =>{    
     this.processfetchedData(data)
})
```
5. 尾部逗号添加
在ES8中，我们允许在函数定义和调用时多加一个逗号：
```
function foo(x, y, ) {
  console.log(x, y);
}
foo(2, 4, )
```
### es9新特性
1. async/await,异步迭代器
在async/await的某些时刻，我们可能尝试在同步循环中调用异步函数。例如下面两段代码：
```
async function process(array) {
  for (let i of array) {
    await doSomething(i);
  }
}
async function process(array) {
  array.forEach(async i => {
    await doSomething(i);
  });
}
```
这段代码中，循环本身依旧保持同步，并在在内部异步函数之前全部调用完成。

ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了next()方法返回一个Promise。因此await可以和for...of循环一起使用，以串行的方式运行异步操作。例如：
```
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}
```
2. Object Rest&Spread操作符和对象构建
ES6 引入了 Rest参数 和 扩展运算符 , ...仅用于数组, ES9新增了对象rest, 和之前数组的剩余参数用法相似
Rest用在解构中
```
const obj = {foo: 1, bar: 2, baz: 3};
const {foo, ...rest} = obj;
```
Spread主要被用来展开对象
```
const obj = {foo: 1, bar: 2, baz: 3};
const obj2 = {...obj,foo:true}
```
建立和拷贝对象
使用Object.assign和Spread操作符能够很方便的进行对象的拷贝
```
const clone1 = {...obj}
const clone2 = Object.assign({},obj)
```
```
function restParam(p1,p2,...p3){
console.log(p1,p2)
console.log(p3)
}
restParam(1,2,3,4,5)
// 1,2
// 3,4,5

```
3. Promise.prototype.finally()
在之前的Promise的调用链要么调用成功返回 .then() 方法, 要么调用失败返回 .catch() 方法, 在某些情况下, 你想要在无论是成功还是失败, 都运行同样的代码, 不如清除, 删除对话, 关闭数据连接等
Promise.finally()允许你指定最终的逻辑
```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
4. 新的正则表达式,正则表达式命名捕获组
JS正则表达式可以返回一个匹配的对象, 一个包含匹配字符串的类数组, 比如: 以 YYYY-MM-DD的格式解析日期
???

### es10新特性
1. Array.prototype.flat()
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
例如一个数组有很多层, 第一层数组中还有第二层, 第三层, …数组
```
const arr = [10, 20, [30, 40], [50, [60]], [70, [80, [90]]]];

// 将数组里面第一层数组平坦化
const newArr1 = arr.flat(1);
console.log(newArr1); // [10, 20, 30, 40, 50, [60], 70, [80, [90]]
// 将数组里面第三层数组平坦化
const newArr2 = arr.flat(3);
console.log(newArr2); // [10, 20, 30, 40, 50, 60, 70, 80, 90]
```
2. Array.prototype.flatMap()
flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
注意一：flatMap是先进行map操作，再做flat的操作；

注意二：flatMap中的flat相当于深度为1；
```
const message = ["Hello World", "Hello coder", "你好 中国"];

const newMessage = message.flatMap(item => item.split(" "));
console.log(newMessage); // ['Hello', 'World', 'Hello', 'coder', '你好', '中国']
```
3. Object.fromEntries()
在前面，我们可以通过 Object.entries 将一个对象转换成 entries (key, value键值对数组)
那么如果我们有一个entries了，如何将其转换成对象呢？
ES10提供了 Object.formEntries来完成转换：
```
var obj = {
  name: "kaisa",
  age: 18,
  height: 1.88,
};

const entries = Object.entries(obj);
console.log(entries); // [['name', 'kaisa'], ['age', 18], ['height', 1.88]]

const info = Object.fromEntries(entries);
console.log(info); // {name: 'kaisa', age: 18, height: 1.88}

```

4. String.trimStart & String.trimEnd
去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢？
ES10中给我们提供了trimStart和trimEnd；
```
const message = "        HelloWorld      ";

// 去除首尾空格
console.log(message.trim());
// 去除开头空格
console.log(message.trimStart());
// 去除结尾空格
console.log(message.trimEnd());
```
5. String.prototype.matchAll
6. try catch
7. Symbol.prototype.description
创建Symbol时可以传入一个描述
8. Function.prototype.toString()
ES10对函数实例的toString()方法作了修改，以前toString()方法返回函数代码本身，以前会省略注释和空格，现在修改之后，返回内容和源码一模一样
### ES11新特性
1. BigInt
在早期的JavaScript中，我们不能正确的表示过大的数字：

大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。
```
// 最大安全整数
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// 大于MAX_SAFE_INTEGER的一些数值, 可能正确表示, 可能不正确表示
const num1 = 9007199254740991 + 1;
console.log(num1); // 9007199254740992
const num2 = 9007199254740991 + 2;
console.log(num2); // 9007199254740992
```
那么ES11中，引入了新的数据类型BigInt，用于表示大的整数：

BigInt的表示方法是在数值的后面加上n, 这样表示的数字一定是正确的
```
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
const num1 = 9007199254740991n + 1n;
console.log(num1); // 9007199254740992n
const num2 = 9007199254740991n + 2n;
console.log(num2); // 9007199254740993n
```
2. 空值合并操作符
- 相对于 || 更加严谨
```
const foo = 0;
const result1 = foo || "默认值";
const result2 = foo ?? "默认值";
console.log(result1); // 默认值
console.log(result2); // 0
```
- 可选链
可选链也是ES11中新增一个特性，主要作用是让我们的代码在进行null和undefined判断时更加清晰和简洁
普通写法：
```
const obj = {
  name: "kaisa",
  friend: {
    name: "coder",
    running() {
      console.log("running~");
    },
  },
};

// 确定方法存在的时候再调用 避免报错
if (obj.friend && obj.friend.running) {
  obj.friend.running();
}
```
可选链的写法: 使用 ?. 进行判断
```
const obj = {
  name: "kaisa",
  friend: {
    name: "coder",
    running() {
      console.log("running~");
    },
  },
};

obj?.friend?.running?.();
```

## 谈谈闭包
闭包只是函数和声明该函数的词法环境的组合，指有权访问作用域中变量的函数。
闭包具有封闭性：外部作用域无法访问闭包内部的数据，假如在闭包内部定义了一个变量，在外部是无法访问到的，除非闭包向外界暴露接口。
闭包具有持久性：一般函数在被调用之后系统会自动注销该函数，但是闭包因为有其内部的函数，会占用一定内存，即使调用之后结构依然存在，正是因为占用一定内存，在项目中如果过多的使用闭包会导致内存溢出，所以在使用闭包的时候要谨慎使用，这也是闭包的缺点。
闭包优点：减少全局变量的定义和减少参数的传递。

## 什么是深拷贝，什么是浅拷贝？
浅拷贝：指基于一个对象创建一个新的对象，这份新的对象完整精确的拷贝了原对象，如果拷贝的是基本类型，那么拷贝的就是基本类型的值，如果拷贝的是引用类型，那么拷贝的就是内存地址，如果对新的对象进行了修改，那么原对象也将发生改变。
深拷贝：指从内存中完整的拷贝一份对象出来，并在内存中为其分配一个新的区域来存放，如果修改这个对象的属性，不会影响到原来的对象。

## 手写深拷贝
首先判断属于什么类型，根据不同类型分别写出不同的处理方法
[深拷贝](../src/questions/deepCopy.js)


## 节流和防抖
节流和防抖都是为了解决频繁触发某个事件的情况造成的性能消耗。
防抖：就是在触发后的一段时间内只执行最后一次，例如：在进行搜索的时候，当用户停止输入后调用方法，节约请求资源。
节流：就是在频繁触发某个事件的情况下，单位时间之内只执行一次，类似打游戏的时候长按某个按键，动作是有规律的在间隔时间触发一次。
### 应用场景：
debounce
search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
拖动元素移动的时候
文本编辑器实时保存
throttle
快速点击
鼠标不断点击触发，mousedown(单位时间内只触发一次)
监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
### 手写节流：Throttle
```
var throttle = function (fn, interval) {
  var last = +new Date() // 记录前一次时间
 var timerId = null
  return function () {// 包装完后返回 闭包函数
 
    var current = +new Date()
    var args = [].slice.call(arguments, 0)
    var context = this
    clearTimeout(timerId) // 首先清除定时器
    // current 与last 间隔大于interval 执行一次fn
    // 在一个周期内 last相对固定 current一直再增加
    // 这里可以保证调用很密集的情况下 current和last 必须是相隔interval 才会调用fn
    if (current - last >= interval) {
      fn.apply(context, args)
      last = current
    } else {
      // 如果没有大于间隔 添加定时器
      // 这可以保证 即使后面没有再次触发 fn也会在规定的interval后被调用
      timerId = setTimeout(function() {
        fn.apply(context, args)
        last = current
      }, interval)
    }
  }
}
```
### 手写防抖：Debounce
```
var debounce = function (fn, interval) {
  // debounce中的interval 和 throttle中的 interval含义不一样
  // 在debounce中可以可以把interval理解成 用户停止了某个连续的操作后 再推迟interval执行fn
  var timerId = null
  return function () {
    if(timerId !==null) {
   var args = [].slice.call(arguments, 0)
    var context = this
    // 如果调用很密集 可以保证fn永远不会触发 必须等到有前后两个调用的间隔大于等于interval fn才能被执行
    // 如果调用很少 fn会在interval结束后被执行
    clearTimeout(timerId)
    }
    timerId = setTimeout(function() {
      fn.apply(context, args)
    }, interval)
    }
 
  
}
```
## 谈谈回流和重绘
### 首先了解浏览器渲染过程：
1. 解析获取到的HTML生成DOM树，解析CSS，生产CSSOM树；
2. 将DOM树和CSS树结合，生产渲染树（render tree）;
3. 根据生成的渲染树，进行回流，计算得到节点的几何信息（位置和大小）；
4. 根据渲染树以及得到节点的集合信息，将节点几何信息转换为屏幕上的绝对像素（像素，背景色，外观等）
5. display将像素发给GPU，展示在页面上

### 概念
回流：通过构建渲染树，我们将可见的节点和对应的css样式结合起来，然后计算他们在视口内确切的几何信息（位置和大小），这个计算过程就叫做回流。
重绘：通过构建渲染树，我们知道那些节点是可见的，以及可见节点的样式和具体的集合信息（位置和大小），然后将每个节点都转换为屏幕上的绝对像素，这个阶段就是重绘；
当页面布局和几何信息发生变化的时候，就需要回流。比如以下情况：
- 添加或删除可见的DOM元素；
- 元素的位置发生变化；
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）；
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代；
- 页面一开始渲染的时候（这肯定避免不了）；
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）。
以下情况会发生重绘：
在渲染树中一些元素更新属性，这些属性只影响元素等外观，风格，不影响布局，比如背景颜色的改变，字色，样式发生改变的时候只会影响重绘。
### 以下情况会引起回流和重绘：
1. 页面初始渲染；
2. 改变字体，改变元素尺寸（宽、高、内外边距、边框，改变元素位置等
    各种情况：
             设置 style 属性的值 
             激活 CSS 伪类，比如 :hover
             操作 class 属性
            css3的某些属性
（注意：如果修改属性不影响布局则不会发生重排）
3. 改变元素内容（文本或图片等或比如用户在input框中输入文字）
4. 添加/删除可见DOM元素（注意：如果是删除本身就display:none的元素不会发生重排；visibility:hidden的元素显示或隐藏不影响重绘）
5. fixed定位的元素,在拖动滚动条的时候会一直回流；
6. 调整窗口大小（Resizing the window）；
7. 计算 offsetWidth 和 offsetHeight 属性；
**注意：回流一定会触发重绘，而重绘不一定会回流**，比如：visibility:hidden的时候会触发重绘，但是不会触发回流
### 如何减少回流和重绘？
频繁的回流重绘会导致额外的计算消耗，代价比较昂贵，因此最好就是可以减少它的发生次数。为了减少发生次数，我们可以合并多次对DOM和样式的修改，然后一次处理掉，那么如何减少回流和重绘？
步骤：
1. 使元素脱离文档流；
2. 对其进行修改；
3. 再将元素带回到文档中。
有三种方式可以让DOM脱离文档流：
1. 隐藏元素，应用修改，重新显示
这个会在展示和隐藏节点的时候，产生两次重绘
```
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
        li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}
const ul = document.getElementById('list');
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.display = 'block';
```
2. 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。
```
const ul = document.getElementById('list');
const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
ul.appendChild(fragment);
```
3. 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。
```
const ul = document.getElementById('list');
const clone = ul.cloneNode(true);
appendDataToElement(clone, data);
ul.parentNode.replaceChild(clone, ul);
```

或者从根源上减少回流和重绘：
1. 使用transform替代top,left；
2. 使用visibility替换display:none,因为前者只会引起重绘，后者会引发回流（改变了布局）
3. 避免使用table布局，可能很小的一个改动会造成整个table的重新布局；
4. 避免使用css表达式，可能会引发回流；
5. 尽可能在DOM树的最末端改变class，回流是不可避免的，但可以减少其影响。尽可能在DOM树的最末端改变class，可以限制了回流的范围。
6. 将动画效果应用到position属性为absolute或者fixed的元素上，避免影响其他元素的布局，这样只是一个重绘，而不是回流。同时，控制动画速度可以选择requestAnimationFrame。
常见的重绘元素：color,text-decoration,outline-color,outline-width
常见回流元素：width,height,padding,margin,display,position,overflow,font-family,clear,offsetTop/offsetLeft/offsetWidth/offsetHeight

## react中禁止onCopy, onPaste, onCut怎么用？
```
 onPaste={e => {

       e.preventDefault(); //关键点要加上这句
       Message.error('禁止粘贴！');
       return false;
 }}
 onCut={e => {
        e.preventDefault();
        Message.error('禁止剪切！');
        return false;
 }}
 onCopy={e => {
         e.preventDefault();
         Message.error('禁止复制！');
         return false;
 }}
```
```
<style>
    body {
      position: relative;
    }

    .test {
      moz-user-select: -moz-none;

      -moz-user-select: none;

      -o-user-select: none;

      -khtml-user-select: none;

      -webkit-user-select: none;

      -ms-user-select: none;

      user-select: none;
    }

    .mark {
      position: fixed !important;

      left: 0 !important;

      top: 0 !important;

      width: 100% !important;

      height: 100% !important;

      z-index: 998 !important;

      pointer-events: none !important;

    }

    .test3 {
      position: absolute;
      left: 0;
      top: 100px;
    }
  </style>
  <body>
  <div class='test'> 使用moz-user-select，不能选中copy </div>
  <div class='test2' oncopy='return false;'>添加oncopy='return false;'可以选中但是不能copy</div>
  <div class="mark">
    <div class='test3'>在当前div盒子外层套一个蒙层，不能copy</div>
  </div>
  <div class="test4" onselectstart="return false;">添加事件不能选中 onselectstart="return false;"</div>
  <div class="test5"> 可以复制</div>

</body>
```
## apply和call的区别
apply和call主要区别是传参数的方式不一样，apply接收的是一个数组，call接收的是数组中的每一项的参数列表，什么时候用apply和call,主要看参数给的是什么形式.
他俩的共同点：劫持传入对象的方法，继承传入对象的属性
## createHashHistory和createBrowserHistory()区别
|方式| 路径|是否需要服务端支持|备注|
|--|--|--|--|
|createBrowserHistory| http://localhost:8084/list |需要|使用browserHistory时，从 / 到 /user/liuna, 浏览器会向server发送request，所以server要做特殊请求，比如用的 express 的话，你需要 handle 所有的路由 app.get('*', (req, res) => { ... })，使用了 nginx 的话，nginx也要做相应的配置。|
|createHashHistory |http://localhost:8084/#/list|不需要|使用hashHistory时，因为有 # 的存在，浏览器不会发送request,react-router 自己根据 url 去 render 相应的模块。|

## browserHistory 和 hashHistory 的优缺点比较
## 什么是跨域





