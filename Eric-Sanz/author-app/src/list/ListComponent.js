import React from 'react';

function ListComponent() {
    const books = [
        'The Shining',
        'The adventures of Huckelberry Finn',
        'Macbeth',
        'IT'
    ]

    return (
    <ul>
        {books.map((title) => {
            <li>
                <a href = 'title'>{title}</a>
            </li>
        })}
    </ul>
    )
}

export default ListComponent;