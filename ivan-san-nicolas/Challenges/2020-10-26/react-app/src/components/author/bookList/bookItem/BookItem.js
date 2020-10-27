import React from 'react';
import './bookItem.css';

function BookItem({books}) {
    return <li class="book-item">{books}</li>
}

export default BookItem;