/**
 * 功能：判断某个对象是否为某个构造器的构造的，或者是它构造器的父类
 * 1.orgin是非对象类型，不存在子父类关系
 * 2.target必须是一个构造器
 * 3.沿着原型链查找
 */
function myInstanceof(origin,target){
    if(typeof origin!="object"||origin===null)
    return false;
    if(typeof target!=="function")
    throw new Error("target must be a function")
    //获取对象的原型对象
    let proto=Object.getPrototypeOf(origin)
    while(proto){
        if(proto===target.prototype)
        return true;
        //沿着原型链查找
        proto=Object.getPrototypeOf(proto)
    }
    return false;
}