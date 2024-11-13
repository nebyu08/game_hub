import { Genre } from "../hooks/useGenres";
import ReactAPIClient from "./reactApiClient";

export default new ReactAPIClient<Genre>('/genres');