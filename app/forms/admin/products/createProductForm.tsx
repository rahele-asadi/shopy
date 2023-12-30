import { withFormik } from "formik";
import * as yup from "yup";
import { Dispatch, SetStateAction } from "react";

import { CreateFormValuesInterface } from "@/app/contracts/admin";
import InnerCreateProductForm from "@/app/components/adminPanel/products/innerCreateProductForm";
import ValidationError from "@/app/exception/validationError";
import createProduct from "@/app/services/products";
import { toast } from "react-toastify";

interface CreateFormProps {
  setOpenCreateProduct: (open: boolean) => void | Dispatch<SetStateAction<boolean>>;
}

const CreateValidationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(255),
  price: yup.string().required().min(0),
  category: yup.string().required(),
  description: yup.string().required().min(5).max(6000),
});

const CreateProductForm = withFormik<CreateFormProps, CreateFormValuesInterface>({
  mapPropsToValues: (props) => ({
    title: "",
    price: 0,
    category: "",
    description: "",
  }),

  validationSchema: CreateValidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      await createProduct(values);
      props.setOpenCreateProduct(false);
      toast.success("محصول با موفقیت اضافه شد.");
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string),
        );
      }
      console.log(error);
    }
  },
})(InnerCreateProductForm);

export default CreateProductForm;
