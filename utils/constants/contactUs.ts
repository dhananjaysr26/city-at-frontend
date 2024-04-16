export const contactUsForm = {
  formName: "Assign BIB Numbers",
  showLabel: false,
  sections: [
    {
      widgets: [
        {
          widgetType: "text",
          label: "First Name",
          field: "firstname",
          placeholder: "First name",
          required: true,
          minLength: 2,
          maxLength: 25,
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "text",
          label: "Last Name",
          field: "lastname",
          placeholder: "Last name",
          required: true,
          minLength: 2,
          maxLength: 25,
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "text",
          label: "Company",
          field: "company",
          placeholder: "Company",
          required: true,
          minLength: 5,
          maxLength: 65,
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "text",
          label: "Email",
          field: "email",
          placeholder: "Email",
          required: true,
          minLength: 4,
          maxLength: 45,
          validation: {
            type: "exclude-domain",
            values: ["gmail.com", "yahoo.com"],
          },
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "phoneNumber",
          label: "Phone Number",
          field: "phone",
          placeholder: "Phone Number",
          required: true,
          countryCodeList: [
            { countryCode: "IN", dialCode: "+91", length: 10 },
            { countryCode: "US", dialCode: "+1", length: 10 },
            { countryCode: "CN", dialCode: "+86", length: 10 },
            { countryCode: "JP", dialCode: "+81", length: 10 },
            { countryCode: "DE", dialCode: "+49", length: 10 },
            { countryCode: "FR", dialCode: "+33", length: 10 },
            { countryCode: "RU", dialCode: "+7", length: 10 },
            { countryCode: "BR", dialCode: "+55", length: 10 },
            { countryCode: "GB", dialCode: "+44", length: 10 },
            { countryCode: "AU", dialCode: "+61", length: 10 },
            { countryCode: "CA", dialCode: "+1", length: 10 },
            { countryCode: "IT", dialCode: "+39", length: 10 },
            { countryCode: "ES", dialCode: "+34", length: 10 },
            { countryCode: "MX", dialCode: "+52", length: 10 },
            { countryCode: "AR", dialCode: "+54", length: 10 },
            { countryCode: "ID", dialCode: "+62", length: 10 },
            { countryCode: "SA", dialCode: "+966", length: 10 },
            { countryCode: "ZA", dialCode: "+27", length: 10 },
            { countryCode: "EG", dialCode: "+20", length: 10 },
            { countryCode: "NG", dialCode: "+234", length: 10 },
            { countryCode: "KR", dialCode: "+82", length: 10 },
            { countryCode: "PK", dialCode: "+92", length: 10 },
            { countryCode: "TR", dialCode: "+90", length: 10 },
            { countryCode: "IR", dialCode: "+98", length: 10 },
            { countryCode: "TH", dialCode: "+66", length: 10 },
            { countryCode: "VN", dialCode: "+84", length: 10 },
            { countryCode: "PH", dialCode: "+63", length: 10 },
            { countryCode: "MY", dialCode: "+60", length: 10 },
            { countryCode: "BD", dialCode: "+880", length: 10 },
            { countryCode: "CA", dialCode: "+1", length: 10 },
            { countryCode: "CO", dialCode: "+57", length: 10 },
            { countryCode: "PE", dialCode: "+51", length: 10 },
            { countryCode: "VE", dialCode: "+58", length: 10 },
            { countryCode: "CL", dialCode: "+56", length: 10 },
            { countryCode: "EC", dialCode: "+593", length: 10 },
            { countryCode: "GT", dialCode: "+502", length: 10 },
            { countryCode: "CU", dialCode: "+53", length: 10 },
            { countryCode: "BO", dialCode: "+591", length: 10 },
            { countryCode: "PY", dialCode: "+595", length: 10 },
            { countryCode: "UY", dialCode: "+598", length: 10 },
          ],
          defaultCountry: { countryCode: "IN", dialCode: "+91", length: 10 },
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "radio",
          showLabel: true,
          className: "!flex-row",
          label: "Are you a Developer?",
          field: "developer",
          options: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ],
          defaultValue: "no",
        },
      ],
    },
    {
      widgets: [
        {
          widgetType: "textarea",
          label: "Message",
          field: "message",
          placeholder: "Describe Your Needs here!",
          rows: 5,
          columns: 5,
          minLength: 10,
          maxLength: 200,
        },
      ],
    },
  ],
};
