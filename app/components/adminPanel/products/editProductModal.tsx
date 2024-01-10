import EditProductForm from "@/app/forms/admin/products/editProductForm";
import { Product } from "@/app/contracts/admin/types";
import Modal from "../../common/modal";
import { KeyedMutator } from "swr";

interface Props {
  product: Product;
  handleClose: () => void;
  mutateProducts: KeyedMutator<{
    products: any;
    total_page: any;
  }>;
}

const EditProductModal = ({ product, handleClose, mutateProducts }: Props) => {
  return (
    <Modal show={true} setShow={handleClose}>
      <div className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all'>
        <EditProductForm
          product={product}
          handleClose={handleClose}
          mutateProducts={mutateProducts}
        />
      </div>
    </Modal>
  );
};

export default EditProductModal;
