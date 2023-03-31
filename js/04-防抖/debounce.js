var count = 1;
var container = document.getElementById('container');
//处理程序，页面计数
function getUserAction(e) {
    container.innerHTML = count++;
    console.log("oldHandler的this指向：",this)
    console.log("newHandler的访问event",e)
};
//防抖函数 func防止抖动的函数，wait只允许一次触发的时间段
//在这个案例中，只有等鼠标停下的wait后才会显现数字增加
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
//抖动演示
//container.onmousemove=getUserAction;
container.onmousemove = debounce(getUserAction,1000,true);
