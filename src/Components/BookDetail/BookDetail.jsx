import { useLoaderData, useParams } from "react-router-dom";



const BookDetail = () => {
const {bookId} = useParams();
const id = parseInt(bookId)
const data = useLoaderData();
console.log(id);

const book = data.find(book => book.bookId === id)
console.log(book);
    return (
        <div>
            <h2>Book Detail {bookId}</h2>
            <p></p>
        </div>
    );
};

export default BookDetail;