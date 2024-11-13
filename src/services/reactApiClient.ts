import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://api.rawg.io/api/'
})


class ReactAPIClient<T>{
    endpoint:string
    
    constructor(endpoint:string){
        this.endpoint=endpoint;
    }
    getAll=()=>{
        return axiosInstance.get<T[]>(this.endpoint).then(res=>res.data)
    }

}

export default ReactAPIClient;