import { HUB_SPOT_TOKEN } from "@/utils/constants";
import { handleResponse } from "@/utils/helper/api";

export const POST_HUB_SPOT = async (PostUrl: string, body: any) => {
  const response = await fetch(`${PostUrl}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUB_SPOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(handleResponse);
  return response;
};
