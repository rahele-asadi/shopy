import { Form, FormikProps } from "formik";

import Input from "../../common/form/input";
import { ProductFormValuesInterface } from "@/app/contracts/admin/types";
import Textarea from "../../common/form/textarea";
import SelectBox from "../../common/form/selectBox";
import { Product } from "@/app/contracts/admin/types";

type Props = FormikProps<ProductFormValuesInterface> & {
  product?: Product;
  handleClose: () => void;
};

const InnerProductForm = (props: Props) => {
  console.log(props.product);

  return (
    <Form>
      <div className='p-5 mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8'>
        <div className='sm:col-span-2'>
          <Input name='title' id='title' label='نام محصول' />
        </div>
        <div className='sm:col-span-2'>
          <Input name='price' id='price' label='قیمت محصول' />
        </div>
        <div className='sm:col-span-2'>
          <SelectBox
            name='category'
            id='category'
            label='نوع محصول'
            options={[
              { label: "انتخاب کنید", value: "" },
              { label: "Labtop", value: "1" },
              { label: "Mobile", value: "2" },
              { label: "Tablet", value: "3" },
            ]}
          />
        </div>
        <div className='sm:col-span-4'>
          <Textarea
            name='description'
            id='description'
            label='درباره محصول'
            // this onchange is used for customize(if required)
            // onChange={(e) =>
            //   props.setFieldValue("description", (e.target as HTMLTextAreaElement).value)
            // }
          />
        </div>
      </div>
      <div className='p-6 py-4 flex items-center justify-end'>
        <button
          type='submit'
          className='ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-700'
        >
          {props?.product ? "ویرایش محصول" : "ایجاد محصول"}
        </button>
        <button
          type='button'
          onClick={props.handleClose}
          className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          انصراف
        </button>
      </div>
    </Form>
  );
};

export default InnerProductForm;
