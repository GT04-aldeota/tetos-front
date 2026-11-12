import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import RotaProtegida from "./RotaProtegida";

const Rotas = () => {
    const token = sessionStorage.getItem("token");
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {
                    token && (
                        <Route path="/home" element={<RotaProtegida><Home /></RotaProtegida>} />
                    )
                }
            </Routes>
        </BrowserRouter>    
    );
}

export default Rotas;