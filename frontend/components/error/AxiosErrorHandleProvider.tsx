import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
const AxiosErrorHandleProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    // axiosの共通エラーハンドリング記述
    axios.interceptors.response.use(
      (response: any) => {
        router.push("/");
        return response;
      },
      (error: any) => {
        switch (error.response?.status) {
          case 404:
            router.push("/newevent");
            return Promise.reject(error.response?.data);
        }
      }
    );
  }, []);
  return <div>{children}</div>;
};

export default AxiosErrorHandleProvider;
