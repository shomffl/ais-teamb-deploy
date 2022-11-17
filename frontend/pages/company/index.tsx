import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { messageState } from "../../atom/MessageAtom";
import ScrollToTop from "../../components/atoms/ScrollToTop";
import AxiosErrorHandleProvider from "../../components/error/AxiosErrorHandleProvider";
import Header from "../../components/organisms/Header";
import Message from "../../components/organisms/Message";
import DashBoard from "../../components/template/DashBoard";

const Home: NextPage = () => {
  const message = useRecoilValue(messageState);
  return (
    <AxiosErrorHandleProvider>
      <Header page={0}></Header>
      <DashBoard />
      <ScrollToTop />
      {message.open && <Message />}
    </AxiosErrorHandleProvider>
  );
};

export default Home;
