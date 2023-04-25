//扁平化：将嵌套多层的数组变为只有一层的数组
//应用场景：我们需要将一个多层嵌套的对象或数组序列化成字符串，或者反序列化成一个 JavaScript 对象或数组。对象或数组中包含多层嵌套的子对象或子数组，我们需要将它们展开成一维的数组或对象，以便进行统一的数据处理或比较等
//input
let arr = [1, [2, [3, 4]]];
//递归
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
//递归，但是比较优雅的reduce写法
//顺便，reduce是在原数组的基础上返回一个新的值，map是在原数组的基础上放回一个新的数组
function flatten_1_plus(arr){
 return arr.reduce((pre,next)=>{
    return pre.concat(Array.isArray(next)?flatten_1_plus(next):next)
 },[])
}
//更加全面抽象化的写法，设计的思路和原因间说明文档
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
//根据学习内容复现代码
function flatten(input, shallow, strict, output) {
    //处理output不传值得设定
    output=output||[]
    //output的存储索引,记录下一个存储位置的index
    let index=output.length
    for(let i=0;i<input.length;i++){
        if(Array.isArray(input[i])){
            if(shallow){
                for(let num of input[i])
                    output[index++]=num;
            }else{
                flatten(input[i],shallow,strict,output)
                index=output.length
            }
        }else if(!strict){
            output[index++]=input[value];
        }
    }
    return output;

}