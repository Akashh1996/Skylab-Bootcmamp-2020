let counter = 0;

const interval = setInterval(() => {
    console.log('Hello world')
    counter += 1
    if (counter === 5) {
        console.log('done')
        clearInterval(interval)
    }
}, 1000)
