import './App.css'
import {Box} from "@mui/material";
import {Routes} from "react-router-dom";
import Navbar from "./component/global/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Fotter from "./component/global/fotter.jsx";

function App() {

    return (
        <>
            <Navbar />
            <Home/>
            <Fotter />
            {/*<Routes>*/}
            {/*    <Route>*/}
            {/*        */}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </>
    )
}

export default App
