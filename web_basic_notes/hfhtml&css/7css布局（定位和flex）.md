## 定位

position有五个主要的属性值，可以设置不同方式的定位。同时配合top、bottom、right、left可以指定位置，它们的值也可以设定为负数。

### 五种定位方式

#### static：

是元素定位的默认行为，和流的规则是对应的

#### absolute：

1. 当父容器设定了**规则：`position:relative`或者`position:absolute`或者`position:fixed`或者`position:sticky`，换言之，不是默认的static**，那么子元素就是以父元素为基准定位的
   - 父元素设定了absolute、fixed的情况下，父元素自己会从流中删除，而设定了relative和sticky则不会
   - 在父容器中不设定top等属性的值的情况下，父容器不会改变它的定位
2. 当**父容器**的元素使用默认的static，子元素设定的absolute就是基于html标签定位的
3. 无论是父元素还是子元素都可以使用top、bottom、right、left设定偏移量

#### relative：

这种偏移是相对于元素自身本来应该处于的位置而言的

这样的定位方式貌似也可以使用transfrom中的translate替代

```css
div{
/* relative的另一种定位的含义是相对与自己移动 */
      /* position: relative;
      left: -10%; */
      transform: translateX(-10%);
}
```



#### fixed：

使用这个方式定位的元素是基于浏览器窗口定位的，并且它不会随着滚动条滚动

#### sticky：

当元素相对于浏览器窗口而言，滚动到了设定好的位置，元素会固定不动，但是元素只会在自己的父容器中，如果父容器随着滚动条滚掉，该元素也会一起出去

小技巧：`top:10px;`就相当于从标准处推出10px的长度

### Z-index

* 设定了absolute、fixed元素从流中剔除，但是它相当于一层覆盖在原来的页面上，无论是块元素还是内联元素都会忽略它
* z-index：相当于垂直于页面的坐标轴，为定位的元素设置这个值可以决定它与用户之间的距离，或者两个元素谁上谁下，这样可以决定最后是哪一个元素覆盖在上面

## Flex弹性盒子

### 为什么要使用弹性盒子

1. 可以让子元素在父元素中居中
2. 可以让多个子元素在内容不一致的情况下，仍然可以具有相同的大小

### 弹性盒子模型

![弹性盒子模型](E:\typora_space\images\弹性盒子)

### 使用弹性盒子的方法

- 在父容器中声明`display:flex;`
- 父容器成为了flex container
- 父容器中的子容器成为了flex item

### 弹性盒子的样式的设置（container）

#### 列or行

`flex-direction:row/column/row-reverse/column-reverse;`

#### 换行

如果需要盒子内的items多行显示，那么对于container来说要设置允许换行选项，同时在子元素的flex属性中指明每个item所占的父容器的大小

`flex-wrap:wrap;`

#### 简写方法

`flex-flow:row wrap;`

#### 对齐设置

由于内联元素的大小不一定会改变，所以对齐设置可以样式更美观

1. align-items：

   - 作用：垂直方向上的位置设定

   - 属性值：center（在父容器里面垂直居中）、flex-start（在父容器的顶部）、flex-end（在父容器的底部）...

2. justify-content：
   - 作用：水平方向上的位置设定
   - 属性值：space-between（贴到父容器）、space-around...

*通过上面的两个属性就可以对齐的样式，需要在父容器的选择器中设置*

注意：如果使用了`flex-direction:column`，那么以上两个属性的align-items管水平方向，justify-content管竖直方向

### 弹性盒子的样式的设置（item）

#### 设置盒子的大小

1. `flex:1;`，会作为一种比例占据父容器的内容部分，比如一个子元素设定为1另一个设定为2，则将父容器的内容划分为3分，一个占1分另一个占2分。
2. `flex:1 200px;`，首先给这个元素200px的空间，剩余的父容器空间按比例分配
3. flex-item之间的的外边距是不会交叠的，除此之外可以和往常一样设置外边距

#### 设置盒子的出现顺序

使用`order`属性，order的数值越大，项目越靠后