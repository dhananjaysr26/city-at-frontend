import React from "react";
import { useFormContext } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}
interface RadioInputProps {
  label: string;
  field: string;
  disabled?: boolean;
  required?: boolean;
  defaultValue?: string;
  options: Option[];
}

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  field,
  required = false,
  disabled = false,
  defaultValue = "",
  options,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage: any = errors[field]?.message;

  const getRegisterOptions = () => {
    let registerOptions: any = {};

    if (required) {
      registerOptions.required = `Enter Your ${label}`;
    }
    return registerOptions;
  };

  return (
    <div className=" flex gap-x-3 items-center">
      {options.map((option, i) => {
        const { label, value } = option;
        const uniqueFieldName = field + i;
        return (
          <label
            className="pl-2 flex items-center gap-x-2 "
            key={uniqueFieldName}
            htmlFor={uniqueFieldName}
          >
            <input
              type="radio"
              id={uniqueFieldName}
              className={`w-auto rounded-lg outline outline-gray-300 radio-input ${
                errors[field]?.message ? "outline-red-600" : null
              }`}
              {...register(field, {
                ...getRegisterOptions(),
              })}
              style={{ "--checkColor": "#FFB72B" } as React.CSSProperties}
              disabled={disabled}
              defaultChecked={defaultValue == option?.value}
              value={option.value}
            />
            <span className={`cursor-pointer text-base font-medium`}>
              {label}
            </span>
          </label>
        );
      })}
      {errorMessage ? (
        <p className="w-full mt-3 ml-2 text-sm text-red-600 text-start">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default RadioInput;
