import axios from "axios";
const URL = "http://localhost:3001/api/v1";

export const signUp = async (body: any) => {
  await axios
    .post(`${URL}/auth`, body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const signIn = async (body: any) => {
  await axios
    .post(`${URL}/auth/sign_in`, body)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
