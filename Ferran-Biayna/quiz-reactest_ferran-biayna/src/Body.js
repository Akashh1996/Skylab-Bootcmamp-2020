import React from 'react';
import Image from './Image.js';
import Quiz from './Quiz.js';

const Body = () => {

    let books = [
        'The shining',
        'The adventures of Huckleberry Finn',
        'Macbeth',
        'IT'
    ]

    return <div id='body-quiz'>
        <Image/>
        <Quiz books={books} key={books}/>
    </div>
}

export default Body