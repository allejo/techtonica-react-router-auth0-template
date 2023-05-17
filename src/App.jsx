import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Root from "./pages/Root.jsx";
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'profile',
                element: <Profile />,
            }
        ],
    },
]);

const App = () => (
    <RouterProvider router={router}/>
);

export default App;
