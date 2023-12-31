import { Form, FormikProps } from "formik";
import Input from "../common/form/input";
import { RegisterFormValuesInterface } from "@/app/contracts/auth";

const InnerRegisterForm = (props: FormikProps<RegisterFormValuesInterface>) => {
  return (
    <Form className='space-y-6'>
      <div>
        <Input name='name' id='name' label='Name' />
      </div>
      <div>
        <Input name='phone' id='phone' label='Phone Number' />
      </div>
      {/* <div>
        <Input name='email' id='email' label='Email Address' type='email' />
      </div>
      <div>
        <Input name='password' id='password' label='Password' type='password' />
      </div> */}
      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Register
      </button>
    </Form>
  );
};

export default InnerRegisterForm;
