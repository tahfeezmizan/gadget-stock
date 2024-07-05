import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import RootLayout from "../Layout/RootLayout";
import Queries from "../Pages/Queries/Queries";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import QuriesDetails from "../Pages/Queries/QuriesDetails";
import QueriesBanner from "../Pages/Queries/QueriesBanner";
import MyQueries from "../Pages/Queries/MyQueries/MyQueries";
import AddQueries from "../Pages/Queries/MyQueries/AddQueries";
import AddRecommendation from "../Pages/Queries/AddRecommendation";
import UpdateQueries from "../Pages/Queries/MyQueries/UpdateQueries";
import MyQueriesBanner from "../Pages/Queries/MyQueries/MyQueriesBanner";
import MyRecommendation from "../Pages/Queries/Recommendation/MyRecommendation";
import RecommendationsForMe from "../Pages/Queries/Recommendation/RecommendationsForMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
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
                element: <>
                    <QueriesBanner /> <Queries />,
                </>
            },
            {
                path: '/myqueries',
                element: <>
                    <PrivateRoute>
                        <MyQueriesBanner /><MyQueries />
                    </PrivateRoute>
                </>,
            },
            {
                path: '/queriesDetails/:id',
                element: <>
                    <PrivateRoute>
                        <QuriesDetails />
                    </PrivateRoute></>,
            },
            {
                path: '/addqueries',
                element: <>
                    <PrivateRoute>
                        <AddQueries />
                    </PrivateRoute></>,
            },
            {
                path: '/updatequeries/:id',
                element: <>
                    <PrivateRoute>
                        <UpdateQueries />
                    </PrivateRoute>
                </>
            },
            {
                path: '/myrecommendation',
                element: <>
                    <PrivateRoute>
                        <MyRecommendation />
                    </PrivateRoute>
                </>
            },
            {
                path: '/recommendationsforme',
                element: <>
                    <PrivateRoute>
                        <RecommendationsForMe />
                    </PrivateRoute>
                </>
            },
            {
                path: '/profile',
                element: <>
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                </>
            },
            {
                path: '/addrecommendation',
                element: <>
                    <PrivateRoute>
                        <AddRecommendation />
                    </PrivateRoute>
                </>
            },
        ]
    },
]);

export default router;
