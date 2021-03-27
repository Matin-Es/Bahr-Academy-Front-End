import http from "../../http-service.api";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;
const GetCourse = async () => {

  try {
    const result = await http.get(MainUrl + "student/getall");
    console.log(result)
    return result.data.result;
  
  } catch(e) {
    console.log(e)
    return {
      
    };
  }
};
export default GetCourse;
