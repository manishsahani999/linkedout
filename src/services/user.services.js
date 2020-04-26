import { api } from "api";
import { handle } from "api";
import { setAuthHeaders } from "api";

const login = (data) =>
  api
    .post("/users/login", data)
    .then(handle)
    .then((data) => {
      setAuthHeaders(data.token);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isEmployer", data.isEmployer);

      return data;
    });

const me = () => api.get("/users/me").then(handle);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isEmployer");
};

export const userService = {
  login,
  logout,
  me,
};
