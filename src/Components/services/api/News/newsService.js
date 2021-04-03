import http from "../http-service.api";
import config from "../../../../config.json";

export async function setNews(obj) {
  try {
    await http.post(config.api + "/news", obj);
  } catch (error) {
    return null;
  }
}

export async function updateNews(obj, id) {
  try {
    await http.put(config.api + "/news/" + id, obj);
  } catch (error) {}
}

export default {
  setNews,
  updateNews,
};
