import React from 'react';

import BookItem from './BookItem'
function BookList({books}){
    return(
        <ul id="List">
            {books.map((books) => 
                <BookItem title = {books.name} key={books.name}/>,
                
            )}
            
        </ul>
        
    )
}
export default BookList;