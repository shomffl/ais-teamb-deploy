import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);
const URL = "http://localhost:3001/api/v1";

export const getMyEvent = () => {
  const { data, error, mutate } = useSWR(`${URL}/events`, fetcher);
  return { data, isLoading: !error && !data, error, mutate };
};
