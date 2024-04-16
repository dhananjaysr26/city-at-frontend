import React from "react";
import { useFormContext } from "react-hook-form";

interface Validation {
  type: string;
  values: any;
}
interface TextInputProps {
  label: string;
  field: string;
  disabled?: boolean;
  validation?: Validation;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  field,
  required = false,
  disabled = false,
  validation,
  minLength,
  maxLength,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage: any = errors[field]?.message;

  const validateEmailDomain = (value: string) => {
    const check = validation?.values.some((v: string) => value.includes(v));
    if (check) {
      return `This Email Domain Not Supported`;
    } else {
      return null;
    }
  };
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
    if (validation?.type === "exclude-domain") {
      registerOptions.validate = validateEmailDomain;
    }
    return registerOptions;
  };

  return (
    <div className="">
      <input
        type={field === "email" ? "email" : "text"}
        id={label + "_text"}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg outline-none border border-gray-300 hover:border-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300   ${
          errors[field]?.message ? "outline-red-600" : null
        } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        {...register(field, {
          ...getRegisterOptions(),
        })}
        disabled={disabled}
        autoComplete="off"
      />
      {errorMessage ? (
        <p className="w-full mt-3 ml-2 text-sm text-red-600 text-start">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default TextInput;
