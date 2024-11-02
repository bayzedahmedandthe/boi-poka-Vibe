import { useLoaderData, useParams } from "react-router-dom";



const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const { bookName, author, image, category, tags, rating, totalPages, publisher, yearOfPublishing, review } = book;
    const handleMarkAsRead = () => {
        
    }
    return (
        <div className="min-h-screen pt-8">
            <div className="hero-content flex-col lg:flex-row gap-20">
             <div className="p-6 bg-base-200 rounded-lg w-1/2 border ">   <img
                    src={image}
                    className="max-w-sm rounded-lg  " /></div>
                <div className="ml-5 lg:ml-0 ">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="py-3">
                        {author}
                    </p>
                    <p className="font-bold">{category}</p>
                    <h4 className="w-[80%]">Review: {review}</h4>
                    <div className="flex items-center gap-10 pt-6">
                        {
                            tags.map((tag, idx) => <button key={idx} className="bg-[#23BE0A0D] rounded-3xl px-4 py-2">{tag}</button>)
                        }
                    </div>
                    <div className="divider"></div>
                    <p className="py-1">Number of pages: {totalPages}</p>
                    <p className="py-1">Publisher: {publisher}</p>
                    <p className="py-1">Year of publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div className="flex items-center gap-3 pt-4">
                        <button 
                        onClick={handleMarkAsRead}
                        className="border-2 px-3 py-2 bg-blue-100 rounded-lg font-bold hover:bg-blue-300">Mark as read</button>
                        <button  className="border-2 px-3 py-2 bg-blue-100 rounded-lg font-bold hover:bg-blue-300">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;