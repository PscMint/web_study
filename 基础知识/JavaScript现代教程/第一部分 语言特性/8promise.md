## Promise的基本使用

Promise是js中的一个类，通过给它指定一个函数（executor）来构造它。

函数（executor）的参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调。我们的代码仅在 executor 的内部。

当 executor 获得了结果，无论是早还是晚都没关系，它应该调用以下回调之一：

- `resolve(value)` —— 如果任务成功完成并带有结果 `value`。
- `reject(error)` —— 如果出现了 error，`error` 即为 error 对象。

```js
let promise=new Promise(function(resolve,reject){
    //executor
})
```

一个promise对象还具有两个内部属性`state`以及`result`,它们值的变化情况如下：

当promise的state处于fulfilled或者rejected表示该promise已经完成

<img src="..\img\image-20220526192237249.png" alt="image-20220526192237249" style="zoom:67%;" />

注意点：executor只会执行resolve和reject中的一个，重复调用是无效的

通过promise对象的方法可以绑定函数，而这些函数可以获得executor执行后得到的结果（`value`或者`result`）

#### 创建未完成promise

往往适用于不知道结果是否会产生错误的情况，通过编写执行器的逻辑，在这个过程中调用resolve或者reject来完成该promise

```js
new Promise((resolve,reject)=>{
    if condition1{
        resolve();
    }
    if codition2{
        reject();
    }
})
```



#### 创建已完成promise

往往适用于thenable对象，传递then函数的结果，同时返回一个已完成的promise

```js
let promise1=Promise.resolve(42);
let promise2=Promise.reject(43);
```



#### promise结果的后续处理

1. then

```js
//then的第一个函数接收到的参数是resolve运行后的结果；第二个函数接收到的参数是reject运行后的结果
//可以通过多次调用then绑定多个函数
new Promise((resolve,reject)=>{
    //executor
}).then(
    func1(result){//do sth with result
    },
    func2(error){//do sth with err
        
    }    
)
```

2. catch

   专门绑定处理错误的函数，实质上是对`.then(null,func)`的一个封装

3. finally

   `finally` 处理程序（handler）没有参数。在 `finally` 中，我们不知道 promise 是否成功。没关系，因为我们的任务通常是执行“常规”的定稿程序（finalizing procedures）。

   `finally` 处理程序将结果和 error 传递给下一个处理程序。

基于此，通过then等方法对函数进行绑定，这些函数就像executor执行之后再执行回调函数一样。但是使用promise可以按照自然的逻辑顺序进行编写。

## Promise链

### promise链的形成

每个promise调用then方法之后就会返回一个新的promise对象，

1. 这个新对象then中处理函数的return作为result继续传下去

2. 另一种情况是在then中的处理函数中直接返回一个promise对象，

可以基于此继续调用then方法，以此形成了promise链。下面写两个简单的例子

```js
let promise=Promise.resolve(42);
promise.then(function (res)=>{
             console.log(res)//42
			 return res+1;
             }).then(function(res)=>{
                     console.log(res)//43
			         return res+1;
                     })
```



*注意区分promise链和绑定多个处理程序的区别（使用一个promise多次调用then方法，进行不同的处理），一般来说比较常用的是promise链*

### Thenables

确切地说，处理程序（handler）返回的不完全是一个 promise，而是返回的被称为 “thenable” 对象 — 一个具有方法 `.then` 的任意对象。它会被当做一个 promise 来对待。

这个想法是，第三方库可以实现自己的“promise 兼容（promise-compatible）”对象。它们可以具有扩展的方法集，但也与原生的 promise 兼容，因为它们实现了 `.then` 方法。

## 使用Promise作错误处理

1. catch放在promise链的最后可以进行链上的错误处理，catch就是`.then(null,func)`

2. 处理流程

   <img src="..\img\promise错误处理.png" alt="image-20220605110114625" style="zoom:67%;" />

3. 通过unhandlerejection事件可以捕获到全局err，一般来说是处理不了的（因为之前设定的catch都没捕获到），需告知用户以及服务器

   如果一个 promise 的 error 未被在微任务队列的末尾进行处理，则会出现“未处理的 rejection”，当微任务队列为空同时存在没有被处理的error时，unhandlerejection事件会被触发。

## Promise API

下面介绍Promise类的几种静态方法

1. Promise.all

   处理一组Promise对象，将处理的结果按照数组顺序，相应结果放入新的数组，作为result，返回一个新的promise

   - 当所有给定的 promise 都 resolve 时，新的 promise 才会 resolve，并且其结果数组将成为新 promise 的结果。
   - 如果任意一个 promise 被 reject，由 `Promise.all` 返回的 promise 就会立即 reject，并且带有的就是这个 error。其他promise将被忽略

   使用案例

   ```js
   let arrUrls=[url1,url2,url3];
   let requests=arrUrls.map(url=>fetch(url));//requests也就是一组promises
   Promise.all(requests)//这组promise开始执行，陆续返回response，之后一起拿到then中处理
     .then(responses=>{
       responses.forEach(response=>{
           if (response.status==200)
               alert(`${response.url}: ${response.status}`)
           
       })
   })
   ```

   

