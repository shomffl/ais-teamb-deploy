import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    id: 0,
    name: "",
    email: "",
  },
});
