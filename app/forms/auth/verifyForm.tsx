import InnerVerifyForm from "@/app/components/auth/innerVerifyForm";
import { VerifyFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exception/validationError";
import { saveLoginToken } from "@/app/helpers/auth";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import * as yup from "yup";

interface VerifyFormProps {
  token?: string;
  router: any;
  clearToken: () => void;
}

const verifyFormValidationSchema = yup.object().shape({
  // token: yup.string().required(),
  code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "You can only enter numbers")
    .length(6),
});

const VerifyForm = withFormik<VerifyFormProps, VerifyFormValuesInterface>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props.token || "",
  }),
  validationSchema: verifyFormValidationSchema,
  handleSubmit: async (values, { setFieldError, props }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      if (res.status === 200) {
        saveLoginToken(res.data?.user?.token);
        props.router.push("/panel");
        props.clearToken();
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string),
        );
      }
    }
  },
})(InnerVerifyForm);

export default VerifyForm;
