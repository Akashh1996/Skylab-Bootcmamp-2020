import React from 'react';
import BookItem from './BookItem';

function BookList({books}) {
    return (
        <div class="list-group">
            {books.map((title)=> (
            <BookItem title={title} key={title} />
            ))}
        </div>
    );
}

export default BookList; 


// function App() {
//     const [count, setCount] = useState(0);
//     return (
//       <button onClick={() => setCount(1)}>
//         Click me!
//       </button>
//     );
//   }