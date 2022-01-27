var obj = {
    name:"fady salama",
    age:23,
    address:"Egypt"
}

var handler = {
    get:function(target,prop,prox){
        if(!(prop in target)){
            throw("not found");
        }
        return target[prop];
    },
    set:function(target,prop,value,prox){
        if(prop === "age"){
            if(value < 25 || value > 60 || isNaN(value)){
                throw("age sholud be number and between 25 and 60");
            }
        }
        if(prop === "name"){
            if(  isFinite(value)){
                throw("name sholud be string and 7 character");
            }
        }

        if(prop === "address"){
            if(isFinite(value)){
                throw("address sholud be string value");
            }
        }
        target[prop] = value;
    }
}

var p = new Proxy(obj,handler)

p.age = 26;



