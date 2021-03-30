import http from "../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const AddKourses = async (Kourse) => {
  try {
    await http.post(MainUrl + "course/add", Kourse);
  } catch (error) {
    return {};
  }
};

export default AddKourses;
