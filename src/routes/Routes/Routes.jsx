import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login"
import Registration from "../../pages/Registration/Registration"
import Home from "../../pages/Home/Home/Home"
import AddToy from "../../pages/AddToy/AddToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration />
            },
            {
                path: "/addToy",
                element: <AddToy />
            }
        ]
    },
]);

export default router;