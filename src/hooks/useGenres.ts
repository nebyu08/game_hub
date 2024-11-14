import {useQuery} from '@tanstack/react-query';
import APIClient from '../services/api-Client';
import genres from '../Data/genres';
import ms from 'ms';
 
export interface Genre{
    id:number;
    name:string;
    image_background:string;
};

const apiClient=new APIClient<Genre>('/genres')

// const useGenres=()=>({data:genres,isLoading:false,error:null})

const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:ms('24 hrs') ,//24 hours
    initialData:{count:genres.length, results:genres,next:null}
})

export default useGenres;