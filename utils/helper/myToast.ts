import toast from "react-hot-toast";

export const toastMessage = (message: string, type: "error" | "success") => {
  toast.dismiss();
  type === "success" ? toast.success(message) : toast.error(message);
};

export const toastError = (text: string) => {
  toastMessage(text, "error");
};

export const toastSuccess = (text: string) => {
  toastMessage(text, "success");
};
