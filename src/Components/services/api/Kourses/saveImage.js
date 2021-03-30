import http from "../http-service.api";

export function SaveImage(data) {
  http
    .post("http://localhost:8999/upload", data, {
      // receive two parameter endpoint url ,form data
    })
    .then((res) => {
      // then print response status
      console.log(res.statusText);
    });
}

export default {
  SaveImage,
};
