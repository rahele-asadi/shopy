import { NextPage } from "next";
import { Field, Form, Formik } from "formik";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className='bg-white min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl tracking-tight font-bold text-gray-900'>
          Register on Shopy
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            <Form className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                  Name
                </label>
                <div className='mt-1'>
                  <Field
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email Address
                </label>
                <div className='mt-1'>
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <Field
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='password'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
