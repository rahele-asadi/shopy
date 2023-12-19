import { withFormik } from "formik";
import * as yup from "yup";
import { Dispatch, SetStateAction } from "react";

import { CreateFormValuesInterface } from "@/app/contracts/admin";
import InnerCreateProductForm from "@/app/components/adminPanel/products/innerCreateProductForm";

interface CreateFormProps {
  setOpenCreateProduct: (open: boolean) => void | Dispatch<SetStateAction<boolean>>;
}

const CreateValidationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(255),
  price: yup.string().required().min(0),
  description: yup.string().required().min(5).max(6000),
});

const CreateProductForm = withFormik<CreateFormProps, CreateFormValuesInterface>({
  mapPropsToValues: (props) => ({
    title: "",
    price: 0,
    description: "",
  }),
  validationSchema: CreateValidationSchema,
  handleSubmit(values, formikBag) {
    console.log(values);
  },
})(InnerCreateProductForm);

export default CreateProductForm;
