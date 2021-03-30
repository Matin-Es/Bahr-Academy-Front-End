import http from "../http-service.api";
import config from "../../../../config.json";

export async function AddCourse(obj) {
  try {
    await http.post(config.api + "/course/add", obj);
  } catch (error) {}
}

export async function getCourse() {
  let courses = [];
  try {
    const result = await http.get(config.api + "/course");
    for (var i = 0; i < result.data.result.length; i++) {
      const name = result.data.result[i].courseName;
      const id = result.data.result[i]._id;
      courses.push({ courseName: name, _id: id });
    }
  } catch (error) {
    alert("دوره ای موجود نیست لطفا یک دوره اضافه کنید");
    return (window.location = "/cpanel/add-course");
  }

  return courses;
}

export async function getAllCourse() {
  try {
    const result = await http.get(config.api + "/course");
    const course = result.data.result;
    return course;
  } catch (error) {
    return [];
  }
}

export async function delCourse(id) {
  try {
    await http.delete(config.api + "/course/" + id);
  } catch (error) {}
}

export async function upCourse(obj, id) {
  try {
    await http.put(config.api + "/course/" + id, obj);
  } catch (error) {}
}

export async function getCourseByPage(num) {
  try {
    const result = await http.get(
      config.api + "/course/list?pagenumber=" + num + "&pagesize=5"
    );
    const course = result.data.result.courses;
    let courses = { course: [], count: 0 };
    for (var i = 0; i < course.length; i++) {
      if (course[i].salt !== "") courses.course.push(course[i]);
    }
    courses.count = result.data.result.count;
    return courses;
  } catch (error) {
    return [];
  }
}

export default {
  getCourse,
  AddCourse,
  getAllCourse,
  delCourse,
  upCourse,
  getCourseByPage,
};
