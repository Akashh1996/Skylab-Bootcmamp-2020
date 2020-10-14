let car={wheels:4, color:"red",passangers:3}

function clone(x){
    const noClone=Object.assign({},x,{wheels:5 ,color:"blue",passangers:2});
    return noClone;
}
module.exports=clone;
