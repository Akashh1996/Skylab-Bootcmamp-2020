function deepClone(original) {
    if(!original) {
        return original
    } else {
        return(...original)
    }
}


module.exports=deepClone;

