import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import axios from "axios";

interface GameQuery{
    pageSize:number;
}

const useInfiniteScroll=(query:GameQuery)=>useInfiniteQuery<Game[],Error>({
    queryKey:['InfGame',query],
    queryFn:({pageParam=1})=>
        axios
            .get<Game[]>(
                'https://api.rawg.io/api',{
                params:{
                    key:'35698ee89ec845579484724005b531eb',
                    _start:(pageParam-1)*query.pageSize,
                    _limit:query.pageSize
                }}
            ).then(res=>res.data),
            staleTime:1*60*1000,
            getNextPageParam:(lastPage,allPages)=>{
                return lastPage.length > 0 ? allPages.length+1 : undefined
            }
})


export default useInfiniteScroll;