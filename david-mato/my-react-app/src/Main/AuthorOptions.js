import React from 'react';
import Option from './Option';
import './AuthorOptions.css';

function AuthorOptions({books}) {
    return (
        <div id='options-wrapper'>
            {books.map((title) => <Option title={title}/>)}
        </div>
    )
}

export default AuthorOptions;