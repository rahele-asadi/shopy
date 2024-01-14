"use client";
import useSWR from "swr";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { getSingleProduct } from "@/app/services/products";
import ValidationError from "@/app/exception/validationError";
import EditProductForm from "@/app/forms/admin/products/editProductForm";

const EditProduct = ({ params }: any) => {
  const { productId } = params;
  const router = useRouter();

  const handleClose = () => {
    router.push("/admin/products");
  };

  const { data, error } = useSWR(
    { url: `/admin/products/${productId}/edit`, productId },
    getSingleProduct,
  );

  const isLoading = !data && !error;

  // ERROR 422 from API when product not exists
  if (error instanceof ValidationError) {
    router.push("/admin/products");
    toast.error("چنین محصولی وجود ندارد.");
  }

  return (
    <>
      <div className='sm:px-6 w-full'>
        <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
          <h2 className='text-xl font-bold leading-tight text-gray-800 py-5 px-6  border-b'>
            ویرایش محصول
          </h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <EditProductForm
              product={data?.product}
              router={router}
              handleClose={handleClose}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditProduct;
