import {createBrowserRouter} from "react-router-dom"
import Layout from "../CommonFile/Layout"
import HomeScreen from "../Pages/Homescreen"


export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
        ],
    },
])