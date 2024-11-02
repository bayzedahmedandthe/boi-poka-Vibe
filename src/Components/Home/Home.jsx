import headerImg from "../../assets/books.jpg"
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="pt-14">
            <section>
                <div className="hero bg-base-200  rounded-3xl">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
                        <img
                            src={headerImg}
                            className="max-w-sm rounded-lg shadow-2xl my-32" />
                        <div className="lg:my-32">
                            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookself </h1>

                            <button className="bg-[#23BE0A] px-7 py-5 font bold rounded-lg text-white mt-12">View the List</button>
                        </div>
                    </div>
                </div>
            </section>
            <Books></Books>
        </div>
    );
};

export default Home;