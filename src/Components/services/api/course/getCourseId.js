import { setItem } from "../../storage/storage";
import http from "../http-service.api";


// main url of backend 

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

export const getCourseId = async (num) => {
    try {
        // call api http://localhost:3000/api/
        const result = await http.get(MainUrl + "term/" + num);
        //console.log(result.data.result);
        return result.data.result;
    } catch (error) {
        return null;
    }
};