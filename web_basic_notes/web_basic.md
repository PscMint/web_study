## css-基础

### 布局

#### 流式布局

文档流是在默认情况下浏览器所遵循的页面布局方式，文档中的元素按顺序依次排列，通过它们的类型和CSS属性决定它们在页面上的位置和大小。

- 块级元素在页面上换行，默认宽度为100%，默认没有高度

- 内联元素不换行，只占据它所包含内容的大小

注：可以通过设置元素的display属性来决定元素是块级内联或是其他

#### 浮动

浮动使得元素脱离文档流，而浮动到父元素的左边或右边。

块级元素会忽略的浮动元素，内联元素会避开浮动元素。

#### 定位

- absolute 绝对定位，以设置了position非默认值的最近父元素的左上角为偏移对象，可以设定上下左右的偏移长度
- relative 相对定位，如果在自己上面设定偏移，就是相对自己本身来偏移
- fixed 相对浏览器的视窗左上角进行偏移
- static 是定位属性position的默认值
- ==sticky==

### 弹性盒子Flex

1. 在父容器中首先声明是弹性盒子`display:flex`，之后可以声明关于盒子内元素布局的一些属性
   - justify-content 控制元素横轴布局：space-between|space-around
   - align-items 控制元素纵轴布局（1条纵轴）：center
   - align-content控制纵轴之间的布局方式（2及2以上纵轴）：center|space-between
   - flex-direction 控制元素排列的方向：row|column
   - flex-wrap 控制元素是否换行：wrap-reserve（向上换行）|wrap（向下换行）
   
2. 盒子内部的子元素的设置
   - order 控制元素在布局中出现的顺序，order数值越小，越靠前排列
   
   - flex-grow 元素所占的宽度按比例排布；grow值为0这个盒子的宽度不会发生改变。
   
     一种常见情况：如果某个元素有设定宽度（basis有值，shrink和grow默认为0），则剩余的宽度给其他元素（它们设定了grow的值）按比例分配。
   
   - flex-shrink 在宽度不够的情况下（盒子累加宽度>容器宽度），将按比例缩小盒子的宽度。如果将flex-shrink值为0这个盒子的宽度不会发生改变。
   
   - `flex-basis`是CSS Flexbox布局属性之一，它用于设置flex项目在主轴方向上的初始尺寸，也就是flex项目的基础尺寸。它可以设置一个长度值（如px、em、rem等），也可以使用关键字auto、content、或者一个百分比值。具体来说，`flex-basis`决定了一个flex项目的默认大小，它的作用类似于`width`属性，但是不同的是，`flex-basis`属性只影响flex项目的初始尺寸，而不影响它们的最终尺寸。
   
     当`flex-basis`被设置为一个固定长度值时，它会强制指定flex项目的宽度。例如，当`flex-basis: 100px`时，那么该flex项目的宽度将被固定为100px。
   
     当`flex-basis`被设置为auto时，flex项目的基础尺寸将根据其内容自动计算得出。
   
     当`flex-basis`被设置为content时，flex项目的基础尺寸将根据其内容和内边距自动计算得出。
   
     当`flex-basis`被设置为百分比时，flex项目的基础尺寸将根据flex容器的主轴长度计算得出。例如，当`flex-basis: 50%`时，该flex项目的基础尺寸将为flex容器主轴长度的50%。
   
     需要注意的是，`flex-basis`属性只在flex项目未被放大或缩小前生效。==如果`flex-grow`或`flex-shrink`属性被设置为非0值，那么它们会根据比例进行放大或缩小，而不再受`flex-basis`属性的限制。==因此，`flex-basis`属性的作用类似于`width`属性，但并不完全相同。

### BFC

更正：关于margin塌陷，使用bfc包裹垂直相邻的两个元素之一，可以避免margin塌陷

<img src=".\ref_img\bfc.jpg" alt="lifecycle" style="zoom: 67%;" />

【注意】clearfix是加载浮动元素的父元素上面，浮动元素本身脱离文档流，不好计算清除浮动的位置

<img src=".\ref_img\clear.jpg" alt="clear" style="zoom: 67%;" />

### 重排重绘

<img src=".\ref_img\浏览器渲染.jpg" alt="浏览器渲染" style="zoom: 67%;" />

### css优化

1. 压缩CSS文件，可以使用工具如CSSMin和CSSNano来压缩CSS文件，减少文件大小。
2. 使用外部CSS文件，将CSS代码放在外部文件中，可以使HTML文档更简洁，同时也方便维护。
3. 避免使用@import，它会导致页面加载时间延长。
4. 选择器优化，尽可能减少选择器的层级和数量，以提高页面渲染速度。
5. 使用缓存，可以使用浏览器缓存来减少页面加载时间，例如设置Expires和Cache-Control响应头。
6. 使用CSS动画代替JavaScript动画，可以提高性能，因为CSS动画是通过GPU加速来实现的。
7. 使用字体图标代替图片，可以减少网络请求和文件大小。

面试的时候可以说

1. css精灵图
2. css动画替代js动画
3. 批量操作dom、减少触发同步布局事件来减少页面重排次数
4. 避免使用@import
5. 尽量减少选择器的层级和数量

### 选择器

#### 常见的选择器

| 选择器         | 描述                                          | 示例                                                        |
| -------------- | --------------------------------------------- | ----------------------------------------------------------- |
| 标签选择器     | 通过HTML元素标签名选择元素                    | `p`选择所有段落元素                                         |
| 类选择器       | 通过类名选择元素                              | `.example`选择所有带有`example`类的元素                     |
| ID选择器       | 通过元素ID选择元素                            | `#main`选择ID为`main`的元素                                 |
| 子元素选择器   | 选择指定元素的直接子元素                      | `ul > li`选择所有`ul`元素下的直接子元素`li`                 |
| 后代选择器     | 选择指定元素的后代元素                        | `ul li`选择所有`ul`元素下的后代`li`                         |
| 相邻兄弟选择器 | 选择指定元素的相邻兄弟元素                    | `h1 + p`选择紧随在`h1`元素后的`p`元素                       |
| 通用选择器     | 选择所有元素                                  | `*`选择页面中所有元素                                       |
| 属性选择器     | 根据元素的属性选择元素                        | `input[type="text"]`选择所有`type`属性为`text`的`input`元素 |
| 伪类选择器     | 根据元素的状态选择元素                        | `:hover`选择鼠标悬停在元素上的元素                          |
| 伪元素选择器   | 选取元素的特定部分，如`::before`和`::after`等 | `p::before`选择`p`元素内容前插入的伪元素                    |

### 优先级计算规则

- 打分规则：内联**1000**-id**100**-类选择器&属性选择器&伪类选择器**10**-标签选择器&伪元素选择器**1**，得分高的选择器被应用
- 伪类选择器等同于类选择器，伪元素选择器等同于标签选择器。伪类就是展现了元素的状态，伪元素是对应元素的局部。
- important！是用来覆盖内联样式的
- 相同分数的情况下，后面的样式规则覆盖前面的样式规则

### 盒模型

- 标准盒模型：设定的宽高是content的宽高（对于盒子的不同位置精确设置，互不影响，不需要通过宽高设置反推content、padding、border的大小）
- IE盒模型：设定的宽高是content+padding+border一起的长度（IE6这样的老古董才默认使用IE盒模型）
- 修改盒模型的方法：`box-sizing:content-box(标准盒模型)|border-box（ie盒模型）`

### 单位、百分比

#### rem em

它们都是相对的长度单位，因此可以用来实现响应式布局

- `em` 是相对于父元素的字体大小计算的。例如，如果父元素的字体大小为 `16px`，那么 `1em` 等于 `16px`。
- `rem` 是相对于根元素（即 `<html>` 元素）的字体大小计算的。例如，如果根元素的字体大小为 `16px`，那么 `1rem` 等于 `16px`。
- 使用`em`作为宽度单位时，它是相对于当前元素的字体大小来计算的，而不是相对于父元素的字体大小。
- 使用`rem`作为宽度单位时，它是相对于根元素的字体大小来计算的，而不是相对于当前元素的字体大小。根元素是指文档的根元素`<html>`。

#### vw vh

同样也是适用于响应式布局，使得网页在不同尺寸的屏幕上可以适应

- vw: 视口宽度的1/100，例如1vw等于视口宽度的1%。
- vh: 视口高度的1/100，例如1vh等于视口高度的1%。

#### 百分比

在子元素中设置百分比，都是参考父元素的大小，这同样是为了页面的响应式布局，具体来说：

1. 如果将元素的字体大小设置为百分比，那么它将是元素父元素字体大小的百分比。
2. 如果使用百分比作为宽度值，那么它将是父值宽度的百分比。

#### 一些比较简单的使用建议

1. 宽度和高度的设置

- 如果父元素的宽度和高度已知，可以使用像素值或其他固定单位来设置子元素的宽度和高度。
- 如果父元素的宽度和高度未知，或者需要实现响应式布局，可以使用百分比或其他相对单位（如vw、vh、em等）来设置子元素的宽度和高度。这样可以让子元素根据父元素的尺寸进行相应的调整，适应不同的设备和屏幕尺寸。

2. 字体大小的设置

- 如果需要确保字体大小在不同设备上显示相同的物理大小，可以使用绝对单位（如pt或px）来设置字体大小。
- 如果需要实现响应式布局，可以使用相对单位（如em、rem或vw等）或百分比来设置字体大小。这样可以让字体大小根据其容器的尺寸进行相应的调整，适应不同设备和屏幕尺寸。

### css3新特性

#### transition过渡

- 本质：是一个css属性，用来实现在一段时间内平滑地改变元素的css属性值。

- 常见的应用场合：元素设置了动画、对元素使用了伪类选择器等。在上述的场景下，都发生了元素css属性的变化，而transition是这种变化更加自然。

- 用法

  transition: 

  transition-property（需要过渡的css属性） |

  transition-duration （过渡时间）|

  transition-timing-function（运动曲线）| 

  transition-delay（开始时间）;

- 运动曲线

  `transition-timing-function` 属性用于指定过渡的速度曲线，它可以由`cubic-bezier` 函数来自定义一个三次贝塞尔曲线，或者使用阶跃函数（如 `steps()`）来定义一个阶梯状的速度曲线。

  此外，linear、ease、ease-in、ease-out、ease-in-out是一些常用的贝塞尔曲线，具有以下的效果：

  - `linear`: 过渡效果以相同速度开始至结束。
  - `ease`: 默认值。过渡效果以低速开始，然后加快，在结束前变慢。
  - `ease-in`: 过渡效果以低速开始。
  - `ease-out`: 过渡效果以低速结束。
  - `ease-in-out`: 过渡效果以低速开始和结束。

#### 阴影

##### box-shadow

【本质】

