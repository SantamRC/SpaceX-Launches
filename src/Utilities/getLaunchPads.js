function getLaunchPads() {
  return new Promise(function (resolve, reject) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.spacexdata.com/v4/landpads", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        return resolve(result);
      })
      .catch((error) => {
        console.log("error", error);
        return reject("API Error");
      });
  });
}

export default getLaunchPads;