2. `Promise.allSettled(promises)`（ES2020 新增方法）—— 等待所有 promise 都 settle 时，并以包含以下内容的对象数组的形式返回它们的结果：

   - `status`: `"fulfilled"` 或 `"rejected"`

   - `value`（如果 fulfilled）或 `reason`（如果 rejected）。

   - 返回形式：

     ```js
     [
       {status: 'fulfilled', value: ...response...},
       {status: 'fulfilled', value: ...response...},
       {status: 'rejected', reason: ...error object...}
     ]
     ```

3. `Promise.race(promises)` —— 等待第一个 settle 的 promise，并将其 result/error 作为结果返回。

4. `Promise.any(promises)`（ES2021 新增方法）—— 等待第一个 fulfilled 的 promise，并将其结果作为结果返回。如果所有 promise 都 rejected，`Promise.any` 则会抛出 [`AggregateError`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) 错误类型的 error 实例。

## Promisify

将一个接受回调的函数转换为一个返回 promise 的函数。 仅适用于调用一次回调的函数。进一步的调用将被忽略。

下面是如何对接受回调的函数进行转化的案例：

```js
/**
   * @description:一个用来加载js的函数，目的是等到页面元素加载完成后再引入js，同时如果引入js出错则抛出错误
   * @param  {string} src
   * @param  {function} callback
   *
   */
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }
  /**
 * @description：将f封装成一个返回Promise对象的函数，其中回调函数已经在内部写好了
 * @param  {fuction} f 是一个内部进行过一次回调的函数，也就是接受回调的函数
 * @return {Promise}
 */
function promisify(f) {
    return function (...args) { // 返回一个包装函数（wrapper-function） (*)
      return new Promise((resolve, reject) => {
        function callback(err, result) { // 我们对 f 的自定义的回调 (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); // 将我们的自定义的回调附加到 f 参数（arguments）的末尾
        console.log('f的参数[路径，回调函数]——'+args)
  
        f.call(this, ...args); // 调用原始的函数
      });
    };
  } 
  // 用法：使用promisify对loadScript进行封装
  let loadScriptPromise = promisify(loadScript);
  loadScriptPromise('myjs.js').then((script)=>console.log(script.src));
```

## 微任务

对于异步任务需要适当的管理，ECMA 标准规定了一个内部队列 `PromiseJobs`，通常被称为“微任务队列（microtask queue），按照规范：

- 队列（queue）是先进先出的：首先进入队列的任务会首先运行。
- 只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务。

或者，简单地说，当一个 promise 准备就绪时，它的 `.then/catch/finally` 处理程序（handler）就会被放入队列中：但是它们不会立即被执行。当 JavaScript 引擎执行完当前的代码，它会从队列中获取任务并执行它。

## async/await

### 使用async关键字

在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。

### 使用await关键字

在promise对象前使用关键字await，可以获取到promise的结果

- await通常只能用于有async声明的函数中
- await和then一样，都能拿到promise的结果，但是更加优雅，代码易于读写

### async、await的错误处理

当await等待的promise传递err，这个err和其他错误一样也会被抛出

- 在async声明的函数内部，可以用try...catch来捕获异常
- 如果是外部的promise/async函数在外部被调用可以继续使用`.catch`、`.try`等方法

### async/await使用示例

1. Promise.all

```js
let res=await Promise.all([fetch(url1),fetch(url2),...,fetch(urln)])
```

2. 改写教程中获取头像的函数

```js
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url){
    let response=await fetch(url);
    if(response.status==200){
        return response.json();
    }
    else{
        throw new HttpError(response);
    }
}
async function demoGithubUser(){
    let user;
    let name = prompt("Enter a name?", "iliakan");
    try{
    user=await loadJson(`https://api.github.com/users/${name}`);  
    }
    catch(err){
      if(err instanceof HttpError && err.response.status==404){
         alert("No such user, please reenter.");
        return demoGithubUser();
      }
       else{
           throw err;
       }
          
    }
    alert(user.name);
    return user;
    
    
}
demoGithubUser()
```

### 其他内容

#### 全局的promise拒绝处理

来自es6深入：介绍了在nodejs和浏览器环境下，针对于进程中未处理的rejected状态的promise是定期处理的。比如在nodejs中是通过process的unhandledrejection和rejectionhandled两个事件处理的。
