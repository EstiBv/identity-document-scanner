const getDataApi = () => {
  return fetch("https://front-exercise.z1.digital/evaluations", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      return data.summary;
    })
    .catch((error) => console.log("Ha sucedido un error en la petición"));
};
export default getDataApi;
