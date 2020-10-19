function strictlyEqual (arg1, arg2){
    let equal = 0;
    if(object.is(typeof(arg1), typeof(arg2))){
        equal++;
    }
    if(object.is(arg1, arg2)){
        equal++
    }
    if(object.is(equal, 0)){
        return true;
    }else{
        return false;
    }
}