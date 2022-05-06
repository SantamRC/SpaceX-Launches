var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getLaunches() {
  fetch("https://api.spacexdata.com/v4/landpads", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default getLaunches;
