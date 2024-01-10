import { withFormik } from "formik";
import { toast } from "react-toastify";

import { ProductFormValuesInterface } from "@/app/contracts/admin/types";
import InnerProductForm from "@/app/components/adminPanel/products/innerProductForm";
import ValidationError from "@/app/exception/validationError";
import { updateProduct } from "@/app/services/products";
import { Product } from "@/app/contracts/admin/types";
import { ProductValidationSchema } from "@/app/contracts/admin/validationSchema";
import { NextRouter } from "next/router";
import { KeyedMutator } from "swr";

interface EditFormProps {
  product: Product;
  router?: NextRouter;
  handleClose: () => void;
  mutateProducts?: KeyedMutator<{
    products: any;
    total_page: any;
  }>;
}

const EditProductForm = withFormik<EditFormProps, ProductFormValuesInterface>({
  mapPropsToValues: ({ product }) => ({
    title: product?.title,
    price: product?.price,
    category: product?.category,
    description: product?.body,
  }),

  validationSchema: ProductValidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      await updateProduct(props.product.id, values);

      props.handleClose();

      if (props.mutateProducts) {
        props.mutateProducts();
      }

      await toast.success("محصول با موفقیت ویرایش شد.");

      props.router?.push("/admin/products");
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string),
        );
      }
      console.log(error);
    }
  },
})(InnerProductForm);

export default EditProductForm;
