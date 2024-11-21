import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient, { FetchResponse } from "../services/api-Client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
};

const apiClient=new APIClient<Game>('/games')


const useGames = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn:({pageParam=1}) =>
      apiClient.getAll({
       params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder, 
          search: gameQuery.SearchText,
          page:pageParam
        }
      }),
      getNextPageParam:(lastPage,allPage)=>{
        return lastPage.next ? allPage.length+1:undefined;
      },
      staleTime:ms('24 hrs')
  });

}


export default useGames;