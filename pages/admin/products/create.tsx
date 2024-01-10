import { useRouter } from "next/router";

import { NextPageWithLayout } from "../../_app";
import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import CreateProductForm from "@/app/forms/admin/products/createProductForm";

// this page is for modal routing
const CreateProduct: NextPageWithLayout = () => {
  const router = useRouter();

  const setOpenCreateProduct = (show = true) => {
    router.push(`/admin/products${show ? "?create-product" : ""}`);
  };

  return (
    <>
      <div className='sm:px-6 w-full'>
        <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
          <h2 className='text-xl font-bold leading-tight text-gray-800 py-5 px-6  border-b'>
            ساخت محصول
          </h2>
          <CreateProductForm
            router={router}
            handleClose={() => setOpenCreateProduct(false)}
          />
        </div>
      </div>
    </>
  );
};

CreateProduct.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default CreateProduct;
