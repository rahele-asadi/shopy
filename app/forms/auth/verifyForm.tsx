import InnerVerifyForm from "@/app/components/auth/innerVerifyForm";
import { VerifyFormValuesInterface } from "@/app/contracts/auth";
import ValidationError from "@/app/exception/validationError";
import { saveLoginToken } from "@/app/helpers/auth";
import callApi from "@/app/helpers/callApi";

import * as yup from "yup";
import { withFormik } from "formik";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface VerifyFormProps {
  token?: string;
  router: AppRouterInstance;
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
        props.router.push("/admin");
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
