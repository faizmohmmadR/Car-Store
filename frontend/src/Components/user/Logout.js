const Logout = () => {
  localStorage.removeItem("token");
  window.location = "/signin/:id/";

  return null;
};

export default Logout;
