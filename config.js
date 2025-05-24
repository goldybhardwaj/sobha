const { MODE, VITE_DEV_API_URL, VITE_PRO_API_URL } = import.meta.env;

if (!MODE || !VITE_DEV_API_URL || !VITE_PRO_API_URL) {
  throw new Error("Environment variables not defined");
}

export const API_URL =
  MODE === "development" ? VITE_DEV_API_URL : VITE_PRO_API_URL;
