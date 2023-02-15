var count = 1;
var container = document.getElementById('container');
//处理程序，页面计数
function getUserAction(e) {
    container.innerHTML = count++;
    console.log("oldHandler的this指向：",this)
    console.log("newHandler的访问event",e)
};
// 使用时间戳
function throttle_1(func, wait) {
    let preTime = 0;
  
    return function () {
      let nowTime = +new Date();
      let context = this;
      let args = arguments;
  
      if (nowTime - preTime > wait) {
        func.apply(context, args);
        preTime = nowTime;
      }
    };
  }
  
  // 定时器实现
  function throttle_2(func, wait) {
    let timeout;
  
    return function () {
      let context = this;
      let args = arguments;
  
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    };
  }
function throttle_3(func,wait){
    //上一个时间戳初始值
    let previous=0;
    let timer=null;

    function throttled(){
        const context=this;
        const args=arguments;
        let now=+new Date();
        let remainings=wait-(now-previous);
        if(remainings<=0){
            //没有剩余时间了，定时器重置，记录调用时间戳作为previous，立即调用函数
            if(timer){
                clearTimeout(timer);
                timer=null;
            }
            previous=now;
            func.apply(context,args);
        }else if(!timer){//剩余时间没到，且第一次在wait区间内触发事件，事件将在剩余时间后触发
           timer=setTimeout(function(){
            timer=null;
            previous=+new Date();
            func.apply(context,args);
           },remainings)
        }

    }
    return throttled;
}
container.onmousemove=throttle_3(getUserAction,10000)
