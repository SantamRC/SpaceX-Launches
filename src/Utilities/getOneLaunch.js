function getOneLaunch(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://api.spacexdata.com/v4/launches/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default getOneLaunch;
