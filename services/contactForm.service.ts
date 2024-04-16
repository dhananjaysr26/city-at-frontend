import { POST_CALL } from "@/utils/helper/api";

export const createContact = async (data: any) => {
  return await POST_CALL(`/api/contact`, data);
};
