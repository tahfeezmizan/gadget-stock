import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Queries from "../Pages/Queries/Queries";
import MyQueries from "../Pages/Queries/MyQueries";
import QuriesDetails from "../Pages/Queries/QuriesDetails";
import MyQueriesBanner from "../Pages/Queries/MyQueriesBanner";
import AddQueries from "../Pages/Queries/AddQueries";
import PrivateRoute from "./PrivateRoute";

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
                element:
                    <> <PrivateRoute>
                        <MyQueriesBanner /><MyQueries />
                    </PrivateRoute></>,
            },
            {
                path: '/queries/:id',
                element: <QuriesDetails />,
            },
            {
                path: '/addqueries',
                element: <PrivateRoute>
                    <AddQueries />
                </PrivateRoute>
            }
        ]
    },
]);

export default router;
