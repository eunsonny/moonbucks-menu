export const callApi = (params) => {
  console.log("params", params);
  // fetch(params.url, params.method)
  fetch(params.url, {
    method: params.method,
    // headers: params.headers,
    body: JSON.stringify(params.body),
    // body: params.body
  })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("network error");
      }
    })
    .then((responseJson) => {
      console.log('responseJson', responseJson);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
