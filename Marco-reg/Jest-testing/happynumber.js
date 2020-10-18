

function isHappy(n){

    let happyArray = [];
    const HAPPY_ARRAY_ONE = [1]
    
    happyArray.push(n)
    let counter = 100
    let loopCondition = true
    while(loopCondition){
    
        if (happyArray.includes(n.toString().split('').map(n  => n*n).reduce((a,v)=>a+v))){
            happyArray.push(n.toString().split('').map(n  => n*n).reduce((a,v)=>a+v));
            break;
        }else if(n.toString().split('').map(n  => n*n).reduce((a,v)=>a+v)==1){
            
            happyArray = HAPPY_ARRAY_ONE;
            break;
    
        }else{
            happyArray.push(n.toString().split('').map(n  => n*n).reduce((a,v)=>a+v))
            n = n.toString().split('').map(n  => n*n).reduce((a,v)=>a+v);
        }
    }
    
    console.log(happyArray);
    return happyArray
}



module.exports = isHappy;