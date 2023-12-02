import InnerLoginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exception/validationError";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import * as yup from "yup";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const loginFormValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    .min(11)
    .matches(phoneRegExp, "Phone number format is not correct"),
  // email: yup.string().required().email(),
  // password: yup.string().required().min(7),
});

interface LoginFormProps {
  router: any;
  setToken: (token: string) => void;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    phone: "",
    // email: "",
    // password: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setToken(res.data.token);
        props.router.push("/auth/login/verify");
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
