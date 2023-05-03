### html5新标签&实操案例

#### 新元素（新标签）

1. 主要的新标签 *列举内容非常有限，描述也不会面面俱到，主要是为了输出知识*

   ---

   - header：头部标签。用于页面的页眉，分区的头部或者文章的头部（包括标题、时间、作者），可以包含导航信息或者摘要信息等

   * footer：尾部标签。主要用于标记页面的页脚
   * nav：导航标签。标记页面的导航栏
   * section：分区标签。将页面相关联的几个独立内容整合在一个区域，类似于一个分组
   * article：文章标签。将一篇文章的所有信息整合在一起，具有独立性，在页面上作为一个整体增加或删除
   * aside：侧边栏标签。提示浏览器这里是辅助内容，当设备显示屏幕小的时候，可以考虑不优先展现

   ---

   - time：时间标签，通过文本部分展现页面的样式，通过datetime属性告知浏览器准确的时间，该属性的值需要符合一些标准的时间格式

     ```html
     < time datetime="2020-07-04">07/04/2020</time>
     ```

   - video：视频标签，具体用法看案例2

2. 为什么要引入新元素？

   1. 新标签将页面上的内容的含义进行了标记，使得浏览器知晓，以便浏览器可以选择最佳的方式呈现页面

   2. 使用新元素标记的页面结构更加清晰，方便开发和维护人员的阅读理解

#### 案例一：制作简易导航栏

```css
nav {
    background-color: antiquewhite;
    margin: 10px;
}

nav ul {
    /*消除列表的原本格式*/
    list-style-type: none;
    /*原本的列表是有自己的外边距的，设置为0可以帮助ul贴在nav内部*/
    margin: 0px;
    /*为文字和ul之间设置距离*/
    padding: 5px 0px;
}

nav li {
    display: inline;
    /*为项目元素之间设置一些外边距*/
    padding: 5px 10px;
}


/*为超链接设置一定的样式*/

a {
    /*去除a标签本来的样式，无论什么情况下的*/
    text-decoration: none;
}


/*呈现的样式和访问后的样式相同*/

nav ul li a:link,
nav ul li a:visited {
    color: #954b4b;
    text-decoration: none;
    font-weight: bold;
    /*增加阴影*/
    text-shadow: 1px 1px 3px #e2c2c2;
    /*设置为大写字母*/
    text-transform: uppercase;
}


/*悬浮时候的样式*/

nav ul li a:hover {
    color: white;
    background-color: #954b4b;
}


/*为当前所在页面设计不同的样式*/

nav ul li.selected {
    background-color: #c8b99c;
}
```

- 根据开发者工具观察：ul的盒子和li的盒子所装的内容都是链接，ul的内容没有包括li的内边距，也就是li不像是放在ul中的盒子，进一步测试后发现是因为li设置成了内联展示

#### 案例二：添加视频

*简易操作，因为对于视频知识储备有限*

```html
<video controls poster="images/poster.png" width="512" height="288">
<source src="video/tweetsip.mp4">
<source src="video/tweetsip.ogv">
<source src="video/tweetsip.webm">
</video>
```

- 由于不同浏览器所支持的视频格式各有不同，需要配合source标签指向几个格式不同的备选视频所在位置
- autoplay 布尔属性，添加了就表示需要自动播放视频
- controls 布尔属性，添加了就表示需要添加浏览器提供的控件
- poster：为视频指定海报，会在视频开始前用它做封面
- width、height：指定长宽，如果和视频本身的比例不和，浏览器会自动添加黑色区域补齐
- mp4、ogg、webm是常用的视频容器（包含视频编码+音频编码），分别对应三种不同的视频格式



