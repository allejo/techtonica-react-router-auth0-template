import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar.jsx";

/**
 * This component represents the "root" layout that will be shared by all pages.
 * For example, since we want to share the navigation bar across the entire site,
 * we include the <NavBar /> component here.
 */
const Root = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                {/* Imagine this as a placeholder for <About />, <Home />, or <Profile /> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
