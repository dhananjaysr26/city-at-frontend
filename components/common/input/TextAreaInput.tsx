import React from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaInputProps {
  readonly rows?: number;
  readonly columns?: number;
  field: string;
  label: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  rows = 2,
  columns = 10,
  placeholder,
  field,
  required,
  disabled,
  minLength,
  maxLength,
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

    if (minLength) {
      registerOptions.minLength = {
        value: minLength,
        message: `${label} must be at least ${minLength} characters`,
      };
    }
    if (maxLength) {
      registerOptions.maxLength = {
        value: maxLength,
        message: `${label} is limit upto ${maxLength} Characters.`,
      };
    }
    return registerOptions;
  };

  return (
    <div className="mt-1 relative">
      <textarea
        id={label + "_text"}
        rows={rows}
        cols={columns}
        className={`flex w-full border-transparent px-3 py-3 
                text-base border border-gray-300
                placeholder:text-neutral-400 
                disabled:cursor-not-allowed 
                disabled:opacity-50
                focus:outline-none
                ${disabled ? "opacity-75" : ""}
              `}
        placeholder={placeholder}
        {...register(field, {
          ...getRegisterOptions(),
        })}
        disabled={disabled}
      />
      {errorMessage ? (
        <p className="w-full mt-3 ml-2 text-sm text-red-600 text-start">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
