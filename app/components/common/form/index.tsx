import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  type?: string;
  label: string;
  id: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const Input: FC<InputProps> = ({
  name,
  type = "text",
  label,
  id,
  inputClassName,
  labelClassName,
  errorClassName,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-700 ${labelClassName} ?? ''`}
      >
        {label}
      </label>
      <Field
        id={id}
        type={type}
        name={name}
        className={`appearance-none text-gray-900 block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${inputClassName} ?? ''`}
      />
      <ErrorMessage
        name={name}
        component='div'
        className={`text-red-500 text-sm ${errorClassName} ?? ''`}
      />
    </>
  );
};

export default Input;
