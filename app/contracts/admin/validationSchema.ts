import * as yup from "yup";

export const ProductValidationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(255),
  price: yup.string().required().min(0),
  category: yup.string().required(),
  description: yup.string().required().min(5).max(6000),
});
