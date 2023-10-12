import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigat = useNavigate()
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigat('/signin/')
  return null;
};

export default Logout;
