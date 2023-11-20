import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";

import { withFormik } from "formik";
import * as yup from "yup";

interface RegisterFormProps {
  name?: string;
}

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(7),
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
  mapPropsToValues: (props) => ({
    name: props.name ?? "",
    email: "",
    password: "",
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit(values) {
    console.log(values);
  },
})(InnerRegisterForm);

export default RegisterForm;
