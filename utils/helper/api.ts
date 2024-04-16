export const handleResponse = async (response: Response) => {
  if (response.status === 200 || response.status === 201) {
    const data = await response.json();
    const statusCode = response.status;
    return { data, statusCode };
  }
  console.error("🔥HANDLE_API👉🏻", response);
  return { statusCode: response.status };
};

export const POST_CALL = async (PostUrl: string, body: any) => {
  const response = await fetch(`${PostUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(handleResponse);
  return response;
};
