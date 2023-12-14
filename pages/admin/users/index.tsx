import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import { NextPageWithLayout } from "../../_app";

const Users: NextPageWithLayout = () => {
  return <div>Users page</div>;
};

Users.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default Users;
