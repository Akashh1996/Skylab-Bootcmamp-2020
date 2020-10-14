function strictEquals (a, b) {

    if (Number.isNaN(a)) {
        return false;
    } else if (Number.isNaN(a/b) && !isNaN(a)) {
        return true;
    } else {
        return Object.is(a, b);
    }
}


