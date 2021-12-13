export var callApi = function (params) {
    console.log("params", params);
    // fetch(params.url, params.method)
    fetch(params.url, {
        method: params.method,
        // headers: params.headers,
        body: JSON.stringify(params.body),
        // body: params.body
    })
        .then(function (res) {
        console.log(res);
        if (res.status === 200) {
            return res.json();
        }
        else {
            throw new Error("network error");
        }
    })
        .then(function (responseJson) {
        console.log('responseJson', responseJson);
    })
        .catch(function (error) {
        console.log("error", error);
    });
};
