const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let books = [
    { title: 'skjdfhksd', author: '1234253' },
    { title: 'skjdasdasdfhksd', author: '1234asdasd253' },
    { title: 'skjdffghfghhksd', author: '123rhgfgh4253' },
    { title: 'fgherterwskjdfhksd', author: 'werwer1234253' }
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/book/:title', (req, res) => {
    const title = req.params.title;
    console.log(title)

    for (let book of books) {
        if (book.title === title) {
            res.json(book);
            return;
        }
    }

    res.status(404).send('Book not found');
});
app.delete('/book/:title', (req, res) => {
    const title = req.params.title;

    books = books.filter((i) => {
        if (i.title !== title) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
