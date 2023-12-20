import { ErrorMessage, Field, FieldProps } from "formik";
import { ChangeEvent, FC } from "react";

interface SelectBoxOptionInterface {
  value: string | number;
  label: string;
}

interface SelectBoxProps {
  name: string;
  label: string;
  id: string;
  options: SelectBoxOptionInterface[];
  selectBoxClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  onChange?: (e: ChangeEvent) => void;
}

const SelectBox: FC<SelectBoxProps> = ({
  name,
  label,
  id,
  options,
  selectBoxClassName,
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
      <Field id={id} name={name}>
        {({ field, meta }: FieldProps) => (
          <select
            id={id}
            {...field}
            className={`appearance-block text-gray-900 block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm ${selectBoxClassName} ?? ''`}
            onChange={onChange || field.onChange}
          >
            {options.map((option: SelectBoxOptionInterface, index) => (
              <option key={index} value={option.value} defaultValue={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

export default SelectBox;
