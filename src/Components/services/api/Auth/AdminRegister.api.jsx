import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

 const RegisterAdmin = async (user) => {
  try {
    await http.post(MainUrl + "auth/employee/register", user);
  } catch (error) {
    return {};
  }
};

export default RegisterAdmin