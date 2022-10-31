import { useRouter } from "next/router";
import ManageEvent from "../../components/template/ManageEvent";

const Event = () => {
  const router = useRouter();
  return (
    <div>
      <ManageEvent eventData={router.query} />
    </div>
  );
};

export default Event;
