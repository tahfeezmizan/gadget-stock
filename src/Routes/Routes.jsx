import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Queries from "../Pages/Queries/Queries";
import MyQueries from "../Pages/Queries/MyQueries";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/queries',
                element: <Queries />,
            },
            {
                path: '/myqueries',
                element: <MyQueries />,
            },
        ]
    },
]);

export default router;
