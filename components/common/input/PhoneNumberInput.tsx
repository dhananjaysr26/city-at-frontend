import { CountryList } from "@/types";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import SimpleSelectBox from "./SimpleSelectBox";

interface PhoneNumberInputProps {
  label: string;
  field: string;
  disabledCountry?: boolean;
  disabled: boolean;
  validation?: string;
  placeholder: string;
  required?: boolean;
  countryCodeList: CountryList[];
  defaultCountry?: CountryList;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  field,
  required = false,
  disabled = false,
  validation,
  placeholder,
  countryCodeList,
  defaultCountry,
}) => {
  const [country, setCountry] = useState(defaultCountry);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage: any = errors[field]?.message;

  const validateNumberLength = (value: number) => {
    if (!(country?.length && value?.toString().length === country?.length)) {
      return `Number Should be ${country?.length} Digits`;
    } else {
      return null;
    }
  };

  const getRegisterOptions = () => {
    let registerOptions: any = {};

    if (required) {
      registerOptions.required = `Enter Your ${label}`;
    }

    if (country?.length) {
      registerOptions.validate = validateNumberLength;
    }
    return registerOptions;
  };

  console.log({ V: { ...getRegisterOptions() }, errors });

  return (
    <>
      <div className=" flex gap-x-3 items-center">
        <SimpleSelectBox
          options={countryCodeList}
          borderColor="border-gray-300"
          setSelected={(option: any) => setCountry(option)}
          select={`${country?.countryCode} (${country?.dialCode})`}
          className="max-w-[150px]"
          showSearch
        />
        <input
          type="number"
          id={label + "_text"}
          placeholder={placeholder}
          className={`w-full p-3 rounded-lg outline-none border border-gray-300 hover:border-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300   ${
            errors[field]?.message ? "outline-red-600" : null
          } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          {...register(field, {
            ...getRegisterOptions(),
            valueAsNumber: true,
          })}
          disabled={disabled}
          autoComplete="off"
        />
      </div>
      {errorMessage ? (
        <p className="w-full mt-3 ml-2 text-sm text-red-600 text-start">
          {errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default PhoneNumberInput;
