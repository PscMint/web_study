//扁平化：将嵌套多层的数组变为只有一层的数组
//应用场景：我们需要将一个多层嵌套的对象或数组序列化成字符串，或者反序列化成一个 JavaScript 对象或数组。对象或数组中包含多层嵌套的子对象或子数组，我们需要将它们展开成一维的数组或对象，以便进行统一的数据处理或比较等
//input
let arr = [1, [2, [3, 4]]];
//方案1：递归
function flatten_1(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten_1(arr[i]))
        }  
        else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(arr);
//方案1：递归，但是比较优雅的reduce写法
//顺便，reduce是在原数组的基础上返回一个新的值，map是在原数组的基础上放回一个新的数组
function flatten_1_plus(arr){
 return arr.reduce((pre,next)=>{
    return pre.concat(Array.isArray(next)?flatten_1_plus(next):next)
 },[])
}