import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import { NextPageWithLayout } from "../../_app";

const Products: NextPageWithLayout = () => {
  return <div>Products page</div>;
};

Products.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default Products;
