const baseURL = import.meta.env.VITE_BASE_URL; // 透過 Vite 的環境變數取得 base URL

export const API_ENDPOINTS = {
  LOGIN_API: `${baseURL}/login`,
  SIGNUP_API: `${baseURL}/sign-up`,
};
