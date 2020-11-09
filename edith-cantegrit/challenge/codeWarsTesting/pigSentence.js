function pigIt(str){
    const pigSentence = []
    let lastLetter = str.slice(str.length-1, str.length)
    let quotationSentence = str.slice(0, str.length-1)
    
    if(lastLetter === '!' || lastLetter === '?') {
        quotationSentence.split(' ').forEach((item) => {
        let firstLetter = item.slice(0,1);
        item = item.slice(1,item.length) + firstLetter + "ay"
        pigSentence.push(item)
    });
        pigSentence.pop()
        pigSentence.push(lastLetter)
        return pigSentence.join(' ')  
    } else {
        str.split(' ').forEach((item) => {
            let firstLetter = item.slice(0,1);
            item = item.slice(1,item.length) + firstLetter + "ay"
            pigSentence.push(item)
        });
        return pigSentence.join(' ')  
    }
}