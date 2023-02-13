const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
function deepClone(target,map=new Map()){
    if(typeof target=="object"){
        let object=Array.isArray(target)?[]:{};
        if(map.get(target)){
            return target;
        }
        map.set(target,object);
        for(let key in target){
            object[key]=deepClone(target[key],map);
        }
        return object;
    }
    else{
        return target;
    }
}
target.target=target
deepClone(target)