export function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
}
