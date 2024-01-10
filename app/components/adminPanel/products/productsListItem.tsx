import { Product } from "@/app/contracts/admin/types";
import { useState } from "react";
import DeleteConfirmationModal from "../../common/deleteConfirmationModal";
import { deleteProduct } from "@/app/services/products";
import ValidationError from "@/app/exception/validationError";
import { toast } from "react-toastify";
import { KeyedMutator } from "swr";
import EditProductModal from "./editProductModal";

interface Props {
  product: Product;
  mutateProducts: KeyedMutator<{
    products: any;
    total_page: any;
  }>;
}

const ProductsListItem = ({ product, mutateProducts }: Props) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleCloseEditModal = () => setOpenEditModal(false);

  const deleteHandler = async () => {
    try {
      await deleteProduct(product.id);
      await mutateProducts();

      toast.success("محصول با موفقیت حذف شد.");

      setOpenConfirmDelete(false);
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([value]) => toast.error(value as string));
      }
      toast.error("مشکلی در حذف محصول به وجود آمده است.");
      console.log(error);
    }
  };

  return (
    <tr tabIndex={0} className='focus:outline-none h-16 border border-gray-100 rounded'>
      <td className='hidden'>
        {openConfirmDelete && (
          <DeleteConfirmationModal
            title={`حذف محصول ${product.title}`}
            description='آیا از حذف این محصول اطمینان دارید؟'
            handleCancel={() => setOpenConfirmDelete(false)}
            handleConfirm={deleteHandler}
          />
        )}
      </td>
      <td className='hidden'>
        {openEditModal && (
          <EditProductModal
            product={product}
            handleClose={handleCloseEditModal}
            mutateProducts={mutateProducts}
          />
        )}
      </td>
      <td>
        <div className='flex items-center pr-5'>
          <p className='text-base font-medium leading-none text-gray-700 mr-2'>
            {product.id}
          </p>
        </div>
      </td>
      <td className='pl-3'>
        <div className='flex items-center'>
          <p className='text-sm leading-none text-gray-600 ml-2'>{product.title}</p>
        </div>
      </td>
      <td className='pl-3'>
        <div className='flex items-center'>
          <p className='text-sm leading-none text-gray-600 ml-2'>{product.body}</p>
        </div>
      </td>
      <td className='pl-3'>
        <button
          onClick={() => setOpenEditModal(true)}
          className='focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none'
        >
          ویرایش
        </button>
      </td>
      <td>
        <button
          onClick={() => setOpenConfirmDelete(true)}
          className='py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded'
        >
          حذف
        </button>
      </td>
    </tr>
  );
};

export default ProductsListItem;
