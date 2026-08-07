export const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  (typeof window !== "undefined" && window.location.hostname !== "localhost"
    ? "/api/v1"
    : "http://localhost:4000/api/v1");
