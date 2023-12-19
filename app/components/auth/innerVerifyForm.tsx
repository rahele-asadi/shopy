import { Form } from "formik";
import Input from "../common/form/input";

const InnerVerifyForm = () => {
  return (
    <Form className='space-y-5'>
      <div>
        <Input name='code' id='code' label='Enter received Code' />
      </div>
      <button
        type='submit'
        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Confirm
      </button>
    </Form>
  );
};

export default InnerVerifyForm;
