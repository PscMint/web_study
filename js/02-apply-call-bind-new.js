Function.prototype.myCall=function(context){
    //绑定在函数的原型上，myCall应该只能被函数对象使用，无需判断
    // if(typeof this!=="function")
    //     throw new Error("can only be called by a function")
    const mycontext=context||Window;
    let args=[...arguments].slice(1);
    const func=Symbol();
    mycontext.func=this;
    let res;
    if(arguments[1])
    res=mycontext.func(...args);
    else
    res=mycontext.func();
    delete mycontext.func;
    return res;

}
//myApply和myCall的区别只在于参数调用上的不同
Function.prototype.myApply=function(context){
    const mycontext=context||Window;
    let args=arguments[1];
    const func=Symbol();
    mycontext.func=this;
    let res;
    if(!Array.isArray(args))
        throw new Error("myApply的参数需要放在数组中传入")
    if(args){
        res=mycontext.func(...args);
    }else{
        res=mycontext.func();
    }
    delete mycontext.func;
    return res;
}
//使用myNew函数模拟new运算符的功能
//myBind实现
//存在的问题：如果返回的函数作为构造函数，不会返回一个新的对象
Function.prototype.myBind=function(context) {
    const args=[...arguments].slice(1);
    const func=this;
    return function(){
        return func.apply(context,args.concat([...arguments]))
        
    }
    
}
//改进
Function.prototype.myBind=function(context) {
    const args=[...arguments].slice(1);
    const func=this;
    return function Fn(){
        if(this instanceof Fn){
            return func.apply(this,args.concat([...arguments]))
        }else{
            return func.apply(context,args.concat([...arguments]))
        }     
    }   
}

// 测试用例部分

let value = 2;
let foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

// 测试myBind
let bindFoo = bar.myBind(foo, 'Jack');
let obj = new bindFoo(20);
console.log(obj)
// undefined
// Jack
// 20

//测试myNew函数
function Stu(name,age){
    this.name=name;
    this.age=age;
}
myNew(Stu,"AMY",12)


//测试call apply
class Student{
    constructor(name,num){
        this.name=name
        this.num=num
    }
    
}
function sayHi(date="2021"){
        alert("Hi,I am "+this.name+" "+date)
    }
function add(num1=0,num2=0){
    return this.num+num1+num2;
}
let stu=new Student("Sally",12)
console.log(sayHi.myCall(stu,"2020-01-01"))
console.log(add.myCall(stu,15,1))
console.log(add.myApply(stu,[3]))
