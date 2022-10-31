import axios from "axios";
import useSWR from "swr";

const fetcher = (url: any) => axios.get(url).then((res) => res.data);
const URL = "http://localhost:3001/api/v1";

export const getMyEvent = () => {
  const { data, error, mutate } = useSWR(`${URL}/events`, fetcher);
  return { data, isLoading: !error && !data, error, mutate };
};
export const createEvent = async (data: any) => {
  await axios
    .post(`${URL}/events`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const updateEvent = async (id: number, data: any) => {
  await axios
    .patch(`${URL}/events/${id}`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteEvent = async (id: number) => {
  await axios
    .delete(`${URL}/events/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
