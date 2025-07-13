export const useAuth = () => {
  const login = () => localStorage.setItem("isLoggedIn", "true");
  const logout = () => localStorage.removeItem("isLoggedIn");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return { isLoggedIn, login, logout };
};
