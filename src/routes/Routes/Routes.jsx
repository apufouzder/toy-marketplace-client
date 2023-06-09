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
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import MyToys from "../../pages/MyToys/MyToys";
import Blog from "../../pages/Blog/Blog";
import UpdateToyForm from "../../pages/MyToys/UpdateToyForm";
import NotFound from "../../components/NotFound/NotFound"

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
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/toy/${params.id}`)
            },
            {
                path: "/toyUpdate/:id",
                element: <PrivateRoute><UpdateToyForm /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4000/toy/${params.id}`)
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;