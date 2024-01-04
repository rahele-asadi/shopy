import { Formik, Form } from "formik";
import Modal from "./modal";
import Spinner from "@/app/icons/spinner";

interface Props {
  title: string;
  description: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}

function DeleteConfirmationModal({
  title,
  description,
  handleConfirm,
  handleCancel,
}: Props) {
  return (
    <Modal show={true} setShow={handleCancel}>
      <div className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all'>
        <h2 className='font-bold text-xl text-gray-900'>{title}</h2>
        <p className='text-sm my-3 text-gray-600'>{description}</p>
        <Formik initialValues={{}} onSubmit={handleConfirm}>
          {({ isSubmitting }) => (
            <Form>
              <div className='p-6 py-4 flex items-center justify-end'>
                <button
                  onClick={handleConfirm}
                  type='submit'
                  className='ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700'
                >
                  {isSubmitting && <Spinner className='w-3 h-3 ml-2' />}
                  حذف
                </button>
                <button
                  type='button'
                  onClick={handleCancel}
                  className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  انصراف
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
}

export default DeleteConfirmationModal;
