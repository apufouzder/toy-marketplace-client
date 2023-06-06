
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;