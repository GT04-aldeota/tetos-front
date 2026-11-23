import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// export const APIURL = "http://localhost:3000"
export const APIURL = "https://tetos-api-n01t.onrender.com"

export const AXIOS = axios.create({
    baseURL: APIURL
});

export const QUERYCLIENT = new QueryClient();