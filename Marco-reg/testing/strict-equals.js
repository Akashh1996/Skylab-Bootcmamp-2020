function checkForEquality(a,b){
    console.log(a,b)
    if (a == b){
        if(typeof(a) == "string" && typeof(b)=="string"){
            return true;
        }else if(typeof(a)=="number" &&typeof(b)=="number"){
            return true;
    
        }else if(typeof(a)=="boolean"&&typeof(b)=="boolean"){
            return true;
    
        
        }else{
            return false;
        }
    }else{
        return false;
    }   
}
module.exports=checkForEquality;