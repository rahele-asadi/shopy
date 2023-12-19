import { ErrorMessage, Field, FieldProps } from "formik";
import { ChangeEvent, FC } from "react";

interface TextareaProps {
  name: string;
  label: string;
  id: string;
  rows?: number;
  textareaClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  onChange?: (e: ChangeEvent) => void;
}

const Textarea: FC<TextareaProps> = ({
  name,
  label,
  id,
  rows = 4,
  textareaClassName,
  labelClassName,
  errorClassName,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-700 ${labelClassName} ?? ''`}
      >
        {label}
      </label>
      {/* simple way for when customizing is not required */}
      {/* <Field
        id={id}
        rows={rows}
        as='textarea'
        name={name}
        className={`appearance-none text-gray-900 block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${textareaClassName} ?? ''`}
      /> */}
      <Field id={id} name={name}>
        {({ field, meta }: FieldProps) => (
          <textarea
            id={id}
            rows={rows}
            className={`appearance-block text-gray-900 block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${textareaClassName} ?? ''`}
            {...field}
            onChange={onChange || field.onChange}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component='div'
        className={`text-red-500 text-sm ${errorClassName} ?? ''`}
      />
    </>
  );
};

export default Textarea;
