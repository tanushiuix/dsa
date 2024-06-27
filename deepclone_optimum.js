function deepclone(input){
    let result=Array.isArray(input) ?[]:{}
    if(typeof input !== "object"){
        return input;
    }
    else if(Array.isArray(input)){
        for (let i = 0; i < input.length; i++) {
            result.push(deepclone(input[i]));    
        }
        
    }
    else{
        Object.entries(input).forEach(([key,value])=>{
            result[key]=deepclone(input[i])
        })
    }
}

