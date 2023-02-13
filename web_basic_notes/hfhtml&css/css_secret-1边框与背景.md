# 边框

## 制作透明边框

### 原理

默认情况下边框是存在背景上面的，此时如果设置边框透明，则效果无法实现

```css
div{
/*设置边框所在的位置裁剪掉背景*/
background-clip:padding-box;
}
```

之后在设置透明边框即可

## 制作双重边框

### 原理

- 因为阴影可以重复添加多个，因此可达到双重边框的效果
- 当不设置偏移量和模糊值的时候，扩张半径就像正投影一样，可以形成边框效果

```css
div{
box-shadow:0 0 0 5px red, 0 0 0 10px blue;
}
```

注意扩张半径是从边框开始的，因此后面的边框会被前面的边框覆盖

# 背景

## 条纹

### 属性

```css
div{
    background-image:linear-gradient([deg],[color][start(%|px)][end(%|px)])；
}
```

1. 条纹的旋转角度，常用的是45deg和90deg
2. 色标：颜色+起始&终止位置，位置可以用px或者%表示，条纹最终的宽度与起始、终止之间的间隔有关
3. 制作条纹的重点
   - 相互间隔的条纹：当**前一个色标的终止==后一个色标的起始**，这两个颜色之间就不会产生渐变的效果
   - 0值的含义：如果后一个色标位置值为0，表示这个位置和上一个位置的数值相等，如果这是第一个位置的色标，那就是0位置。
   - “贴瓷砖”：要设置一个背景的大小，针对这个背景大小来制作条纹，而盒子的背景在默认情况下会自动被这个小背景重复填充
   - 两个及两个以上的linear叠加，后面的是会叠加在之前的下面的

### 样式

- 横向

  默认的角度值是0deg，因此横向条纹无需设置

- 纵向

  使用90deg|to right

- 各种角度

  `linear-grandient`：可以设置45deg效果

  `repeating-linear-grandient`：可以设置任一的角度效果，并且条纹的宽度是起始、终止之间的距离，推荐使用

  **如果要使用百分比指定宽度，最后的色标值为50%，背景图片的形状设置为正方形**

- 配色技巧

  可以在本来就有背景颜色的盒子上添加相互间隔的两种条纹：半透明`hsla(0,0%,100%,.1)`+全透明`transparent`



## 波点

### 属性

radial-grandient()

### 实现

```css
.type11{
            background-color: #655;
            background-image: 
            radial-gradient(tan 30%,transparent 0),
            radial-gradient(tan 30%,transparent 0);
            background-size: 30px 30px;
            background-position:0 0, 15px 15px;
        }
```

技巧就在于对于两层的图片给出不同的的背景定位，就可以形成交错的效果

## 棋盘

### 实现

在30px*30px的方格中，设置上三角和下三角，之后再利用背景定位的不同拼接出棋盘的效果

```css
.type12{
            background-color:#eee;
            background-image: 
            linear-gradient(45deg,#bbb 25%,transparent 0),
            linear-gradient(45deg,transparent 75%,#bbb 0),
            linear-gradient(45deg,#bbb 25%,transparent 0),
            linear-gradient(45deg,transparent 75%,#bbb 0);
            background-position:0 0,15px 15px,15px 15px,30px 30px;
            background-size: 30px 30px;
        }
```



### 伪随机背景

```css
 .type3{
            background: hsl(20, 40%, 90%); 
            background-image: 
            linear-gradient(90deg, #fb3 11px, transparent 0), 
            linear-gradient(90deg, #ab4 23px, transparent 0), 
            linear-gradient(90deg, #655 41px, transparent 0);
            background-size: 41px 100%, 61px 100%, 83px 100%;
        }
```



# 条纹边框

制作信封边框，蚂蚁线

### 基本做法

实际上这是一种伪造的边框，实际上是上背景+底背景实现的

- 上背景：因为linear-gradient可以叠加背景，使用它制作一个纯色背景，作为内容的背景，并且让背景填充padding+content的部分

  ```css
  div{background:linear-gradient(white,white) padding-box}
  ```

- 底背景：因为背景默认都是从边框开始填充的，因此background-origin不用设置，之后只需要用repeating-linear-gradient制作一个倾斜的条纹背景即可

  ```css
  background:
              linear-gradient(#eee,#eee) padding-box,
              /* 如果图片能拼起来就写到50%+背景大小正方形，写0的意思就是和上一个数值一样，比如#fff中的0就是20%的意思 */
              repeating-linear-gradient(-45deg,red 0 12.5%,#fff 0 25%,#58a 0 37.5%,#fff 0 50%)
              0/5em 5em ;
  ```

- 设置一个透明的边框，让底背景显示出来

### 添加动画

- 考虑背景元素，每次移动一个元素的长度（background-size的大小），就相当于页面上每一个元素向前移动了一个元素单位

  ```css
  @keyframes  moving{
              0%{
                  background-position: 0 0;
              }
              100%{
                  background-position: 5em 0;
              }
  
          }
  ```

  

