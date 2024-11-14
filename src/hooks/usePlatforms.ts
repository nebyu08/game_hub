import {useQuery} from "@tanstack/react-query"
import APIClient from "../services/api-Client";
import ms from 'ms'

export interface Platform{
    id:number;
    name:string;
    slug:string;
}

const apiClient=new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms=()=> useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.getAll,
    staleTime:ms('24 hrs') ,//24 hours
    //  initialData:{count:platforms.length,results:platforms}
})

export default usePlatforms;