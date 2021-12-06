import { baseURL } from "../../config";

export default {
  addMenu(params) {
    return fetch(`${baseURL}/api/category/${params.category}/menu`)
      .then((res) => res.json())
      .then()
  },
}