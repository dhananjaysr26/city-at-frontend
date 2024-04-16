import { useEffect, useRef, useState } from "react";
import ChevronDown from "@heroicons/react/24/solid/ChevronDoubleDownIcon";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

interface Props<T = string> {
  options: T[];
  defaultValue?: T;
  showSearch?: boolean;
  disabled?: boolean;
  borderColor?: string;
  disabledColor?: string;
  setSelected: (option: T) => void;
  select: T;
  className?: string;
}

const SimpleSelectBox = <T extends string>({
  options,
  defaultValue,
  showSearch = false,
  disabled = false,
  borderColor = "border-black",
  disabledColor = "bg-form-field-disabled-color/50",
  setSelected,
  select,
  className = "w-auto max-w-[200px]",
}: Props<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newOptions, setNewOptions] = useState<T[]>([]);
  const searchElement = useRef<HTMLInputElement>(null);

  const onSelect = (option: T) => {
    setSelected(option);
    setIsDropdownOpen(false);
    setNewOptions([]);
  };

  const onSearch = (query: string) => {
    const updatedOptions = options.filter((d: any) => {
      const label = d?.countryCode;
      return label.toLowerCase().includes(query.toLowerCase());
    });
    setNewOptions(updatedOptions as T[]);
  };

  useEffect(() => {
    if (defaultValue !== undefined && defaultValue !== null) {
      setSelected(defaultValue);
    }
  }, [defaultValue, setSelected]);

  const getOptionsList = (optionsArray: T[]) => {
    return (
      <>
        {optionsArray.map((option: any, i) => (
          <li
            key={i}
            className={`hover:bg-gray-100 text-start border rounded-lg mt-2 hover:cursor-pointer p-2`}
            onClick={(e) => {
              onSelect(option);
              e.stopPropagation();
            }}
          >
            {`${option?.countryCode} (${option?.dialCode})`}
          </li>
        ))}
      </>
    );
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        className={`flex justify-between border border-gray-300 ${borderColor} rounded-lg p-3 px-4 ${
          disabled ? disabledColor : "bg-white"
        } ${isDropdownOpen ? " border-red-300 rounded-b-none" : ""}`}
        onClick={() => {
          if (!disabled) {
            setIsDropdownOpen((prev) => !prev);
            setNewOptions([]);
          }
        }}
      >
        <input
          className={`w-full outline-none select-none ${
            disabled ? disabledColor : "bg-white"
          } font-normal`}
          value={select ? String(select) : "Select"}
          readOnly
          style={{ color: disabled ? "#bdbdbd" : "" }}
        />
        <ChevronDown
          className={`h-5 cursor-pointer ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isDropdownOpen && (
        <div
          className={`w-full flex items-center border border-input-b border-t-0 max-h-[200px] ${borderColor} flex-col absolute bg-white z-50 ${
            isDropdownOpen ? "border-red-300" : ""
          }`}
        >
          {showSearch && (
            <div className={`relative w-full flex justify-start mt-1`}>
              <input
                placeholder="Search"
                ref={searchElement}
                type="text"
                maxLength={20}
                className="p-2 pl-7 font-semibold border outline-none bg-slate-200 border-input-b focus:border-red-200 rounded-form"
                onChange={(e) => onSearch(e.target.value)}
                style={{ width: "99%" }}
              />
              <div className="absolute -translate-y-1/2 top-1/2 left-1 bg-slate-50">
                <SearchIcon className=" h-5 w-5 bg-slate-200" />
              </div>
            </div>
          )}
          <ul className="flex flex-col justify-start w-full p-2 py-1 pb-2 overflow-auto h-fit tablet:py-2 tablet:pb-3">
            {newOptions.length > 0 ? (
              getOptionsList(newOptions)
            ) : searchElement.current &&
              searchElement.current?.value.length > 0 ? (
              <p className="text-red-500">Result Not Found!</p>
            ) : (
              getOptionsList(options)
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleSelectBox;
