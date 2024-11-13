import { Genre } from "../hooks/useGenres";
import {useQuery} from "@tanstack/react-query"
import useReactQuery from "./useReactQuery";

const useQueryData=()=>{

    return useQuery<Genre[],Error>({
        queryKey:['genres'],
        queryFn:useReactQuery.getAll
    })
}

export default useQueryData;