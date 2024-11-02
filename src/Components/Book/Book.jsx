import { RiStarSLine } from "react-icons/ri";

const Book = ({ book }) => {
    const { bookName, author, image, category, tags, rating } = book;
    return (
        <div className="pt-9">
            <div className="border-2 rounded-xl p-6 ">
                <div className="p-20 bg-base-200 rounded-xl">
                    <img src={image} alt="" />

                </div>
                <div className="flex items-center gap-10 pt-6">
                        {
                            tags.map(tag => <button className="bg-[#23BE0A0D] rounded-3xl px-4 py-2">{tag}</button>)
                        }
                    </div>
                    <h2 className="font-bold text-2xl py-4">{bookName}</h2>
                    <p className="text-[#131313CC]">{author}</p>
                    <div className="pt-10 flex justify-between">
                        <p>{category}</p>
                        <div className="flex items-center gap-2">
                        <p className="font-medium">{rating}</p>
                        <p className="text-2xl"><RiStarSLine /></p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Book;