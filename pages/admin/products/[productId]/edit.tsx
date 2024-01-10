import useSWR from "swr";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { NextPageWithLayout } from "../../../_app";
import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import { getSingleProduct } from "@/app/services/products";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ValidationError from "@/app/exception/validationError";

import EditProductForm from "@/app/forms/admin/products/editProductForm";

// this page is for modal routing
const EditProduct: NextPageWithLayout = ({
  productId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

EditProduct.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

// Because of in first render query not run, and query object is empty we get query from server side
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      productId: query?.productId,
    },
  };
};

export default EditProduct;
