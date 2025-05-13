import type { Credentials } from "../types/authCredentials";
import { apiFetch } from "../wraps/fetcher";

export const login = async (credentials: Credentials) => {
  return apiFetch("/auth/signing", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
};
