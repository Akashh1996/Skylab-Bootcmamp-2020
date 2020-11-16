function checkForEquality(a,b){
    
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
checkForEquality(1,1);
checkForEquality("a","a");
checkForEquality(NaN,NaN);
checkForEquality(0,-0);
checkForEquality(-0,0);
checkForEquality(1,'1');
checkForEquality(true,false);
checkForEquality(false,false);
checkForEquality('water','oil');

///clone 


let car={wheels:4, color:"red",passangers:3}

function clone(x){
    const noClone=Object.assign({},x,{wheels:5 ,color:"blue",passangers:2});
    return noClone;
}

