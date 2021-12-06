export const callApi = (params) => {
  try {
    fetch(params.url, params.method)
      .then((res) => res.json())
  } catch (error) {

  }
}