import { Form, FormikProps } from "formik";

import Input from "../common/form";
import { LoginFormValuesInterface } from "@/app/contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className='space-y-6'>
      <div>
        <Input name='phone' id='phone' label='Phone Number' />
      </div>
      {/* <div>
        <Input name='password' id='password' label='Password' type='password' />
      </div> */}
      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Login
      </button>
    </Form>
  );
};

export default InnerLoginForm;
