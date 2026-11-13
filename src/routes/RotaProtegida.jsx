import { Navigate, useNavigate } from "react-router";
import { AXIOS } from "../services";

const RotaProtegida = ({ children }) => {

    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    AXIOS.interceptors.request.use(
        function (config) {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    AXIOS.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if(error.status == 401){
                navigate("/");
            }
            return Promise.reject(error);
        }
    );

    return token ? children : <Navigate to="/" />
}

export default RotaProtegida;