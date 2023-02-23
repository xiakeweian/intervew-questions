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
  ````@media screen and (max-width: @screen-xs) {
  .container {
    width: 100% !important;
  }
  }```
  ````
- @font-face，引入外部下载的外部的字体。(常用)
  ````@font-face {
  font-family: 'PingFangSC-Regular';
  src: url('./assets/fonts/苹方黑体-准-简.ttf');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  }```
  ````
- @keyframes，描述 CSS 动画的中间步骤。(常用)
  `````@keyframes slideRightIn {
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
  }````
  不常用：
  `````
- @namespace, 告诉 CSS 引擎必须考虑 XML 命名空间。
- @supports, 一般用于检测 css 属性，如果满足给定条件则条件规则组里的规则生效。
  ````@supports (display: grid) {
    .container {
     color: red;
  }
  }```
  ````
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
图片/容器水平垂直对齐可以用：绝对定位 position:absolute;left,top,margin-left,margin-top 或者 position:absolute;left,top,transform:translate(-50%,-50%),margin:具体值 auto,父元素的 padding

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

## 谈谈 js 的继承/继承怎样实现/JS 继承方案，谈谈原型链

## es6 的新特性，es7，es8 中新特性

es6
