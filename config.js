export const BASE_API =
  import.meta.env.MODE === "development"
    ? 'http://localhost:8000'
    : 'https://api-sobha.onrender.com';
