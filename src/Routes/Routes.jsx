import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddQueries from "../Pages/Queries/MyQueries/AddQueries";
import MyQueries from "../Pages/Queries/MyQueries/MyQueries";
import MyQueriesBanner from "../Pages/Queries/MyQueries/MyQueriesBanner";
import UpdateQueries from "../Pages/Queries/MyQueries/UpdateQueries";
import Queries from "../Pages/Queries/Queries";
import QuriesDetails from "../Pages/Queries/QuriesDetails";
import Register from "../Pages/Register/Register";
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
                path: '/queriesDetails/:id',
                element: <PrivateRoute>
                    <QuriesDetails />
                </PrivateRoute>,
            },
            {
                path: '/addqueries',
                element: <PrivateRoute>
                    <AddQueries />
                </PrivateRoute>
            },
            {
                path: '/updatequeries/:id',
                element: <UpdateQueries></UpdateQueries>
            },
           
           
        ]
    },
]);

export default router;
