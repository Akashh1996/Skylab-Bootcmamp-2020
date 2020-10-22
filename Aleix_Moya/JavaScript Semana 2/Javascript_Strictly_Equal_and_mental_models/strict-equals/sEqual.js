
function sEqual(arg1, arg2){
    let res = 2;
    if(Object.is(arg1, NaN)){
        res = 3;
    }
    if(Object.is(arg1,arg2)){
        res--;
    }else{
        if(Object.is(arg1,-0) && Object.is(arg2,0)){
            res--;
        }else{ 
            if(Object.is(arg2,-0) && Object.is(arg1,0)){
                res--;
            }
        }
    }
    if(Object.is(typeof(arg1),typeof(arg2))){
        res--;
    }
    if(Object.is(res,0)){
        return true;
    }else{
        return false;
    }
}
