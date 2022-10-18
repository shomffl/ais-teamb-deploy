import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

const url = "https://localhost:3001";

export const getMyEvent = () => {
  const { data, error, mutate } = useSWR(`${url}`, fetcher);
  return { data, isLoading: !error && !data, error, mutate };
};
