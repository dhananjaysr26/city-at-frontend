"use client";

import { contactUsForm } from "@/utils/constants/contactUs";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderLabel from "./Form/RenderLabel";
import RenderWidgets from "./Form/RenderWigets";
import { createContact } from "@/services/contactForm.service";
import { toastError, toastSuccess } from "@/utils/helper/myToast";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const methods = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields, isValid },
  } = methods;
  // console.log(watch());
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    const { dialCode, phone, ...rest } = data;
    setIsLoading(true);
    try {
      const res = await createContact({
        ...rest,
        phone: `${dialCode}-${phone}`,
      });
      if (res.statusCode === 200) {
        reset();
        return toastSuccess("Submitted SuccessFully!");
      } else if (res.statusCode === 409) {
        return toastError("Already Submitted with this Email!");
      }
    } catch (err) {
      console.log(err);
      return toastError("Something went Wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <FormProvider {...methods}>
          <form
            className="bg-[#F5FAFF] h-fit flex flex-col max-w-[450px] gap-y-5  px-6 py-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {contactUsForm.sections.map(
              (section: any, sectionIndex: number) => {
                return section.widgets?.map((widget: any, index: number) => {
                  return (
                    <div
                      className={`flex py-2 ${
                        widget?.className ? widget?.className : "flex-col"
                      } w-full gap-2  `}
                      key={widget?.field}
                    >
                      {(contactUsForm?.showLabel || widget?.showLabel) && (
                        <RenderLabel
                          label={widget.label}
                          required={widget?.required}
                          className=" text-nowrap !w-[150px] items-center flex"
                        />
                      )}
                      <div className="ml-2">
                        <RenderWidgets widget={widget} />
                      </div>
                    </div>
                  );
                });
              }
            )}
            {/* submit Button */}
            <button
              disabled={isLoading}
              className="bg-primary relative cursor-pointer disabled:text-white/50 disabled:bg-primary/50 text-sm  py-2.5 px-6 text-white rounded-md max-w-[150px]"
            >
              <span className=" transition-all duration-1000">
                {isLoading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default ContactForm;
