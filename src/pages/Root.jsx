import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";

const Root = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
