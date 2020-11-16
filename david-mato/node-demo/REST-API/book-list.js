const setEditModal = (title) => {
    // We will implement this later
};

const deleteBook = (title) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/book/${title}`, true);
    xhttp.send();

    location.reload();
};

const loadBooks = async () => {
    const response = await fetch('http://localhost:3000/books', {
        method: 'GET'
    });
    const books = await response.json();

    for (let i = 0; i < books.length; i++) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${books[i].title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${books[i].isbn}</h6>
    
                        <div>Author: ${books[i].author}</div>
                        <div>Publisher: ${books[i].publisher}</div>
                        <div>Number Of Pages: ${books[i].numOfPages}</div>
    
                        <hr>
    
                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${books[i].title})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('books').innerHTML =
            document.getElementById('books').innerHTML + x;

    }
    for (let i = 0; i < document
        .getElementsByClassName('btn-danger').length; i++) {
        document
            .getElementsByClassName('btn-danger')
        [i].addEventListener('click', () => deleteBook(books[i].title));
    }
};

loadBooks();
