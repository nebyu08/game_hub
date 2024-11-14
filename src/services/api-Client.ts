import axios, { AxiosRequestConfig } from "axios";
//import { config } from "dotenv";
//config();

//const api_key=import.meta.env.api_key

export interface FetchResponse<T>{
    count:number;
    next:string | null;
    results:T[];
}

const axiosInstance= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'35698ee89ec845579484724005b531eb'
    }
})

class APIClient<T>{
    endpoint:string
    
    constructor(endpoint:string){
        this.endpoint=endpoint;
    }

    getAll=(config:AxiosRequestConfig)=>{
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint,config)
        .then(res=>res.data);
    }

}

export default APIClient;
