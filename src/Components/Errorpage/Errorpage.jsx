import { Link } from "react-router-dom";


const Errorpage = () => {
    const handleGoHome =() => {

    }
    return (
        <div>
           <h2 className="text-5xl flex justify-center pt-72">Page not found</h2>
         <div className="pt-6 text-center">
        <Link to = "/"> <button  onClick={handleGoHome} className="border-2 rounded-lg py-2 px-4 ">Go Home</button></Link>
         </div>
        </div>
    );
};

export default Errorpage;