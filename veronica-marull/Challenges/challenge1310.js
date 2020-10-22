function stricEquality(a,b) {

    let result;

    switch (a) {

        case 0:
            result = isNegativeZero(b);
            break;

        case -0:
            result = isZero(b)
            break;

        case b:
            result = true;
            break;

        default:
            result = false;
        
    }
    return result;

}


function isNegativeZero(value) {

    let result = false;

    switch (value) {

        case -0:
            result = true;
            break;
    }
    return result;
}


function isZero(value) {

    let result = false;

    switch (value) {

        case 0:
            result = true;
            break;
    }
    return result;
}

