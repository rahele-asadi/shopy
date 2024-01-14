import { KeyedMutator } from "swr";
import { withFormik } from "formik";
import { toast } from "react-toastify";

import { ProductFormValuesInterface } from "@/app/contracts/admin/types";
import InnerProductForm from "@/app/components/adminPanel/products/innerProductForm";
import ValidationError from "@/app/exception/validationError";
import { createProduct } from "@/app/services/products";
import { ProductValidationSchema } from "@/app/contracts/admin/validationSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface CreateFormProps {
  handleClose: () => void;
  router?: AppRouterInstance;
  mutateProducts?: KeyedMutator<{
    products: any;
    total_page: any;
  }>;
}

const CreateProductForm = withFormik<CreateFormProps, ProductFormValuesInterface>({
  mapPropsToValues: (props) => ({
    title: "",
    price: 0,
    category: "",
    description: "",
  }),

  validationSchema: ProductValidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      await createProduct(values);
      props.handleClose();

      await toast.success("محصول با موفقیت اضافه شد.");

      if (props.router) {
        props.router.push("/admin/products");
      }

      if (props.mutateProducts) {
        props.mutateProducts();
      }
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

export default CreateProductForm;
