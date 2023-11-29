import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";
import callApi from "@/app/helpers/callApi";

import { FC } from "react";
import { withFormik } from "formik";
import { useRouter } from "next/router";
import * as yup from "yup";
import ValidationError from "@/app/exception/validationError";

interface RegisterFormProps {}

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(7),
});

const RegisterForm: FC<RegisterFormProps> = () => {
  const router = useRouter();

  const FormWithFormik = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: (props) => ({
      name: "",
      email: "",
      password: "",
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values, { setFieldError }) => {
      try {
        const res = await callApi().post("/auth/register", values);
        if (res.status == 201) {
          router.push("/auth/login");
        }
      } catch (error) {
        if (error instanceof ValidationError) {
          Object.entries(error.messages).forEach(([key, value]) =>
            setFieldError(key, value as string),
          );
        }
      }
    },
  })(InnerRegisterForm);

  return <FormWithFormik />;
};

export default RegisterForm;
