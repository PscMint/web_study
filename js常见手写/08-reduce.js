/**
 * 实现数组的reduce方法
 * @param  {function} cb  用户传入的回调函数
 * @param  {} init reduce返回值total的初始值
 */
Array.prototype.myReduce=function(cb,init){
    //因为是数组调用reduce函数，this可以拿到数组
    const arr=this;
    let total=init?init:arr[0]
    //相当于回调函数被调用了多次，最终计算出total，total变量保存在reduce中
    for(let i=init?0:1;i<arr.length;i++){
        total=cb(total,arr[i],i,arr)
    }
    return total;
}