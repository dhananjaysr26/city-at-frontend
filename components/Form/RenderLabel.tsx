import React from "react";

interface RenderLabelProps {
  label: string;
  required?: boolean;
  className?: string;
}

const RenderLabel: React.FC<RenderLabelProps> = ({
  label,
  required = false,
  className = "",
}) => {
  return (
    <label
      className={`text-sm text-center font-normal w-32 ${className}`}
      htmlFor={label}
    >
      {label}
      {required && <span className="text-lg text-red-600"> *</span>}
    </label>
  );
};

export default RenderLabel;
