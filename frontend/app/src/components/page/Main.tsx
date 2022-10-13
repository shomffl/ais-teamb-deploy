import Header from "../parts/Header";
import DashBoard from "../template/DashBoard";
import Profile from "./Profile";

const Main = () => {
  return (
    <div className="">
      <Header>
        <DashBoard />
        <div>a</div>
        <Profile />
      </Header>
    </div>
  );
};

export default Main;
