import Http from "./httpService";
import config from "../../config.json";

export async function setNews(obj) {
  try {
    await Http.post(config.api + "/news", obj);
  } catch (error) {
    return null;
  }
}

export async function updateNews(obj, id) {
  try {
    await Http.put(config.api + "/news/" + id, obj);
  } catch (error) {}
}

export default {
  setNews,
  updateNews,
};
