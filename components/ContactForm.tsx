"use client";

import { contactUsForm } from "@/utils/constants/contactUs";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderLabel from "./Form/RenderLabel";
import RenderWidgets from "./Form/RenderWigets";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const methods = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields, isValid },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  console.log(watch());

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
            <button className="bg-[#3E497A] cursor-pointer text-sm  py-2.5 px-6 text-white rounded-md max-w-[150px]">
              Send Message
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default ContactForm;
