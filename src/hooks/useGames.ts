import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-Client";


export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
};

const apiClient=new APIClient<Game>('/games')


const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn:() =>
      apiClient.getAll({
       params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.SearchText,
        }
      })
  });




export default useGames;