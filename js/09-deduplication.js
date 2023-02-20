let arr=[1,2,3,5,6,3,4,5,6]
//set
function unique1(arr){
    return [...new Set(arr)]    
}
//unique1(arr)
//filter+indexOf
function unique2(arr){
    return arr.filter((item,index,arr)=>{
        return arr.indexOf(item)===index;
    })
}
//unique2(arr)
//reduce
function unique3(arr){
   return arr.reduce((pre,next)=>{
        if(!pre.includes(next)){
            pre.push(next)
        }
        return pre;
    },[])
}
//unique3(arr)