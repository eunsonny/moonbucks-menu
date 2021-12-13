import { baseURL } from "../../config.js";
import { callApi } from "../utils/callApi.js";
export default {
    addMenu: function (params) {
        return callApi({
            method: "POST",
            url: baseURL + "/api/category/" + params.category + "/menu",
            body: { name: params.menuName },
            headers: { "Content-Type": "application/json" },
        });
    },
};
