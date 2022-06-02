import axios from "axios";
import Urls from "./Urls";

export default function ApiFetch(category) {
  const access_key = "dcb5e05b90dd522d0768d9cb66cc0cab";

  // Invoking get method to perform a GET request
  return axios.get(Urls.newsurl(access_key, category));
}
