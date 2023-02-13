### 理解导入

为什么要使用迭代器？

通过程序化的方式迭代集合中的每一个对象，与传统的使用变量迭代的方式相比，消除复杂性并减少循环中的错误

### 可迭代对象

#### 实现简单的迭代器

1. 返回一个包含next方法的对象

2. next方法返回{value，done}

3. 在内部设置一个全局变量i用于记录循环的情况，确定每次的value和done的取值

   ```js
   function createIterator(arr){
       let i=0
       return{
           next:function(){
               let done;
               let value;
               if(i>=arr.length)
                   done=true;
               else
                   done=false;
               if(!done)
                   value=arr[i++];
               return {
                   done:done,
                   value:value
               }
           }
       }
   }
   ```

   

#### 可迭代对象

ES6中所有的集合对象（数组，map，set）和字符串都是可迭代对象

它们都有属于自己的内建迭代器，大致使用情况如下

| 例子  | values()          | keys()            | entries()                 |
| ----- | ----------------- | ----------------- | ------------------------- |
| array | 值组成的迭代器    | 序号组成的迭代器  | [序号，值]组成的迭代器    |
| map   | value组成的迭代器 | key组成的迭代器   | [key，value]组成的迭代器  |
| set   | value组成的迭代器 | value组成的迭代器 | [value,value]组成的迭代器 |



#### 创建可迭代对象

如果需要一个对象是可迭代对象，通俗可以理解为能够通过`for...of`循环遍历该对象，那么该对象需要实现名为`Symbol.iterator`的特殊方法，也可以给`Symbol.iterator`添加一个生成器

- 当循环开始时，该方法被 `for..of` 结构调用，并且它应该返回一个带有 `next` 方法的对象。
- 对于每次迭代，都会为下一个值调用 `next()` 方法。
- `next()` 方法应该以 `{done: true/false, value:<loop value>}` 的格式返回一个值，其中 `done:true` 表示循环结束。

下面将对象range变为可迭代对象

1. 原本的range对象

```js
let range={
    from:1,
    to:5
}
```

2. 给range对象实现了`Symbol.iterator`方法

```js
let range={
    from:1,
    to:3,
    [Symbol.iterator](){
        //返回带有next方法的对象
        return{
            current:this.from,
            last:this.to,
            //每次循环调用next，当前数值+1
            next(){
                if(this.current<=this.last)
                    return{
                        done:false,
                        value:this.current++
                    }
                else
                    return{
                        done:true
                    }
            }
        }
    }
}
```

3. 可以使用`for...of`对range对象进行迭代

### generator 函数

generator不同于普通的函数，可以产生数据流，可以把generator理解为一个生成器对象，也可以把它想象成一个可以返回迭代器的函数（返回的对象可以使用next方法）。它有自己的next方法可以获取到每次产出的数据，每次next返回一个json对象，`{done:true/false,value:<loop value>}`

以下是一个简单的示例，语法就是在函数声明后加上一个`*`,`function*`

```js
//定义生成器
function* generator(){
    yield 1;
    yield 2;
    return 3;
} 
//创建生成器
let gen=generator();

//逐步拿到数据流
let json=gen.next();
alert(json)
```

一个细节就是当在generator中return一个值的时候，done:true，那么这个值在迭代的过程中就不会被返回了，解决方法可以把所有的数值都通过yield返回

#### 给迭代器传递参数

参数通过next进行传递，会赋值给上一个yield的变量，因此第一次调用next的时候传参是无效的

#### 在迭代器中抛出错误

错误通过next进行传递，错误会赋值给上一个yield的变量，需要在生成器的内部进行异常处理，否则后续的yield就会终止

#### 生成器返回语句

- 带有返回值，作为该生成器对象的返回值，且{done=true，value=返回值}
- 不带有返回值，{done=true，value=undefined}
- 返回值通过`for-of`循环是迭代不了的，因为`done==true`

#### 委托生成器

好几个生成器可以通过`yield*`写在一个同一的生成器中，该生成器作为它们的代理生成器



### generator可迭代

generator对象本身自带next函数，且next的返回值为`{done:true/false,value:<loop value>}`类型。

1. 可以使用`for..in`遍历generator对象
2. 可以使用spread语法拆分generator对象

#### 使用generator来实现对象的`Symbol.iterator`方法

```js
let range={
    from:1,
    to:5,
    *[Symbol.iterator](){
        for(let i=this.from;i<=this.to;i++)
            yield i;
    }
}
```

原本的思路是`Symbol.iterator`返回一个带有next方法的对象，在迭代的过程中使用；现在`Symbol.iterator`作为一个生成器直接调用自己的next方法，同样实现了对象的迭代。

