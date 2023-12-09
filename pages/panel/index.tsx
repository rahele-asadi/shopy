import UserPanelLayout from "@/app/components/layout/userPanelLayout";
import { NextPageWithLayout } from "../_app";
import UserInfo from "@/app/components/panel/userInfo";

const Panel: NextPageWithLayout = () => {
  return (
    <div>
      <UserInfo />
    </div>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default Panel;
