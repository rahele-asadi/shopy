import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exception/validationError";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import * as yup from "yup";

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(7),
});

interface LoginFormProps {
  setCookie: any;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setCookie("shopy-token", res.data.token, {
          maxAga: 3600 * 24,
          domain: "localhost",
          path: "/",
          sameSite: "lax",
        });
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string),
        );
      }
    }
  },
})(InnerLoginForm);

export default LoginForm;
