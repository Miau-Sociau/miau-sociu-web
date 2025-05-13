const API_URL = "http://localhost:8080";

interface FetchOptions extends RequestInit {
  parseJson?: boolean;
}

export const apiFetch = async <T = any>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> => {
  const { parseJson = true, ...init } = options;

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
    ...init,
  });

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    const errorText = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    throw new Error(
      typeof errorText === "string"
        ? errorText
        : errorText.message || "Erro desconhecido",
    );
  }

  if (!parseJson) return (await response.text()) as T;
  if (contentType?.includes("application/json")) return response.json();
  return (await response.text()) as T;
};
