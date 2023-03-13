import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
])