是对于元素阴影效果进行设置。参考现实中的阴影，它的初始影子类似于正向投影和元素本身大小相同，之后它的位置和清晰程度会因为“光源”的投射角度和方式有所不同，因而引申出对于它下列属性的设置，目的是为了模拟出不同的投射效果。

【掌握基本写法】

`box-shadow: 10px 5px 5px 0px red;`分别是X轴偏移量、Y轴偏移量、模糊半径、扩散半径和颜色，如果有一个方向上没有，请写上0。

每一个位置上的参数含义：

1. x轴位移

2. y轴位移

- 注意这个位移并不会改变尺寸，阴影和图形尺寸相等
- 当位移值为正数，向右，向下偏移；当位移值为负数，向左，向上偏移

3. 模糊半径，在四个方向上同时将边缘模糊，同时也会增加尺寸，它只能为正值
4. 扩张半径，在四个方向上同时扩大(当它为正值)，或者缩小(当它为负值)阴影的尺寸
5. 阴影的颜色

恢复记忆：[box-shadow ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

【box-shadow技巧】

1. 盒子可以增加不止一个投影，以实现双侧投影的效果，用`,`分隔即可
2. 使用inset属性可以让阴影落在盒子内部

##### text-shadow

没有扩散半径，其他和box-shadow基本一致

```css
/* offset-x | offset-y | blur-radius | color */
p{
    text-shadow: 1px 1px 2px black;
}

```

后期学习：渐变、动画、变换等

### 媒体查询

1. 本质作用：`@media`可以选中媒体类型，以此来实现针对这特定的媒体和它的不同状态，应用需要的样式

2. 媒体类型：screen（默认的媒体类型）|print|speech

3. 常用场景：使用媒体查询完成响应式布局

```css
/*页面大于900px应用*/
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}
```

4. 框架中的响应式布局实现（element-ui）

通过sm、md、lg等属性以及span的值可以映射到element-ui中预先设定好的类，当屏幕出于特定大小的时候，相应的类会动态地添加到元素上

而这些预先设定好的类，是经过了媒体查询的，因此可以实现响应式布局

```css
@media (max-width: 599px) {
  .el-col--xs-24 {
    width: 100%;
  }
  .el-col--xs-23 {
    width: 95.83333333%;
  }
  /* ... */
}
@media (min-width: 600px) and (max-width: 1199px) {
  .el-col--sm-24 {
    width: 100%;
  }
  .el-col--sm-23 {
    width: 95.83333333%;
  }
  /* ... */
}
@media (min-width: 1200px) and (max-width: 1919px) {
  .el-col--md-24 {
    width: 100%;
  }
  .el-col--md-23 {
    width: 95.83333333%;
  }
  /* ... */
}
/* ... */
```



---

## 前端手写清单

在附近的文件夹实现了

### js部分

- 深拷贝
- 节流
- 防抖
- 去重
- reduce实现
- call、apply、bind、new实现
- promise手写
- instanceof
- flatten
- 调度器

### css部分

- 两栏布局
- 三栏布局
- 实现居中的方案

---

## JS基础知识点（含手写知识点介绍）

### 01-deepClone

对深拷贝的理解：将一个对象复制到一个新对象中，它们的内容是相同的但是在内存中的地址是不同的，因而原始对象和新对象是相互独立的

1. 基本思路：分类讨论+递归

- 设计思路：如果是基本类型直接返回值，是对象则需要为每一个属性开辟新的空间
- 实现方式：而对于每一个属性都需要判断类型（对象{},数组[],js基本数据类型），所以使用递归

2. 循环引用问题

- 设计思路：自己引用自己的对象会使得递归变为死循环，而实际上引用自己只需要开辟一份存储空间并且保存该空间地址，因此对于每个对象复制前都判断它是否之前复制过，如果被复制过直接指向之前的这个空间即可。
- 实现方式：使用weakmap实现对已复制对象地址的保存。weakmap的好处是当一个对象的属性被移除后，如果这个属性的值没有被其他变量或对象引用，那么这个值所对应的对象就会成为垃圾对象，等待垃圾回收器的回收。当这个对象被回收后，它所对应的键值对也会被 `WeakMap` 自动删除。

```js
function deepClone(target,map=new weakMap()){
    if(typeof target=="object"){
        let object=Array.isArray(target)?[]:{};
        if(map.get(target)){
            return map.get(target);
        }
        map.set(target,object);
        for(let key in target){
            object[key]=deepClone(target[key],map);
        }
        return object;
    }
    else{
        return target;
    }
}
```



### 02-call、apply、bind、new

【call、apply、bind】

- 对call、apply、bind的理解：三者实际上是Function的成员函数，让函数在调用时指定this指向的对象。实现了让不同的对象（context）可以将某个非成员函数作为自己的方法函数使用。

- 三者实现上的区别

|          | call                                                  | apply                                                 | bind                                      |
| -------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------- |
| 接收参数 | func.call(context,参数1,...,参数n)                    | func.apply(context,[参数数组])                        | func.bind(context,参数1,...,参数n)        |
| 返回情况 | 让this指向context，直接调用func，并给返回func的返回值 | 让this指向context，直接调用func，并给返回func的返回值 | 返回func函数的包装，同时让this指向context |

- call、apply实现思路概述

  1. 参数校验：这个环节的目的是为了保证传入的参数是我们期待的格式，这样能够保证参数得到正确的处理。具体来说校验工作包括：

     - 是否传递了该参数，如果没有参数是否设置默认值
     - 参数是否有类型的要求，如果有则要进行判断，符合要求才能继续执行

     需要注意的是，参数不一定只出现在一开始，也可能是在中间产生，传递给其他函数。不论参数出现在哪里都需要注意适时的校验。

  2. 绑定和解绑：根据实现目的，要让func成为context的成员函数，因此有绑定和解绑的过程。当然在绑定了之后需要对函数进行一个调用，之后再解绑还原。

     - 这里有一个细节在于func函数名可能会和context本身的成员函数同名，因此我们使用一个symbol对象给func进行重命名。

- bind实现思路概述

  实际上bind就是使用一个函数包装apply函数，并将这个函数作为返回值，由使用者决定这个函数调用的时机。

  - bind接受的参数和返回函数接受的参数都最终作为func的参数来执行

```js
Function.prototype.myCall=function(context){
    //绑定在函数的原型上，myCall应该只能被函数对象使用，无需判断
    // if(typeof this!=="function")
    //     throw new Error("can only be called by a function")
    const mycontext=context||Window;
    let args=[...arguments].slice(1);
    const func=Symbol();
    mycontext.func=this;
    let res;
    if(arguments[1])
    res=mycontext.func(...args);
    else
    res=mycontext.func();
    delete mycontext.func;
    return res;

}
//myApply和myCall的区别只在于参数调用上的不同
Function.prototype.myApply=function(context){
    const mycontext=context||Window;
    let args=arguments[1];
    if(!Array.isArray(args))
        throw new Error("myApply的参数需要放在数组中传入")
    const func=Symbol();
    mycontext.func=this;
    let res;
    if(args){
        res=mycontext.func(...args);
    }else{
        res=mycontext.func();
    }
    delete mycontext.func;
    return res;
}
//myBind实现
//存在的问题：如果返回的函数作为构造函数，不会返回一个新的对象
Function.prototype.myBind=function(context) {
    const args=[...arguments].slice(1);
    const func=this;
    return function(){
        return func.apply(context,args.concat([...arguments]))
        
    }
    
}
//改进
Function.prototype.myBind=function(context) {
    const args=[...arguments].slice(1);
    const func=this;
    return function Fn(){
        if(this instanceof Fn){
            return func.apply(this,args.concat([...arguments]))
        }else{
            return func.apply(context,args.concat([...arguments]))
        }     
    }   
}

```



【new】

- new操作的本质目的：这里涉及到原型链的相关知识。主要是需要创建一个新对象，通过构造函数确定对象的原型对象，调用构造函数实现对新对象的初始化工作，并将这个新对象返回。

  而这里需要注意的问题就是构造函数本身不是新对象的成员函数，因此需要借助apply方法，让新对象可以调用初始化函数从而实现自身的初始化

  ```js
  //使用myNew函数模拟new运算符的功能
  function myNew(context){
      if(typeof context !== 'function')
      throw new Error("非构造函数")
      let obj = new Object();
      obj.__proto__=context.prototype;
      let res = context.apply(obj,[...arguments].slice(1));
      if (res){
          return res;
      }
      return obj;
  }
  ```

### 03-Promise

#### Promise的理解

promise是JavaScript用来完成异步操作的一个对象，它使得js中的异步代码更简洁易读易于维护。

#### Promise的特点

- Promise对象有三个状态：pending、fulfilled、rejected。这些状态设置的目的是为了能够在恰当的时机调用相应的回调函数。
- Promise的回调：Promise使用then和catch方法分别接收Promise处于fulfilled和rejected状态时，设定好的的回调函数。
- Promise的链式调用：Promise的then方法返回一个新的Promise对象，这方便用户将多个异步操作组合在一起，易于阅读和管理。

#### Promise的设计

整体来说细节比较多，这里首先针对几个值得讨论的点做一些理解阐述

1. Promise的核心特性和方法

   - resolve、reject方法，用来改变Promise对象的状态，由pending转为fulfilled或者rejected
   - status变量，用来记录Promise对象的状态，状态有pending、fulfilled、rejected三种
   - value、reason变量，分别用来记录结果和错误
   - then、catch方法，分别用来接收fulfilled、rejected状态下需要执行的回调函数onFulfilledCallback、onRejectedCallback
   - onFulfilledCallbacks，onRejectedCallbacks数组，分别用来储存fulfilled、rejected状态下需要执行的回调函数，并且在Promise
   - executor执行器，使用resolve、reject方法作为参数，由用户设定，用户可以通过实现executor执行器中的逻辑，来改变Promise可能的状态变化

2. then的工作流程梳理

   <img src="E:\a_vscode_workspace\web_study\web_basic_notes\ref_img\promise.jpg">

3. Promise的常用静态方法介绍：resolve、reject、all、race

- resolve，用来包装非Promise对象，将其变为fulfilled的Promise对象，以及传递Promise对象
- reject，用来包装非Promise对象，将其变为rejected的Promise对象
- all，用来返回一组Promise对象的处理结果，或者返回第一个错误（返回一个Promise对象，值存储在它的value或者reason属性中）
- race，用来返回一组Promise对象中第一个返回的处理结果，或者它的错误（返回一个Promise对象，值存储在它的value或者reason属性中）

#### Promise的实现

```js
// MyPromise.js

// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 新建 MyPromise 类
class MyPromise {
  constructor(executor){
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  // 储存状态的变量，初始值是 pending
  status = PENDING;
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 存储成功回调函数
  onFulfilledCallbacks = [];
  // 存储失败回调函数
  onRejectedCallbacks = [];

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      // resolve里面将所有成功的回调拿出来执行
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // resolve里面将所有失败的回调拿出来执行
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

    // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
    const promise2 = new MyPromise((resolve, reject) => {
      const fulfilledMicrotask = () =>  {
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 获取成功回调函数的执行结果
            const x = realOnFulfilled(this.value);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        })  
      }

      const rejectedMicrotask = () => { 
        // 创建一个微任务等待 promise2 完成初始化
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = realOnRejected(this.reason);
            // 传入 resolvePromise 集中处理
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        }) 
      }
      // 判断状态
      if (this.status === FULFILLED) {
        fulfilledMicrotask() 
      } else if (this.status === REJECTED) { 
        rejectedMicrotask()
      } else if (this.status === PENDING) {
        // 等待
        // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
        // 等到执行成功失败函数的时候再传递
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    }) 
    
    return promise2;
  }
    catch(onRejectedCB){
        this.then(null,onRejectedCB);
    }

  // resolve 静态方法
  static resolve (parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
  //all
  static all(promises){
    const N=promises.length
    const res=[];
    let count=0;
    return new MyPromise((resolve,reject)=>{
        promises.forEach((promise,i)=>{
            MyPromise.resolve(promise).
            then((value)=>{
                res[i]=value;
                count++;
                if(count===N)
                    resolve(res)
            }).catch(reject)
            
        })
    })
  }
    //race
 static race(promises){
     return new MyPromise((resolve,reject)=>{
         promises.forEach((promise)=>{
             MyPromise.resolve(promise).
                 then(resolve,reject)
         })
     })
 }
}


function resolvePromise(promise2,x,resolve,reject){
  if(promise2===x)
      throw new TypeError("Chaining cycle detected for promise #<Promise>")
  if(typeof x==='object'||typeof x ==='function'){
      if(x===null)
          resolve(x);
      let then;
      try{
         then=x.then 
      }
      catch(err){
          reject(err)
      }
      if(typeof then==='function'){
          x.then(resolve,reject)
      }
      else{
          resolve(x)
      }
  }else{
      resolve(x)
  }
}

```

### 04-防抖

#### 防抖 (debounce)概念

在一段时间内连续地触发同一个事件，只执行第一次或者最后一次触发操作。适用于需要等待用户停止操作后才执行的操作，比如输入框搜索功能。

#### 防抖的实现

debounce(handler,wait,immediate)

- handler——需要进行防抖处理的事件处理程序
- wait——限定不能连续触发事件的时间段
- immediate——在时间段内，设定执行第一次操作还是最后一次操作

返回值：返回防抖函数包装好的事件处理程序函数，也可以理解为新的事件处理程序

【基本功能】

1. 使用定时器：

   在debounce函数中声明一个定时器变量timer（未设置状态timer==null）

   - case1-执行最后一次：如果timer处于未设置状态，就设置一个wait时间后触发的handler；==如果timer处于设置状态，就清除当前timer==，再设置一个wait时间后触发的handler的计时器
   - case2-执行第一次：如果timer处于未设置状态,就调用handler，并且在wait时间后将timer重新设置为未设置状态；==如果timer处于设置状态，就清除当前timer==，并且设置一个wait时间后将timer重新设置为未设置状态的计时器

2. 使用immediate参数：目的是让使用者通过设定参数就可以决定执行的时间点，而不需要编写两个debounce函数

   可以总结发现，case1和case2中当timer处于设置状态时，都需要把当前的计时器清空，可以把这个逻辑提取出来放在前面，之后再通过参数immediate进行分支判断，执行case1或者case2的逻辑

【实现细节】

1. this

   在事件处理程序中，this必须指向事件对象（某个页面上的dom元素），而当使用了debounce封装事件处理程序，其中原本的处理程序（handler）this不指向事件对象，而是指向了window，导致了问题。因此需要将debounce的返回的新处理程序所获取到的this，通过bind、apply绑定到初始的执行函数handler上

2. event

   事件处理程序（事件发生后的回调函数）有event事件对象作为参数。而当debounce封装了事件处理程序之后，新处理程序的参数（包含event对象）没有传递给原本的处理程序（handler），导致原本处理程序中对于event的使用失效，所以要把arguments对象也通过bind、apply绑定到初始的执行函数handler上

3. 取消按钮

   根据立即执行的设计思路，如果等待timer被重置需要等到最后一次操作经过n时间，所以给防抖封装增加一个方法，直接将timer赋值为null，调用它后处理程序在事件发生后立即被调用。

【代码实现】

```js
function debounce(func,wait,immediate){
    let timer;
    return function(){
        //container
        const context=this;
        const args=arguments;
        let res;
        if(timer) 
            clearTimeout(timer);
        if(immediate){
            let nowCall=!timer;
            //事件触发wait时间后，timer回到最初状态，最后一次周期内触发的wait之后，timer清空
            timer=setTimeout(function(){timer=null},wait);
            //第一次触发，调用处理程序
            if(nowCall){
                //可能会有返回值，在这里返回
                res=func.apply(context,args);
            }
        }
        else{
            //指定func的this指向container
            timer=setTimeout(func.bind(context,args),wait);
            
        }
            console.log("newHandler的this指向：",this)
            return res;
    }

}
```



学习来源：

https://github.com/mqyqingfeng/Blog/issues/22

#### 防抖的应用场景

1. 窗口大小调整时触发重排：因为用户自己可能也需要多次调整大小找到最适合的尺寸。
2. 避免重复提交、点击事件：在网站表单提交时，用户可能会多次点击提交按钮，导致多次提交表单。尤其时当页面的响应比较慢，用户自己也不确定是否提交成功，容易发生多次提交。

### 05-节流

#### 节流 (throttle)概念

每隔一段时间执行一次回调函数，比如每 100 毫秒执行一次，而不管事件触发频率。适用于需要频繁触发事件但又不需要每次都执行回调函数的情况，比如滚动事件、鼠标移动事件等。

#### 节流的实现

throttle(wait,handler)

- wait，wait时间内只执行一次事件处理程序
- handler，事件本身的处理程序

1. 时间戳

   记录上一次触发的时间戳和本次触发的时间戳，以此计算出时间差，根据时间差和wait之间的比较，决定是否调用处理程序。保证在wait时间内只调用一次处理程序。

   细节：这里的pretime和防抖中的定时器timer一样，对于同一个具体的事件，在多次处理程序被调用时，它们访问的都是同一个pretime。是通过闭包实现的。

   ```js
   function throttle_time(wait,handler){
       let pretime=0;
       return function(){
           const context=this;
           const args=arguments;
           let nowtime=+new Date();
           if(nowtime-pretime>wait){
               handler.apply(context,args);
               pretime=nowtime;
           }
       }
   }
   ```

   

2. 定时器

   【注意区分】

   防抖是在最后一次触发之后执行，如果一直持续触发事件不停止，会一直看不到事件执行

   节流是在一段时间内只触发一次处理程序，因而如果触发了事件，那么在wait时间内必然会执行一次处理程序

   具体的实现方式如下：

   ```js
   function throttle_timer(wait,handler){
       let timer=null;
       return function(){
           const context=this;
           const args=arguments;
           if(timer===null){
               setTimeout(function(){
                   timer=null;
                   handler.apply(context,args);
               },wait)
           }
       }
       
   }
   ```

   

3. 时间戳+定时器

   pretime——用于记录上一次的执行时间点，每次执行handler的时候都需要更新它

   timer——定时器，根据需要设定

   事件触发后...

   1. 计算剩余时间remainings，如果remainings<=0，说明上一个时间周期结束，那么可以执行处理程序了
   2. 如果remainings>0，说明在wait时间周期内。
      - 如果此时存在一个timer，在这个周期内曾有触发过事件，不需要重新设置timer，不需要做任何操作
      - 如果不存在timer，则需要设置一个timer，在remainings时间后执行，同时也清除掉这个周期中的定时器。目的是保证这个周期内执行一次handler。

4. 头尾问题（待学习）

   在上述设定中，在n时间内触发事件，开始时会调用处理程序，remaings时间后也会调用处理程序，因此设计leading和tailing两个属性来控制调用处理程序的时机

学习来源：https://github.com/mqyqingfeng/Blog/issues/26


### 06-原型链相关手写

#### 原型链的基础知识

自顶向下来看：

1. 顶层对象：js中设计了Object.prototype和它的构造函数Object
   - 对象原型没有进一步的源头了，所以`Object.prototype.__proto__==null`
   - 对象构造器是一个构造器对象，所以`Object.__proto__==Function.prototype`
2. 顶层构造器：js中设计了Function.prototype和它的构造函数Function
   - 由于构造器原型本身也是对象，`Function.prototype.__proto__==Object.prototype`
   - 函数构造器是一个构造器对象，所以`Function.__proto__==Function.prototype`

3. 普通对象：每个对象都有`__proto__`属性（原型链属性，js中的非标准属性，可以使用Object.getPrototypeOf获得），它指向对象的原型对象，也可以理解为是对象的构造函数的prototype所指向的对象。
4. 构造器：构造器不仅有`__proto__`属性，同时也有`prototype`属性，前者指向构造器作为一个对象本身，这个对象的原型，后者指向构造器构造出来的对象的原型对象。
5. 对象原型：对象原型包含了对象可以使用的属性和方法。

#### instanceof

沿着对象的原型链进行查找（循环），如出现了要匹配原型对象，就说明是子类，反之则不是

#### new操作符

a. JavaScript 引擎会创建一个新对象，并将该对象的原型指针指向构造函数的 prototype 对象。

b. JavaScript 引擎会使用 apply 方法调用构造函数，并传入新创建的对象作为 this 参数。这样一来，我们就可以在构造函数内部使用 this 关键字来初始化新对象的属性。

c. JavaScript 引擎会返回新创建的对象。

### 07-数组扁平化

学习来源：[JavaScript专题之数组扁平化 · Issue #36 · mqyqingfeng/Blog (github.com)](https://github.com/mqyqingfeng/Blog/issues/36)
扁平化：将嵌套多层的数组变为只有一层的数组
应用场景：我们需要将一个多层嵌套的对象或数组序列化成字符串，或者反序列化成一个 JavaScript 对象或数组。对象或数组中包含多层嵌套的子对象或子数组，我们需要将它们展开成一维的数组或对象，以便进行统一的数据处理或比较等
实现：
1. 数组扁平化的本质是通过递归

2. 为了让扁平化函数能够为其他的工具函数更好地提供扁平化功能，

   设置了strict属性，可以在扁平化的过程中去除那些非数组的元素

   设置了shallow属性，可以只扁平化一层，而不进行递归

3. 应用场景，比如让`[1,2,[3,4,5],[6,5,7]]`转化为`[3,4,5,6,5,7]`就可以设置strict=true，shallow=true

### 08-reduce的实现
reduce返回数组中每个元素循环执行某个操作，累积的最后结果，只返回一个值

reduce作为数组的方法，内部的this指向调用它的数组本身，而它接收的参数就是需要迭代执行的回调函数，和累计值的初始值。回调函数在reduce内部循环调用并且传参，同时收集需要的结果。
其他的数组方法的实现也是基于类似的原理

### 09-去重

去重是指从一个集合中删除重复的元素，以便只保留独特的元素。集合可以是数组、对象、字符串等。

本例中主要实现了三种去除数组中重复元素的方法。
1. Set去重+可迭代对象结构
2. reduce+include：把先前没有加入的新元素在reduce遍历的过程中加进来
3. filter+indexOf：筛选出在数组中的位置和遍历位置一致的元素

## ES6

### var let const

1. var声明的变量可以在全局作用域和函数作用域使用
2. 使用var声明会有变量提升的效果，变量提升是指可以在未声明前使用变量，但是此时的值是undefined
3. let和const声明的变量可以在全局作用域、函数作用域和块级作用域使用
4. const声明常量是常量，因此它声明时必须要赋值，同时赋值之后值不能修改
5. 死区的概念：使用let或者const声明，在作用域开始到声明之间的区域是死区，在此区间访问变量会报错

### 箭头函数

目的：适用于创建执行一次的函数，语法上非常的简洁

特点：

1. 箭头函数没有自己的this，它继承外部函数的this。如果箭头函数没有外部函数，则它的this指向全局对象（浏览器环境下是window对象）。

2. 箭头函数没有arguments对象

3. 箭头函数不能用来实例化对象，因为它没有this

   （个人理解，this指向某个对象，这个对象就像是函数的主人，箭头函数没有this所以它就不属于某个对象，可以把箭头函数和构造函数对照起来看)

### 数组方法

【备注】这个不是ES6新增的，但是很常用很好用

**不修改原数组**

1. map

   ```js
   let arr=[1,2,3,4,5]
   //每个数字*2返回新数组
   const arr_new = arr.map((item,index)=>{
       return item*2
   })
   arr_new
   ```

   

2. reduce

   ```js
   let arr=[1,2,3,4,5]
   //arr数组求和
   const sum = arr.reduce((pre,next)=>{
       return pre+next
   },0)
   sum
   ```

   

3. filter

   ```js
   let arr=[1,2,3,4,5]
   //筛选出大于3的数字
   const arr_new = arr.filter((item,index)=>{
       return item>3
   })
   arr_new
   ```

   

4. forEach

   ```js
   let arr=[1,2,3,4,5]
   //遍历arr
   arr.forEach((item,index)=>{
       console.log(index,item)
   })
   ```

**修改数组方法**

1. pop&push、shift&unshift

2. splice：主要用于数组特定位置的删除和修改

   ```js
   arr.splice(start[, deleteCount, elem1, ..., elemN])
   ```

   - `start`——需要删除元素的索引位置
   - `deletCount`——从该位置开始需要删除的元素个数
   - `elem1, ..., elemN`——从该位置开始替换的新元素

### Rest参数

当函数接收参数数量不确定时，可以用rest语法将多出来的参数都收集到一个数组中

### Spread语法

Spread语法是指使用 `...` 将一个可迭代对象或者类数组对象展开为一个新的数组。这个特性可以方便地合并数组、复制数组、合并对象等操作，提高编码效率。

### 可迭代对象、类数组对象和它们之间的转化

- 可迭代对象是实现了`obj[Symbol.iterator]()` 方法的对象，之后可以通过for...of的方法循环该对象（常见的可迭代对象：字符串、数组）
- 类数组对象是可以通过索引访问元素并且有`length`属性，但不能使用数组的内置方法（常见的类数组对象：函数的 `arguments` 对象）
- 它们都不一定是真正的数组对象，可以使用spread语法或者Array.from方法将它们转为真正的数组对象

### 解构可迭代对象和对象

1. 解构可迭代对象

   ```js
   let arr=[1,2,3,4,5]
   let [num1,num2,num3=0,...rest]=arr
   结果：num1=1,num2=2,num3=3,rest=[4,5],其中num3的默认值为0
   ```

2. 解构对象

   ```js
   let bar={
   	height:200,
   	width:100,
   	title:'sidebar',
   	color:'indigo'
   }
   let {height:h=100,width:w,...rest}=bar;
   结果：h=200,w=100,rest={title:'sidebar',color:'indigo'},其中通过属性名来映射，赋值给变量h和w
   ```


### Promise

本质：Promise是用来进行js中异步编程的对象

1. 三个状态：pending、fulfilled、rejected
2. 执行器executor(resolve,reject)，在构造器中执行，根据不同情况进行逻辑判断，分别调用resolve,reject改变promise的状态，并且接受value值或者错误对象reason
3. then(onFulfilledBC,onRejectedBC)，传入针对value和reason的回调函数

### async/await（ES8）

本质：是一种处理异步操作的语法糖，目的是为了进一步简化异步操作

1. 对于async声明为异步函数的理解

   当一个函数需要等待异步操作完成后，对结果进行处理，或者等待异步操作完成后再继续执行时（函数中出现await关键字）需要声明为异步函数

   异步函数自动将返回结果封装在Promise中返回；如果异步函数没有设定显式的返回结果，那么它会将函数中拿到的最后一个异步结果封装在Promise中返回

2. await是用来等待接收async函数结果的关键字
3. 通过try...catch可以捕获await过程中可能抛出的异常

## Vue-basic

### Vue渐进式

允许开发者按照项目开发的需求，将所需要的功能逐步引入到项目中，实现定制化的开发

### single page application

【含义】

SPA是一种构建web应用的方式，它只有一个页面和一些必要的静态资源，其他的内容都是通过js动态生成的。

【例子】

本质：SPA 通过路由机制，将页面的不同部分映射到不同的组件，实现了在同一个 HTML 页面内动态地加载不同的组件，从而达到切换页面的效果。

实现方法：vue-router实现路由功能通过监听HTML5的hashchange事件，该事件会在URL的#后面部分改变后触发，之后把相应的组件在<router-view>标签处渲染，并加载需要的资源

【特点】

优点：用户体验好，局部刷新方便更快交互，不需要给服务器发送请求；

缺点：不利于seo

### MVVM & MVC

1. mvc

   model和程序中数据相关的业务逻辑，

   view做页面上数据的展示，

   controller做程序的流程控制（处理输入，操作数据，调用视图）

2. mvvm

   view-model：实现了视图和数据的双向绑定，操作任意一方都可以同步变化

   优势：精简代码，不用频繁操作dom，让开发者把注意力都放在对于数据的操作上

   vue中的view和model之间还可以通过ref进行通信，不是标准的mvvm

### vue修饰符

本质：将很多常用、有用的dom处理总结，形成了vue修饰符，以此改变事件处理程序的行为。

| 修饰符              | 作用                                                   |
| ------------------- | ------------------------------------------------------ |
| lazy                | 懒加载，等到停止输入内容（光标离开input）再更新value值 |
| trim                | 去除字符串两端的空格                                   |
| number              | 限制输入的内容为整数，去除数字后面的其他字符           |
| stop                | 阻止冒泡                                               |
| capture             | 改为捕获                                               |
| self                | 只触发真正被点击的元素绑定的事件                       |
| once                | 事件只被调用一次                                       |
| prevent             | - 阻止默认事件（a标签的跳转）                          |
| native              | - 保证自定义组件的事件可以触发                         |
| left、right、middle | 设定鼠标按键触发的点击事件                             |
| passive             | scroll事件的懒加载                                     |
| camel               | - 将绑定的参数识别为驼峰                               |
| sync                | - ？                                                   |
| keyCode             | 设定按下某个键盘键触发的事件                           |

### vue指令

Vue的v指令可以用来操作DOM，根据指令的不同，可以实现不同的功能。

1. v-bind(:)——实现vue实例数据流向dom元素属性，常用于绑定dom动态属性
2. v-on(@)——实现将dom元素事件绑定到vue实例中，用于设置事件处理程序
3. v-model——实现vue实例中表单数据和dom表单双向绑定，本质上是`:value`和`@input`的语法糖，为了避免value和页面渲染的不同步，必须把表单声明为响应式
4. v-for——实现根据vue实例数据渲染相应的dom元素
5. v-slot——根据插槽名，在组件中合适的位置插入自定义的dom节点
6. v-if——如果表达式的值为真，则渲染对应的元素；如果表达式的值为假，则不渲染对应的元素。
7. v-show——无论表达式的值是真是假，元素都会被渲染到页面中。如果表达式的值为真，则显示元素；如果表达式的值为假，则隐藏元素（`display:none`）

【二者的区别】

- v-if值的切换会导致组件重复地跑声明周期，所以用于按照逻辑渲染，后期不用频繁切换的场景
- v-show只是在页面上隐藏渲染好的节点，应用于频繁切换的场景

### 自定义v指令

自定义指令可以用于实现一些常见的功能，比如：

- 控制 DOM 的行为和样式
- 处理表单控件的交互行为
- 扩展 Vue 组件的功能

自定义指令可以通过调用 `app.directive(name, definition)` 来定义一个指令，其中 `name` 是指令的名称，`definition` 是指令的定义对象。

指令的定义对象可以包含以下属性，生命周期钩子，也就是在这个声明周期可以访问到的对象：

- `beforeMount`：在绑定元素的初始值时调用，只调用一次。
- `mounted`：在绑定元素的子节点都被插入后调用，只调用一次。
- `beforeUpdate`：在元素更新前调用，可能会被调用多次。
- `updated`：在元素更新后调用，可能会被调用多次。
- `beforeUnmount`：在指令所绑定的元素被销毁前调用，只调用一次。
- `unmounted`：在指令所绑定的元素被销毁后调用，只调用一次。

它们可以接收的参数为`el, binding, vnode, prevVnode`

- el：绑定的dom元素，可以进行dom操作
- binding：是一个对象，包括很多和指令相关的属性

案例：制作防抖按钮，在按钮的mounted周期绑定一个点击事件的防抖包装，作为Handler，在按钮的unmounted周期将这个Handler销毁。

### 组件间传值的方式

1. 父组件->子组件：子组件的属性，props
2. 子组件->父组件：父组件在子组件上监听特定事件`@event=hanlde(value)`，子组件发布事件传递参数`$emit('event',value)`
3. 使用Vuex进行状态管理
4. 使用localStorage缓存键值对

5. 使用$refs可以获取绑定了ref属性的组件实例，通过它自身的方法就可以传递数据

### web应用程序路由的两种实现方式

1. hash：浏览器只加载#前面的内容，后面的url发生变化，触发window的hashchange事件，以此来更新页面路由。
2. history：通过`pushState`和`replaceState`切换url，实现路由切换。可以根据历史状态的不同，恢复之前的页面，从而不需要重新加载整个页面。适用于同一个页面的状态切换。

### 动态样式

可以通过动态地绑定（v-bind）class和style属性，可以给他们绑定关于class和style的对象或数组

如果要实现样式的动态切换，可以考虑绑定一个计算属性，按需返回需要绑定的样式

### computed和watch的区别

1.`computed`是依赖已有的变量来计算一个目标变量，大多数情况都是`多个变量`凑在一起计算出`一个变量`，它也是响应式的。当计算属性所依赖的响应式数据发生变化时，计算属性会重新计算，从而更新视图。并且`computed`具有`缓存机制`，依赖值不变的情况下其会直接读取缓存进行复用，`computed`不能进行`异步操作`

原因：`computed`是基于响应式数据进行计算的，并且在计算过程中必须是同步的。如果`computed`包含异步操作，由于异步操作的结果是不确定的，因此`computed`的计算结果也是不确定的，会导致无法计算。

2.`watch`是监听某一个变量的变化，并执行相应的回调函数，通常是`一个变量`的变化决定`多个变量`的变化，`watch`可以进行`异步操作`

### vue的生命周期

vue组件会经历的一系列初始化步骤，允许开发者在需要的阶段运行自己的代码，ipad上同步更新对每个阶段的理解

<img src=".\ref_img\lifecycle.png" alt="lifecycle" style="zoom: 67%;" />

### 父子组件的生命周期

父beforeCreate->父Created->父beforeMount（因为这里开始编译模板，会识别到子组件的存在）->子beforeCreate->子Created->子beforeMount->子Mounted->父Mounted

父组件的生命周期会影响到子组件，当父组件被销毁，vue会递归销毁其子组件（深度优先遍历）

而当子组件被销毁时，很可能对父组件没有影响

### 为什么v-if和v-for不建议用在同一标签

因为v-for的优先级高于v-if，虚拟节点会先通过循环全部被渲染出来，之后v-if会对他们进行逐一的判断，这样就进行了很多无用的渲染操作

解决方案：在computed中使用filter将需要渲染的节点选出来，在进行for循环

### vuex简介

vuex本质：Vuex是一个专为Vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

- state：统一管理应用状态的对象。

- mutation：唯一用来改变应用状态的方法（同步方法），集合在一个对象中。如果修改应用状态的方法需要维护，只需要修改这一个地方。

- action：可以将mutation中的一些操作放到异步任务中，来实现异步地修改某一个变量。

  我的理解：一种经常发生的异步操作并且最终触发了应用状态的改变，用于不同的组件之间，就适合放到action。

- getter：可以从store中获取数据，主要是对store中的数据进行一个包装的作用，不会修改store中的原数据，并且是响应式的，会随着store数据的变化而变化。

- module：可以将多个组件的store（都有自己的state,mutation,action,getter）应用到同一个应用的store中，并且有自己的命名空间，当应用涉及到的状态变量很多时，这样方便管理维护。

### 插槽知识点

【基本使用概念】

1. 插槽的目的：在子组件的内部能够放入父组件创建的相关节点

2. 默认内容：在子组件的内部可以设置插槽处的默认值

3. 具名插槽：可以在子组件的不同节点位置设置插槽并且命名，父组件按照插槽的名称插入自己的节点

4. 插槽作用域：插槽可以将子组件上绑定的子组件数据传递给父组件，父组件通过v-slot的值来接收这些子组件数据

   ```vue
   //子组件绑定 组件名student
   <slot :name="Amy" :age="12">
   //父组件接收
   <student v-slot="slotProps">
       {{slotProps.name}}-{{slotProps.age}}
   </student>
   //具名插槽
   //子组件
   <slot name="header">
   //父组件
    <h2 #header></h2>
    <h2 v-slot:header></h2>
   ```

【大致解析原理】

1. 普通插槽

   解析父组件，生成slot处的虚拟节点->根据插槽名放入到子组件的对应位置`_t(slot-name)`

2. 作用域插槽

   解析父组件，生成slot处的函数->解析子组件，封装绑定的子组件数据，调用父组件slot处函数生成slot对应的虚拟节点，根据插槽名放入到子组件的对应位置`_t(slot-name,obj)`

### 在v-for中，为什么不建议用index做key

因为vue通过diff算法来更新视图，而diff算法会通过比较两个节点的key值来判断两个节点是否为同一个节点。而使用index作为key之后，如果发生队头修改的操作，会改变所有节点的key，导致本来应该判断为相同的节点判断失败，耗费了性能。

index在数组中的数据项增加或减少的时候，都会可能会发生改变（unshift、shift）。而使用id，这种固定不变且唯一的属性就非常合适。所以不要选择容易改变的属性作为key。

### nextTick的用处

这个和vue的异步更新队列有关，响应式数据改变之后，dom的同步更新不是立即执行的，而是放入一个任务队列，等待下一个tick立即执行。而在tick中，不会发生页面的重新渲染。

`$nextTick()` 方法用于在 DOM 更新周期结束后执行回调函数。当你修改 Vue 实例中的数据时，Vue 会异步地更新视图，这意味着在数据变更后，DOM 元素并没有立即更新。如果你想要在 DOM 更新之后执行一些操作，例如操作更新后的 DOM 元素，那么就可以使用 `$nextTick()` 方法。

## Vue2

### data函数

因为每个组件都可能多次被调用，而每次调用前都会再执行一次data函数，获得数据的初始化状态，以防数据污染。

### 不需要的响应式数据处理方法

对于从头到尾都不会改变的“死数据”应当做非响应式的处理，以此减少开销。

使用`Object.freeze()`定义对象，并在data中返回对象

### watch vue2

1. 监听基本类型

   ```js
   data(){
       return{
           message:"hello world";
       }
   },
   watch:{
       message(newValue,oldValue){
           //回调函数
       }
   }
   ```

2. 监听对象

   ```js
   data(){
       return{
           student:{
               name:"zhangsan",
               age:23
           }
       }
   },
   watch:{
       student:{
           handler(newValue, oldValue) {
           console.log('student changed from', oldValue, 'to', newValue)
         },
         deep: true//深度监听才会关注对象的属性是否发生改变，否则关注对象名引用
         immediate:true//在组件初始化之后就立即执行回调函数，一般默认为false，组件挂载之后再监听变化，执行回调函数
       }
   }
   ```

### 对象新属性无法更新视图，删除属性无法更新视图

- 原因：`Object.defineProperty`没有对对象的新属性进行属性劫持
- 对象新属性无法更新视图：使用`Vue.$set(obj, key, value)`，组件中`this.$set(obj, key, value)`
- 删除属性无法更新视图：使用`Vue.$delete(obj, key)`，组件中`this.$delete(obj, key)`

## Vue3

### vue3的单向数据流

1. 循环更新

   循环更新发生在两个组件之间，当一个组件中的响应式对象改变时，会更新另一个组件中使用的响应式对象，而该对象又会更新第一个响应式对象，以此类推。这样会形成一个更新的无限循环，可能导致意料之外的行为，例如错误，崩溃或无限渲染。

2. 单向数据流原则：为了避免 Vue3 中的循环更新，你应该遵循单向数据流原则，也就是数据只从父组件向子组件流动，不会反过来。这意味着子组件不应该修改来自父组件的 prop，而是应该通过事件或者回调将数据传回父组件。


### onMounted+事件监听

知识点：vue3中的事件监听，图表resize

1. 对于`onMounted`的理解

   - 组件挂载：Vue3中的组件挂载指的是将组件与页面中的 DOM 元素对应起来的过程。在 Vue 中，每个组件都有一个对应的虚拟 DOM，而挂载的过程即是将组件的虚拟 DOM 映射到真实的 DOM 上。在组件挂载完成后，组件可以对页面中的 DOM 元素进行操作，并对用户的交互产生反应。
   - 虚拟dom->真实dom： 组件的信息在编译过程中被转换为真实的 DOM。Vue 在挂载组件时，会先将组件的虚拟 DOM 编译为 JavaScript 代码，再执行该代码以生成真实的 DOM。编译过程中，Vue 会考虑组件的模板、数据、事件等信息，并将其映射到真实的 DOM 元素上。这样，组件的信息就可以通过真实的 DOM 展示到页面上，并对用户交互做出反应。
   - onMounted时间点：Vue 的 `onMounted` 钩子函数在组件被挂载完成之后执行。也就是说，组件的虚拟 DOM 已经被编译为真实的 DOM，并与页面上的 DOM 元素对应起来，组件已经可以对页面上的元素进行操作。`onMounted` 钩子函数可以让我们在组件挂载完成后执行一些操作，==比如请求数据、初始化组件状态等==。

   通过以上的内容，可知可在onMounted中对页面上已经存在的图表dom进行操作，也就是在这里对`resize`事件进行一个监听

2. 对`unMounted`的理解

   - 当组件被卸载时，Vue 将会调用 `unmounted` 钩子函数。在该阶段，组件的实例已经不再被需要，并且已经从页面中删除了。==在该阶段，可以执行一些清理操作，如移除事件监听器，清除定时器等，以保证不会对其他组件造成影响==。

   也就是在这个页面组件上由开发者添加的任何监听器，定时器等统一在此处清理。

3. 对事件清理的理解

   当某个组件被卸载时，在它上面安装的监听器也应该被移除，否则当大量的监听器都没能及时清除的时候可能会导致内存的泄漏

## Vue-原理

### vue的响应式前置知识-Proxy

|                      | proxy                                                        |
| -------------------- | ------------------------------------------------------------ |
| 创建的本质原因       | proxy是ES6的一个内置对象。proxy改变了对象的默认行为，在对象的某些默认行为发生时可以执行自定义的逻辑。因此可以用它来包装对象，作为对象的代理。 |
| 特质                 | 我们应该在所有地方使用 `proxy` 而不是 `target`。代理没有自己的属性或方法。如果提供了捕捉器（trap），它将捕获操作，否则会将其转发给 `target` 对象。 |
| 设计层面             | let proxy = new Proxy(target, handler)//创建代理的方式<br />拦截器的参数：target目标对象，prop目标对象的属性，receiver确定原始操作所在的目标对象<br />拦截器的种类，对象的常用的内建函数和拦截器相互对应 |
| 存在的问题（待补充） | 内建对象具有“内部插槽”，对这些对象的访问无法被代理。<br />对象的严格相等性检查 `===` 无法被拦截。 |

### vue的响应式前置知识-Reflect

`Reflect` 对象是一个内建对象，它提供了一组与对象操作相关的方法，这些方法的行为与对应的内建函数基本一致，只是有些细节的差别。通过使用 `Reflect` 对象，我们可以更加方便、安全地操作对象，同时也可以避免直接使用内建函数时可能出现的一些问题。

[Reflect](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect) API 旨在补充 [Proxy](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。对于任意 `Proxy` 捕捉器，都有一个带有相同参数的 `Reflect` 调用。我们应该使用它们将调用转发给目标对象。[Reflect](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect) API 旨在补充 [Proxy](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。对于任意 `Proxy` 捕捉器，都有一个带有相同参数的 `Reflect` 调用。我们应该使用它们将调用转发给目标对象。

【案例——可观察的对象】

```js
let handlers = Symbol('handlers');

function makeObservable(target) {
  // 1. 初始化 handler 存储
  target[handlers] = [];

  // 将 handler 函数存储到数组中，以便于之后调用
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  // 2. 创建一个 proxy 以处理更改
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // 将操作转发给对象
      if (success) { // 如果在设置属性时没有出现 error
        // 调用所有 handler
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";
```

谈谈我对这段代码的理解。通过返回一个针对user的代理，实现了对user的set行为的观察。主要的方法是，在user中添加handlers数组成员，用来存储针对set行为的所有观察方法，在user中添加observe方法，用来将观察函数存入user的观察方法数组（handlers）中。代理实现对set行为进行监听，当set行为成功之后，就会把handlers中的方法遍历执行，从而实现了对set行为的观察。

【本节参考】

https://zh.javascript.info/proxy#zong-jie

### vue3的响应式原理

#### 对于vue2响应式原理的简单理解

- 针对对象：递归遍历对象的所有属性，将它们的值定义成getter和setter（`Object.defineProperty`）。当页面使用对应属性时，每个属性都拥有自己的`dep`属性，存放他所依赖的` watcher`（依赖收集），当属性变化后会通知自己对应的` watcher` 去更新(派发更新)。
- 针对数组：vue中的响应式是针对数组对象本身，而不是数组的元素。因此在触发数组长度变化及数组变异方法后，才会响应式地更新内容。

#### 和vue2的区别

- 给vue3的响应式对象新增属性，同样也是响应式的。这是因为vue2需要在对象初始化时利用Object.defineProperty给对象的属性添加getter和setter，而新增的属性没有进行这个流程。而在vue3中对象直接委托给代理，代理可以知道对象的任意操作。
- vue2实现响应式是通过Object.defineProperty实现的，vue3的响应式是通过proxy实现的。

#### effect、track、trigger

- effect，执行副作用函数，将副作用函数保存到全局变量`activeEffect`。如果监听属性改变，某些操作需要被执行，因而形成了副作用函数。
- track，将正在执行的副作用函数`activeEffect`放到它对应的属性集合dep中。
- trigger，当属性被访问时，它的dep中的方法逐一遍历执行。

#### 示例——reactive-ref-computed

- ref：只用来维护一个值，实际上就是向reactive传入只有一个属性的对象

- computed：

  设计的执行流程：在effect执行的过程中，activeEffect的值为`() => result.value = fn()`，之后result.value的proxy.handler.get被调用，`() => result.value = fn()`成为了result.value的dep中的一个，在下次访问时会trigger，于是数据同步更新

代码来源：[林三心画了8张图，最通俗易懂的Vue3响应式核心原理解析 - 掘金 (juejin.cn)](https://juejin.cn/post/7001999813344493581#heading-13)

```js
const targetMap = new WeakMap()
function track(target, key) {
    // 如果此时activeEffect为null则不执行下面
    // 这里判断是为了避免例如console.log(person.name)而触发track
    if (!activeEffect) return
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        targetMap.set(target, depsMap = new Map())
    }

    let dep = depsMap.get(key)
    if (!dep) {
        depsMap.set(key, dep = new Set())
    }
    dep.add(activeEffect) // 把此时的activeEffect添加进去
}
function trigger(target, key) {
    let depsMap = targetMap.get(target)
    if (depsMap) {
        const dep = depsMap.get(key)
        if (dep) {
            dep.forEach(effect => effect())
        }
    }
}
function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            track(receiver, key) // 访问时收集依赖
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            Reflect.set(target, key, value, receiver)
            trigger(receiver, key) // 设值时自动通知更新
        }
    }

    return new Proxy(target, handler)
}
let activeEffect = null
function effect(fn) {
    activeEffect = fn
    activeEffect()
    activeEffect = null
}
function ref(initValue) {
    return reactive({
        value: initValue
    })
}
//返回一个依赖于某个响应式的值A的值B
/*在effect执行的过程中，activeEffect的值为`() => result.value = fn()`，之后result.value的proxy.handler.get被调用，`() => result.value = fn()`成为了result.value的dep中的一个，在下次访问时会trigger，于是数据同步更新*/
function computed(fn) {
    const result = ref()
    effect(() => result.value = fn())
    return result
}
```

【本节参考】[「自我检验」熬夜总结50个Vue知识点，全都会你就是神！！！ - 掘金 (juejin.cn)](https://juejin.cn/post/6984210440276410399#heading-33)

### vue2的编译原理

#### mount函数

- 本质作用

  确定vue实例对象所对应的模板的根节点位置`el`以及使用的模板`template`，根据`template`生成`render`函数并且调用它，最终将渲染的结果插入到指定的根节点位置。

- 确定el和template的流程

<img src=".\ref_img\mount流程.png" alt="mount流程" style="zoom: 67%;" />

### parse函数

- AST：抽象语法树，将节点抽象为对象，并且这些对象是包含了代码中节点之间的关系的（每个节点可以看作是一棵树）

  ```js
  //形如，元素节点的定义
  export interface BaseElementNode extends Node {
    type: NodeTypes.ELEMENT // 类型
    ns: Namespace // 命名空间 默认为 HTML，即 0
    tag: string // 标签名
    tagType: ElementTypes // 元素类型
    isSelfClosing: boolean // 是否是自闭合标签 例如 <br/> <hr/>
    props: Array<AttributeNode | DirectiveNode> // props 属性，包含 HTML 属性和指令
    children: TemplateChildNode[] // 字节点
  }
  ```

- parse本质作用：将template转为AST
- 实现思路：
  - 使用正则表达式匹配出开始标签、文本节点、结束标签的位置
  - 使用指针root和curParent记录根节点和当前节点，使用栈存放临时节点，目的是为了记录节点之间的父子关系，并且最终返回root对象，也就是template对应的AST

### generate函数

- parse本质作用：根据AST生成code字符串

- 生成虚拟节点：`_v` 函数用于生成文本节点；`_c` 函数用于生成组件节点或普通元素节点

- 实现思路：

  - AST进行递归，将其孩子节点的信息传给相应的辅助函数，拼接出code字符串

    - 后续：

      使用`new Function	`将code字符串编译解析，获得可以被调用的render函数

      render函数需要根据vue实例中的信息动态地渲染模板，所以需要能够访问到vue实例中的内容。使用`with`函数将vue实例放到作用域链的最开始，这样就可以通过this访问到vue实例中的内容

### vue2的diff算法

diff算法的本质作用：在更新dom树的过程中，通过使用diff算法，来最小化对真实dom的操作，从而节约开销

diff算法的本质：在同一层上进行新旧子元素的对比，根据新子元素数组调整旧子元素的子结构，而涉及到子元素的差异，使用patchNode进行递归处理

diff算法的设计与实现理解：

| <img src=".\ref_img\diff算法-1.jpg" alt="diff算法-1" style="zoom: 67%;" /> | <img src=".\ref_img\diff算法-2.jpg" alt="diff算法-2" style="zoom: 67%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



## vite



## nodejs

### 基础概念

1. 服务器：处理用户的各类请求并且响应用户

2. nodejs：一个开源和跨平台的JavaScript运行时环境，js通过nodejs可以连接服务器，访问本地文件等，使js可以运行在服务器。

3. node的非阻塞范式，处理高并发

   - nodejs的单线程指的是当函数调用栈中有函数在运行，js是不能处理其他请求的
   - 当在node中创建一个服务器，node会开辟一个线程来处理请求，同时初始化一个调用栈
   - 异步模块：一个任务中的同步操作在调用栈中很快地被执行了，任务中的异步操作则进入异步模块来执行。异步模块是多线程的。当执行结束后有回调函数，则把回调函数放入对应的任务队列，以此来进行事件循环。
   - 事件循环：node中有多个任务队列（timer、poll、check），异步模块也有任务队列（nextTick、micro）。当调用栈为空时（调用栈同步任务完成），会检查这些队列中是否有任务，并且按照一定的顺序将这些队列中的任务逐一执行。这一整个过程叫做事件循环。

4. 异步编程+流程控制

   - 原因：由于node中的非阻塞范式，执行异步操作的时间不同，导致回调函数进入任务队列和最终执行的顺序难以确定，因此根据业务的需要，要做出符合要求的流程控制。

   - 解决方案

     | 流程要求 | 回调函数     | promise          | async、await                           |
     | -------- | ------------ | ---------------- | -------------------------------------- |
     | 顺序执行 | 回调函数嵌套 | `.then`链式调用  | 语法糖：使用同步的书写格式来写异步代码 |
     | 同步执行 | 中间变量控制 | `Promise.all`Api | 同promise                              |

5. 模块、包：

   5.1 CommonJs

   - 模块：一份独立的js文件对应一个自己的module对象，通过`exports`导入，提供一些函数、对象、变量的js文件，有自己的作用域，同时可以通过`require`导出
   - `require()`:
     - 核心模块：随node一起安装，模块名
     - 第三方模块：npm安装，安装在`node_moudles`，模块名
     - 自己写的模块：路径

   5.2 ESmodule

   - 使用export，import导出导入，配置`package-json`中`"type": "module"`

   5.3 区别（待完善）

   CommonJs在运行时加载模块，ESmodule在编译时加载模块

6. npm（Node Package Manager）：用于管理nodejs应用程序所需的模块和模块之间的依赖关系

   - 包：包是一个可以安装到 Node.js 应用程序中的软件包，它可以包含一个或多个模块，以及其他必要的资源。包可以通过 `npm` 进行管理，并且可以在多个应用程序间共享。
   - package.json：用于定义包，该文件包含了包的元数据，如：name、description、version、license、author、dependencies等

7. 事件驱动程序

   - EventEmitter：EventEmitter类用来实现node中的事件驱动，核心就是事件触发`new EventEmitter().emit(event)`与添加事件监听器功能`new EventEmitter().addEventListener(event,handler)`的封装。
   - node中支持事件响应的模块是的`EventEmitter`子类，如http 、fs等

8. Buffer：Buffer 类在 Node.js 中主要用于处理二进制数据。可以将图片文件等二进制内容读入缓冲区，并进行操作，例如读取、写入、转换编码格式等。主要的原因在于js只有处理字符串的api，难以处理以二进制形式存储的网络请求、图片、文件等。

9. Stream模块

   - 目的：就是为了处理端到端的数据交换

   - I/O操作：网络请求、文件读取等
   - 流模式：发送方->缓冲区->接收方，流模式是将大量数据分割成小块，逐块地处理并传输，这样可以保证数据的流畅接收。在 Node.js 中，stream 模块提供了一种实现流模式的方法。通过流模式，我们可以避免将整个文件一次性读入内存，从而降低内存压力，提高程序效率。
   - Stream：提供流接口的api，提供了各种流的实现，如可读流，可写流和双工流。它们都是基于EventEmitter的，所以它们可以绑定事件以监听数据的流动。

10. nodejs在项目中的应用

    1. 服务器端渲染：在服务器运行js并且请求后端数据，将最终渲染好的页面发送给浏览器运行
    2. 写后台：使用nodejs编写后端逻辑，给前端提供访问数据的接口
    3. 提供npm包管理器：可以方便地安装和管理 Vue 相关的开发工具和第三方库。

## 计网基础

### web存储

#### cookie

1. 简述：第一次请求一个页面时，服务器可以在HTTP响应头中设置cookie信息，告诉浏览器在下次请求时需要携带这些cookie信息。当浏览器接收到这样的HTTP响应时，会自动将cookie保存在本地，并在下次请求时自动将cookie信息包含在请求头中一起发送给服务器，以便服务器能够获取并使用cookie信息。

   请求端发送cookie

   ```
   Cookie: name=xxx
   ```

   响应端设定cookie中每条的属性

   ```
   Set-Cookie: name=value; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Path=/
   ```

2. 加密和设置有效期：cookie是存储在浏览器中的，可以被用户或第三方工具进行访问或修改。因此，对于包含敏感信息的cookie，服务器需要采取一些措施来保护其安全性，例如使用加密算法对cookie进行加密，限制cookie的有效期等。

3. cookie的常用属性

   - 生命周期：Expires到期时间，Max-Age时间间隔，浏览器收到报文计算
   - 作用域：cookie会绑定域名+路径，如果将path设置为/，那么域名下的任意路径都可以使用path
   - 安全相关：-

#### localStorage&sessionStorage

前端应用程序生成或维护的数据，长期保存在本地存储。同时不像cookie会在http请求中发送。是HTML5新增的一种本地存储机制。有相关的api对其进行设置获取移除等。有常用的 `localStorage` 和`sessionStorage` 

1. 生命周期

localStorage：存储的数据没有过期时间，除非被手动删除，否则一直存在。

sessionStorage：存储的数据只在当前会话有效，当浏览器窗口关闭后，数据就被清空了。但是页面刷新不会影响它

2. 作用域

localStorage：存储的数据是在同一个域名下共享的，不同的页面可以共享同一组 localStorage 数据。

sessionStorage：存储的数据是在同一个窗口（或者标签页）下共享的，不同的窗口（或者标签页）之间无法共享 sessionStorage 数据。

3. API

localStorage 和 sessionStorage 的 API 非常相似，都是通过键值对的方式来存储数据。

使用 localStorage 和 sessionStorage 时需要注意的是，它们只能存储字符串类型的数据，如果需要存储其他类型的数据，需要先将其转换为字符串格式。

（待学习考证）

| 特性         | cookie                           | localStorage                               |
| ------------ | -------------------------------- | ------------------------------------------ |
| 存储容量     | 最多 4KB                         | 最多 5MB                                   |
| 有效期限     | 可设置失效时间                   | 可永久保存，除非主动删除或清除缓存         |
| 存储位置     | 存储在客户端和服务器端           | 只存储在客户端                             |
| 作用范围     | 作用于所有同源的页面             | 作用于所有同源的页面                       |
| 跨域支持     | 支持跨域设置                     | 不支持跨域设置                             |
| 自动发送     | 自动随着 HTTP 请求发送           | 不会随着 HTTP 请求发送，需要手动读取和写入 |
| 数据类型     | 只支持字符串类型                 | 支持字符串、数字、布尔、对象等数据类型     |
| 安全性       | 存在跨站脚本攻击风险             | 不存在跨站脚本攻击风险                     |
| 存储位置限制 | 存储位置受限于域名和路径         | 没有存储位置限制                           |
| 清除方法     | 可以通过设置过期时间或者手动清除 | 可以手动清除                               |

### HTTP基础知识

#### http含义

超文本传输协议（Hypertext Transfer Protocol），是一种用于传输超媒体文档（例如 HTML）的应用层协议。HTTP 是一个客户端-服务器协议，其中客户端向服务器发送请求，服务器回复客户端的响应。

#### 报文结构

注释：1. 这里的version指的是http的版本 2. 空行用来分隔头部和实体的

| <img src=".\ref_img\req.png" alt="lifecycle" style="zoom: 67%;" /> | <img src=".\ref_img\res.png" alt="lifecycle" style="zoom: 67%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

#### 请求方法

1. 常用的各种方法：

GET: 通常用来获取资源

HEAD: 获取资源的元信息（资源的大小、类型、是否存在等信息）

POST: 提交数据，即上传数据（创建一个新的数据）

PUT: 修改数据（更新或替换服务器上的资源）

DELETE: 删除资源(几乎用不到)

OPTIONS: 列出可对资源实行的请求方法，用来跨域请求

==CONNECT==: 建立连接隧道，用于代理服务器

==TRACE==: 追踪请求-响应的传输路径

2. GET和POST的区别

   |          | GET                                           | POST                               |
   | -------- | --------------------------------------------- | ---------------------------------- |
   | 语义     | 获取资源                                      | 提交创建新的资源                   |
   | 缓存     | 浏览器的缓存目录会保存GET的响应，以便下次使用 | POST默认不会                       |
   | 参数编码 | 只接受URL编码                                 | 多种编码方式                       |
   | 参数位置 | 只在URL中传递                                 | 在请求体中传递，更加安全           |
   | 幂等性   | 同一个GET请求幂等（结果一致）                 | 同一个POST请求不幂等（结果不一致） |

#### URL

1. 作用：(Uniform Resource Locator，统一资源定位符)用于区分互联网上的不同资源

2. 结构

   <img src=".\ref_img\URL.png" alt="lifecycle" style="zoom: 67%;" />

   - 协议
   - 主机+端口
   - 路径
   - 查询参数
   - 锚点

#### 状态码

服务器向客户端返回的状态码，用于表示客户端请求的处理结果

- **1xx**: 表示目前是协议处理的中间状态，还需要后续操作。

- **2xx**: 表示成功状态。（200）

  204 表示成功处理了请求但是没有返回任何内容

- **3xx**: 重定向状态，资源位置发生变动，需要重新请求。（301 302 304）

  301是永久重定向，意味着请求的资源已经被永久移动到了一个新的位置，并且所有后续请求都应该使用新的 URL。301 响应的资源被浏览器缓存，因此在再次请求相同资源时，浏览器会自动使用重定向后的 URL。

  302 是临时重定向，表示请求的资源暂时在不同的位置，所有后续请求都应该使用新的 URL，但未来可能会改变回原始位置。302 响应的资源不会被浏览器缓存，因此在再次请求相同资源时，浏览器会再次发送原始请求并获取响应。

  304 使用浏览器缓存的资源版本

- **4xx**: 请求报文有误。（400 403 404）

- **5xx**: 服务器端发生错误。（500 502 503）

#### http的特点

1. 优点：

   - HTTP 协议采用文本形式进行通信，数据传输格式易于理解，协议本身也非常简单，容易实现和调试。
   - 支持多种媒体类型。（文本、图片、音频、视频）
   - 应用广泛、跨平台

2. 缺点：

   - 明文传输导致的安全性低问题。
   - HTTP 协议传输的数据包含较多的头部信息导致传输效率较低问题。

3. http的无状态

   每个请求都是独立的，服务器不会保存任何客户端请求的信息，也就是说服务器无法确定该请求是否来自同一客户端，也无法判断该请求之前是否有过相同的请求。

   这样做保证了各请求之间的独立性，可扩展性，减轻服务器的负担，但也无法维持客户端的状态，所以引入了cookie、session等

### http的版本对比

<img src=".\ref_img\http版本.jpg" alt="http版本"  />


#### Accept 系列字段

为了指定发送方（希望接收的数据）和接收方（发送给发送方的数据）body部分的数据的数据类型、字符集、压缩方式、支持语言，设定了一系列字段，下面是两个例子

```http
GET /example HTTP/1.1
Host: example.com
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
Accept-Language: en-US,zh-CN
Accept-Encoding: gzip, deflate
Accept-Charset: charset=utf-8
```

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Language: en-US
Content-Encoding: gzip

（HTML content）
```

#### 定长和不定长的数据的传输

1. 对于确定长度的数据，需要在响应报文头部指定内容的长度，`Content-Length`
2. 对于不定长读的数据，使用分块编码传输数据，需要在响应报文头部`Transfer-Encoding:chunked`设定，这样一来`Content-Length`会被忽略，同时会基于长连接持续推送动态内容。且每个分块的长度不超过8字节。

#### 范围请求处理大文件传输

范围请求（Range Request）是指客户端请求服务器返回文件的部分内容，而不是完整的文件。这个功能可以用于多线程下载、断点续传等场景，避免了重复下载整个文件。

#### http处理表单提交的数据

一般是通过POST方法提交表单数据，有两种常用的配置设置：

1. `Content-Type:application/x-www-form-urlencoded`

   转化为键值对用&连接，使用URL编码

   ```
   {a: 1, b: 2} -> a=1&b=2 ->"a%3D1%26b%3D2"
   ```

2. `Content-Type:multipart/form-data`

   每一个表单元素都是独立的资源表述。

#### 队头阻塞问题http1.1的解决

队头阻塞：指的是当一个请求被阻塞时，它之后的所有请求也会被阻塞。

http/1.1的策略

- 域名分片

  域名分片指的是将一个网站的内容放置在不同的域名下，例如将静态资源放在cdn.example.com，将网站接口放在api.example.com，将主站放在www.example.com，这样可以利用浏览器的并发请求限制，同时提高网站的加载速度。

  在同一台服务器的情况下，浏览器对于同一个域名的并发请求数量是有限制的，但是不同的域名是独立的，因此可以建立更多的连接，提高并发请求的数量。

  需要注意的是，由于域名分片会增加DNS解析的开销，并且在不同的域名之间进行请求也会带来一定的网络延迟，因此需要权衡利弊，根据具体的情况选择是否使用域名分片。

- 并发连接：使用多个连接并发传输请求和响应，可以提高吞吐量，需要避免过度带来的开销增大

- 持久连接，复用连接来减少连接建立和关闭的开销


#### http代理

1. 含义：扮演中间人的角色，对于客户端，表现为服务器接收请求，对于服务器，表现为客户端发送请求。它可以拦截客户端和服务器之间的通信，对数据进行处理和过滤，从而实现各种功能，如负载均衡、安全防护、数据缓存等。

2. 优点：

   - 缓存：代理服务器可以缓存一些页面，这样请求不需要到达源服务器

   - 负载均衡算法：代理服务器可以通过一些负载均衡算法（轮询，随机，加权轮询等），将请求分给不同的源服务器，避免单个服务器负载过高

   - 安全保障：

     心跳机制是用于监控后台服务器的一种方式。代理服务器会定期向后台服务器发送心跳包，检测服务器是否正常运行。如果发现某台服务器无法响应心跳包，说明这台服务器出现了故障，代理服务器会将其从服务器集群中剔除，避免继续向故障服务器发送请求。

     代理服务器还可以对数据进行过滤和限流，以保护服务器的安全。对于非法 IP，代理服务器可以通过 IP 黑名单或白名单等方式进行限制，禁止或允许这些 IP 的访问。对于恶意请求，代理服务器可以使用各种防护措施，如验证码、限制请求频率等手段，防止服务器被攻击和滥用。

3. 可以通过使用代理协议来解决在请求头中经过不同的代理服务器需要不断修改请求方IP（`X-Forwarded-For`属性）的问题

#### http缓存

1. 强缓存

   强缓存（也称为本地缓存）是指在客户端（例如浏览器）本地缓存中存储的响应数据，客户端可以直接使用该缓存数据而无需向服务器发起请求。强缓存的优势在于可以有效地减少对服务器的请求，从而提高页面加载速度和用户体验。

   强缓存的实现依靠 HTTP 响应头中的 Expires 和 Cache-Control 属性。Expires 是一个表示缓存过期时间的日期时间值，而 Cache-Control 是一个表示缓存策略的指令集合。当客户端请求一个资源时，如果该资源的缓存仍然有效，则服务器返回 304 Not Modified 状态码和空的响应体，客户端直接从本地缓存中获取数据。

2. 协商缓存

   协商缓存是一种缓存策略，通过在请求头和响应头中添加特定的信息来判断资源是否需要从服务器获取，以减少不必要的数据传输和服务器负载。

   协商缓存的实现需要用到两个 HTTP 头：`If-Modified-Since` 和 `Last-Modified`，以及 `If-None-Match` 和 `ETag`。客户端第一次请求该资源时，服务器会将资源的内容和 Last-Modified、ETag 值一起返回给客户端。

   1. Last-Modified 和 If-Modified-Since

   当客户端发送请求时，如果请求头中包含 `If-Modified-Since`，那么就说明客户端已经有了该资源的一个副本，并且副本的最后修改时间为请求头中的 `If-Modified-Since` 字段的值。服务器会比较该时间戳和该资源的最后修改时间 `Last-Modified` 是否一致，如果一致，则服务器会返回 HTTP 304 响应，告诉客户端可以使用缓存的资源，否则会返回新的资源。

   2. ETag 和 If-None-Match

   与 Last-Modified 和 If-Modified-Since 类似，ETag 和 If-None-Match 也是配对出现的。ETag 是服务器为每个资源生成的唯一标识符，客户端在下一次请求时可以在请求头中添加 `If-None-Match` 字段，值为上一次请求返回的 `ETag` 值。服务器会比较该值和当前资源的 `ETag` 是否一致，如果一致，则返回 HTTP 304 响应，告诉客户端可以使用缓存的资源，否则返回新的资源。

   协商缓存的优点是可以让客户端和服务器之间传输的数据量更小，减少网络流量和服务器的负载。此外，它也能更精确地判断是否需要使用缓存，因为它会比较资源的修改时间或唯一标识符，而不是仅仅比较缓存是否过期。

3. 代理缓存

   代理缓存是指在代理服务器上缓存请求的响应，以减轻源服务器的负载并提高访问速度。

   **服务器的缓存控制**，在`Cache-Control`响应头字段设置：

   `public`表示响应可以被缓存在代理服务器上，也可以共享给其他客户端

   `private`表示响应只能在客户端保存，而不能保存在代理服务器上

   `must-revalidate`的意思是客户端缓存过期就去源服务器获取，而`proxy-revalidate`则表示代理服务器的缓存过期后到源服务器获取。它们都是在响应中设置的指令，好让请求方在缓存过期后获得新的缓存。

   `s-maxage`用于设定响应在代理服务器上的缓存时间

   **客户端的缓存控制**，在`Cache-Control`请求头字段设置：

   `max-stale=5`表示客户端到代理服务器上拿缓存的时候，即使代理缓存过期了也不要紧，只要过期时间在**5秒之内**，还是可以从代理中获取的。

   `min-fresh=5`表示代理缓存需要一定的新鲜度，不要等到缓存刚好到期再拿，一定要在**到期前 5 秒**之前的时间拿，否则拿不到。

   以上两个属性只在协商缓存中有效，需要携带协商缓存相关的请求头（例如 `If-Modified-Since`、`If-None-Match` 等）

   `only-if-cached`这个字段加上后表示客户端只会接受代理缓存，而不会接受源服务器的响应。如果代理缓存无效，则直接返回`504（Gateway Timeout）`。
   
#### https

1. 概念导图

<img src=".\ref_img\https.jpg" alt="https" style="zoom: 67%;" />

2. 验证数字证书流程

   <img src=".\ref_img\证书的校验.png" alt="证书的校验" style="zoom: 67%;" />

3. 基于RSA算法的TLS握手流程图

   <img src=".\ref_img\基于RSA算法的TLS握手.png" alt="基于RSA算法的TLS握手流程图" style="zoom: 67%;" />

###    跨域

   1. 基础概念

      - 同源：如果两个url具有相同的协议、主机名、端口号，则它们被认为是同源的。同源策略是浏览器实现的一种安全机制，目的是为了保护用户的隐私安全。

      - 域名（Domain Name）：是一个字符串，代表一个网络上的计算机的地址。它是对于网络中使用数字地址（如IP地址）的一个抽象层次。域名是用来替代数字地址，以方便用户记忆和识别。

        www.example.com：com 是顶级域名（TLD，Top-Level Domain），表示商业性质的域名；example 是二级域名，是一个示例域名，用于说明域名的使用方法；而 www 是主机名，表示一个 Web 服务器上的某个网站。

      - IP地址：计算机在 Internet 中的唯一标识，由网络号+主机号组成。

      - 端口号：用于标识一个应用程序或服务的数字，通过端口号，可以将不同的应用程序或服务区分开来，确保它们能够同时在同一台计算机上运行。

        当使用http协议时，服务器会在80端口监听http请求，而如果在服务器上设定了其他端口号监听，那么在发送的url中就需要写明这个端口号。

      - DNS：DNS (Domain Name System) 是一个基于分布式数据库的系统，它把 Internet 上每个主机名和 IP 地址进行了映射，使得人们可以通过主机名访问网站，而不需要记住每个网站的 IP 地址。

      - AJAX：Ajax（Asynchronous JavaScript and XML）是一种用于创建异步Web应用程序的技术。它使用JavaScript和XML来实现异步的、动态的Web应用程序，可以在不刷新整个页面的情况下更新页面的部分内容。

        Ajax技术的核心是XMLHttpRequest对象，它可以通过JavaScript代码向服务器发送HTTP请求，获取服务器返回的数据，然后通过JavaScript来更新页面的内容。

      - 跨域请求：当浏览器向目标url发送请求，当前的url和目标url不同源，就称为跨域请求

      - 安全跨源请求流程：浏览器发送请求，请求中包含origin->服务器确定origin是被允许的源，服务器发送包含`Access-Control-Allow-Origin`响应->浏览器拿到服务器发送的结果

   2. cors

      1. 安全（简单请求）请求，满足下面两个条件之一：

         - 请求方法：GET/POST/HEAD

         - 请求头头字段的取值范围：Accept、Accept-Language、Content-Language、Content-Type（但仅限于特定值：application/x-www-form-urlencoded、multipart/form-data、text/plain）

      2. 安全请求的跨域流程

         浏览器向请求中添加origin字段，说明请求是来自的源，服务器确定origin是被允许的源后，将在响应中添加`Access-Control-Allow-Origin`字段（这个字段中包含被允许的url），浏览器可以获取响应结果

      3. 非安全请求

         非安全请求需要增加预检的过程，具体情况如下：

         1. 发送预检请求，使用OPTIONS方法发送预检请求

            ```http
            OPTIONS / HTTP/1.1
            Origin: 当前地址
            Host: 目标地址
            Access-Control-Request-Method: 发送请求的方法
            Access-Control-Request-Headers: 发送请求头中的字段
            ```

         2. 发送预检的响应

            ```http
            HTTP/1.1 200 OK
            Access-Control-Allow-Origin: *|允许的源
            Access-Control-Allow-Methods: GET, POST, PUT|允许的方法
            Access-Control-Allow-Headers: X-Custom-Header|允许的请求头字段
            Access-Control-Allow-Credentials: true|允许发送cookie
            Access-Control-Max-Age: 1728000|预检请求的有效时间
            Content-Type: text/html; charset=utf-8
            Content-Encoding: gzip
            Content-Length: 0
            ```

         3. 之后走安全请求的流程

   3. JSONP

      JSONP利用了script标签不受跨域限制的特性，在服务端响应一个特定格式的JavaScript函数调用，前端通过动态插入script标签并指定src地址，来获取服务端数据。服务端响应的数据会被包裹在回调函数中，并作为参数传递给前端函数执行。因为script标签只能发送GET请求，所以JSONP也只能用于GET请求。

      具体的代码参考笔记来源部分大佬的博客

   4. Nginx

      1. 正向代理和反向代理

         - 正向代理帮助客户端访问客户端访问不到的服务器，并将结果返回给客户端

         - 反向代理拿到客户端请求，并且将请求发送给其他的服务器，主要应用场景是维持服务器集群的负载均衡

      2. Nginx作为高性能的反向代理服务器，在Nginx的配置中添加相关的跨域信息。从而客户端发送请求到代理服务器，代理服务器发送请求到源服务器，从而解决跨域问题。

### `FormData`对象

   - 这是一个表单数据对象，可以用来捕获html表单，同时很多方便的方法自己添加字段，如`formData.append(key,val)`，之后使用一些网络方法提交这些表单数据。
   - 本功能中使用它来像后台发送文件，发送包含文件的请求需要在请求头中设置`'Content-Type': 'multipart/form-data'`
   - flask中`request.files`是一个字典，保存了请求中所有文件名和文件内容形成的键值对，可以用来保存文件到后台

### http所有笔记来源

[（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904100035821575)

[3.1 HTTP 常见面试题 | 小林coding (xiaolincoding.com)](https://xiaolincoding.com/network/2_http/http_interview.html#http-基本概念)

## 补充

### 服务器端渲染（SSR）

基于nodejs serve服务环境进行渲染，所有的html代码在服务器端渲染。

优点：首屏加载速度快，利于seo
