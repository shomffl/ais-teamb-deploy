import Header from "../../../components/organisms/Header";
import AllEvent from "../../../components/template/AllEvent";

const index = () => {
  return (
    <>
      <div>
        <Header page={1} />
        <AllEvent />
      </div>
    </>
  );
};

export default index;
