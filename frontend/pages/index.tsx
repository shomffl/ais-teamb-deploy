import type { NextPage } from "next";
import { useEffect } from "react";
import { getMyEvent } from "../api/getEvent";
import Header from "../components/organisms/Header";
import DashBoard from "../components/template/DashBoard";

const Home: NextPage = () => {
  const { data, isLoading, error, mutate } = getMyEvent();
  useEffect(() => {
    console.log(data);
  });
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
