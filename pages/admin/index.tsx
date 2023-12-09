import { NextPageWithLayout } from "../_app";
import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <h2>Admin dashboard</h2>
    </div>
  );
};

Admin.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default Admin;
