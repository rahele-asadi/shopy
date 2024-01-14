"use client";
import { useRouter } from "next/navigation";

import CreateProductForm from "@/app/forms/admin/products/createProductForm";

const CreateProduct = () => {
  const router = useRouter();

  const setOpenCreateProduct = (show = true) => {
    router?.push(`/admin/products${show ? "?create-product" : ""}`);
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

export default CreateProduct;
