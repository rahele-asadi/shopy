import { useRouter } from "next/router";
// import Link from "next/link";

import AdminPanelLayout from "@/app/components/layout/adminPanelLayout";
import { NextPageWithLayout } from "../../_app";
import Modal from "@/app/components/common/modal";
import CreateProductForm from "@/app/forms/admin/products/createProductForm";

const Products: NextPageWithLayout = () => {
  // another way to show modal is using of state
  // const [openCreateProduct, setOpenCreateProduct] = useState(false);

  const router = useRouter();

  const setOpenCreateProduct = (show = true) => {
    router.push(`/admin/products${show ? "?create-product" : ""}`);
  };

  return (
    <>
      {/* this line use when handle modal with state */}
      {/* {openCreateProduct && <CreateModal setOpenCreateProduct={setOpenCreateProduct} />} */}

      {"create-product" in router.query && (
        <Modal setShow={() => setOpenCreateProduct(false)}>
          <div className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all'>
            <h2 className='text-xl font-bold leading-tight text-gray-800 py-5 px-6  border-b'>
              ساخت محصول
            </h2>
            <CreateProductForm setOpenCreateProduct={setOpenCreateProduct} />
          </div>
        </Modal>
      )}
      <div className='sm:px-6 w-full'>
        <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
          <div className='sm:flex items-center justify-between'>
            <h1 className='font-bold text-2xl text-gray-800'>لیست محصول</h1>
            <button
              onClick={() => setOpenCreateProduct(true)}
              className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'
            >
              <p className='text-sm font-medium leading-none text-white'>
                اضافه کردن محصول
              </p>
            </button>
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
                <tr
                  tabIndex={0}
                  className='focus:outline-none h-16 border border-gray-100 rounded'
                >
                  <td className=''>
                    <div className='flex items-center pr-5'>
                      <p className='text-base font-medium leading-none text-gray-700 mr-2'>
                        1
                      </p>
                    </div>
                  </td>
                  <td className='pl-3'>
                    <div className='flex items-center'>
                      <p className='text-sm leading-none text-gray-600 ml-2'>محصول یک</p>
                    </div>
                  </td>
                  <td className='pl-3'>
                    <div className='flex items-center'>
                      <p className='text-sm leading-none text-gray-600 ml-2'>
                        توضیحات محصول یک
                      </p>
                    </div>
                  </td>
                  <td className='pl-3'>
                    <button className='focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none'>
                      ویرایش
                    </button>
                  </td>
                  <td className=''>
                    <button className='py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded'>
                      حذف
                    </button>
                  </td>
                </tr>
                <tr className='h-3'></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

Products.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;

export default Products;
