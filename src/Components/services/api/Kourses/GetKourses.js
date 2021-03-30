import http from "../http-service.api";

// main url of backend

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const GetKourses = async () => {
  try {
    // call api http://localhost:3000/api/
    const result = await http.get(MainUrl + "course");
    // console.log(result.data);
    return result.data.result;
  } catch (error) {
    return [];
  }
};
export default GetKourses;
