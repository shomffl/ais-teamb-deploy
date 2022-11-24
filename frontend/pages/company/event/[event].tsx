import { useRouter } from "next/router";
import Header from "../../../components/organisms/Header";
import ManageEvent from "../../../components/template/ManageEvent";

const Event = () => {
  const router = useRouter();
  return (
    <div>
      <Header genre="company"></Header>
      <ManageEvent eventData={router.query} />
    </div>
  );
};

export default Event;
