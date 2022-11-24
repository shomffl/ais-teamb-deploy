import Header from "../../../components/organisms/Header";
import AllEvent from "../../../components/template/AllEvent";

const index = () => {
  return (
    <>
      <div>
        <Header genre="company" page={1}></Header>
        <AllEvent />
      </div>
    </>
  );
};

export default index;
