import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Pobieranie tokenu CSRF z ciasteczek
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const trimmedCookie = cookie.trim();

    if (trimmedCookie.startsWith(`${name}=`)) {
      return decodeURIComponent(trimmedCookie.substring(name.length + 1));
    }
  }

  return null;
}

// Automatyczne dodawanie CSRF do zapytań
api.interceptors.request.use((config) => {
  const csrfToken = getCookie("csrftoken");

  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }

  return config;
});

export default api;
