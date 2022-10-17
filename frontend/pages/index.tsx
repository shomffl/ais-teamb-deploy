import type { NextPage } from "next";
import Header from "../components/organisms/Header";
import DashBoard from "../components/template/DashBoard";

const Home: NextPage = () => {
  return (
    <>
      <>
        <Header page={0}></Header>
        <DashBoard />
      </>
    </>
  );
};

export default Home;
