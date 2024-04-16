import React from "react";
import TextInput from "../common/input/TextInput";
import TextAreaInput from "../common/input/TextAreaInput";
import RadioInput from "../common/input/RadioInput";
import PhoneNumberInput from "../common/input/PhoneNumberInput";

interface RenderWidgetsProps {
  widget: any;
}

const RenderWidgets: React.FC<RenderWidgetsProps> = ({ widget }) => {
  const { widgetType, label, field, placeholder, required } = widget;

  const getWidgetsComponent = (widgetType: any) => {
    switch (widgetType) {
      case "text":
        return (
          <TextInput
            label={label}
            field={field}
            placeholder={placeholder}
            validation={widget.validation}
            required={required}
            disabled={widget.isDisabled}
            minLength={widget?.minLength}
            maxLength={widget.maxLength}
          />
        );
      case "textarea":
        return (
          <TextAreaInput
            placeholder={placeholder}
            field={field}
            label={label}
            rows={widget.rows}
            columns={widget.columns}
            minLength={widget?.minLength}
            maxLength={widget.maxLength}
            required={required}
          />
        );
      case "radio":
        return (
          <RadioInput
            field={field}
            label={label}
            required={required}
            options={widget?.options}
            defaultValue={widget?.defaultValue}
          />
        );
      case "phoneNumber":
        return (
          <PhoneNumberInput
            field={field}
            label={label}
            required={required}
            defaultCountry={widget?.defaultCountry}
            countryCodeList={widget?.countryCodeList}
            placeholder={placeholder}
            disabled={widget.isDisabled}
          />
        );
    }
  };
  return <>{getWidgetsComponent(widgetType)}</>;
};

export default RenderWidgets;
