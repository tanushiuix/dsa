    const result=new WeakMap();
    function deepclone(obj){
    
        if(obj==null||obj==undefined){
            return obj;
        }
        if(typeof(ob)!=="object"){
            return obj
        }
        if(result.has(obj)){
            return result.get(obj)
        }
        const clone=Array.isArray(obj)? []:{}
        result.set(obj,clone);
        const keys = [...Object.getOwnPropertyNames(obj),...Object.getOwnPropertySymbols(obj)];
        for (const key of keys) {
            clone[key] = deepclone(obj[key]);
        }

        return clone
    }
    const array={name:"tanushi",age:20};
    console.log(deepclone(array));
