import type { NextPage } from "next";
import ScrollToTop from "../components/atoms/ScrollToTop";
import AxiosErrorHandleProvider from "../components/error/AxiosErrorHandleProvider";
import Header from "../components/organisms/Header";
import Message from "../components/organisms/Message";
import DashBoard from "../components/template/DashBoard";

const Home: NextPage = () => {
  return (
    <AxiosErrorHandleProvider>
      <Header page={0}></Header>
      <DashBoard />
      <ScrollToTop />
      <Message />
    </AxiosErrorHandleProvider>
  );
};

export default Home;
