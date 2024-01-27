export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID_PRODUCTION || process.env.GOOGLE_CLIENT_ID_DEV;

export const CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET_PRODUCTION ||
  process.env.GOOGLE_CLIENT_SECRET_DEV;
