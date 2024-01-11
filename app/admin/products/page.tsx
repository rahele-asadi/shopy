"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";

import Modal from "@/app/components/common/modal";
import CreateProductForm from "@/app/forms/admin/products/createProductForm";
import { getProducts } from "@/app/services/products";
import { Product } from "@/app/contracts/admin/types";
import LoadingBox from "@/app/components/common/loadingBox";
import Pagination from "@/app/components/common/pagination";
import EmptyBox from "@/app/components/common/emptyList";
import ProductsListItem from "@/app/components/adminPanel/products/productsListItem";
import { useAppSelector } from "@/app/hooks";
import { selectUser } from "@/app/store/auth";

const Products = () => {
  // another way to show modal is using of state
  // const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [page, setPage] = useState(1);

  const { data, error, mutate } = useSWR({ url: "/admin/products", page }, getProducts);
  const productsLoading = !data && !error;

  const user = useAppSelector(selectUser);
  const router = useRouter();
  const searchParams = useSearchParams();
  const createModal = searchParams?.has("create-product");
  let pageQuery: any = searchParams?.get("page");

  const setOpenCreateProduct = (show = true) => {
    router.push(`/admin/products${show ? "?create-product" : ""}`);
  };

  const onPageChangeHandler = ({ selected }: { selected: number }) => {
    router.push(`/admin/products?page=${selected + 1}`);
  };

  // when products page refreshed this code caused number of pagination not change
  useEffect(() => {
    setPage(parseInt(pageQuery ?? 1));
  }, [pageQuery]);

  return (
    <>
      {/* this line use when handle modal with state */}
      {/* {openCreateProduct && <CreateModal setOpenCreateProduct={setOpenCreateProduct} />} */}

      {createModal && (
        <Modal setShow={() => setOpenCreateProduct(false)}>
          <div className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all'>
            <h2 className='text-xl font-bold leading-tight text-gray-800 py-5 px-6  border-b'>
              ساخت محصول
            </h2>
            <CreateProductForm
              mutateProducts={mutate}
              handleClose={() => setOpenCreateProduct(false)}
            />
          </div>
        </Modal>
      )}
      <div className='sm:px-6 w-full'>
        <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
          <div className='sm:flex items-center justify-between'>
            <h1 className='font-bold text-2xl text-gray-800'>لیست محصول</h1>
            {user.canAccess("add_new_product") && (
              <button
                onClick={() => setOpenCreateProduct(true)}
                className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
              >
                <p className='text-sm font-medium leading-none text-white'>
                  اضافه کردن محصول
                </p>
              </button>
            )}
            {/* Link use for modal routing(another way for handle modal) */}
            {/* <Link
              href={"/admin/products?create-product"}
              as={"/admin/products/create"}
              className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
            >
              <p className='text-sm font-medium leading-none text-white'>
                اضافه کردن محصول
              </p>
            </Link> */}
          </div>
          <div className='mt-7 overflow-x-auto'>
            {productsLoading ? (
              <LoadingBox />
            ) : data?.products?.length >= 1 ? (
              <table className='w-full whitespace-nowrap'>
                <thead>
                  <tr>
                    <th>
                      <div className='flex items-center pr-5'>شماره</div>
                    </th>
                    <th>
                      <div className='flex items-center py-2'>عنوان</div>
                    </th>
                    <th>
                      <div className='flex items-center py-2'>توضیحات</div>
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.products?.map((product: Product) => (
                    <ProductsListItem
                      product={product}
                      key={product.id}
                      mutateProducts={mutate}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <EmptyBox
                title='محصولی وجود ندارد.'
                description='لیست محصول خالی می باشد می توانید محصول جدید اضافه کنید.'
              />
            )}
          </div>
          <div className='p-4 my-2 flex items-center justify-center '>
            {data?.total_page > 1 && (
              <Pagination
                page={page}
                pageCount={data?.total_page}
                onPageChangeHandler={onPageChangeHandler}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
