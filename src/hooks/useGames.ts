import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-Client";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
};

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Game>>('/games', {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.SearchText,
        },
      });
      return response.data; // Ensure response data is returned here
    },
  });




export default useGames;