import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login"
import Registration from "../../pages/Registration/Registration"
import Home from "../../pages/Home/Home/Home"
import AddToy from "../../pages/AddToy/AddToy";
import AllToys from "../../pages/AllToys/AllToys";
import ToyDetails from "../../pages/ToyDetails/ToyDetails";

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
            },
            {
                path: "/allToys",
                element: <AllToys />,
                loader: () => fetch('http://localhost:4000/addToy')
            },
            {
                path: "/toy/:id",
                element: <ToyDetails />,
                loader: ({params}) => fetch(`http://localhost:4000/toy/${params.id}`)
            }
        ]
    },
]);

export default router;