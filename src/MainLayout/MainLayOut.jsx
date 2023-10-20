import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

import Footer from "./Shared/Footer/Footer";


const MainLayOut = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;