export const API_KEY = import.meta.env.VITE_DEEPL_API_KEY;
export const API_URL = import.meta.env.VITE_DEEPL_API_URL;

if (!API_KEY || !API_URL) {
  console.error(
    "Missing environment variables. Make sure .env file exists with VITE_DEEPL_API_KEY and VITE_DEEPL_API_URL"
  );
}
