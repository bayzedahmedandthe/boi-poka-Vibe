import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <button className="hover:bg-base-200 px-4 py-2 rounded-xl"><NavLink to = "/">Home</NavLink></button>
                        <li>
                            <a href="">Listed Books</a>
                        </li>
                        <li><a>Pages to read</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost  font-bold text-[28px]">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 lg:items-center lg:flex">
                   <button className="hover:bg-base-200 px-4 py-2 rounded-xl"><NavLink to = "/">Home</NavLink></button>
                    <li>
                    <a href="">Listed Books</a>
                    </li>
                    <li><a>Pages to read</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button>
                <a className="text-white font-semibold px-6 py-3 bg-[#23BE0A] rounded-lg">Sing In</a>
                </button>
                <button>
                <a className="text-white font-semibold px-6 py-3 bg-[#59C6D2] rounded-lg">Sing up</a>
                </button>
            </div>
        </div>
       
    );
};

export default Navbar;