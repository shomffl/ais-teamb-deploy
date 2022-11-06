import type { NextPage } from "next";
import ScrollToTop from "../components/atoms/ScrollToTop";
import AxiosErrorHandleProvider from "../components/error/AxiosErrorHandleProvider";
import Header from "../components/organisms/Header";
import DashBoard from "../components/template/DashBoard";

const Home: NextPage = () => {
  return (
    <AxiosErrorHandleProvider>
      <Header page={0}></Header>
      <DashBoard />
      <ScrollToTop />
    </AxiosErrorHandleProvider>
  );
};

export default Home;
