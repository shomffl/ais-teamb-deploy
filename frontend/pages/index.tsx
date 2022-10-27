import type { NextPage } from "next";
import ScrollToTop from "../components/atoms/ScrollToTop";
import Header from "../components/organisms/Header";
import DashBoard from "../components/template/DashBoard";

const Home: NextPage = () => {
  return (
    <>
      <Header page={0}></Header>
      <DashBoard />
      <ScrollToTop />
    </>
  );
};

export default Home;
