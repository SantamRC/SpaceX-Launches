function getOneLaunch(id) {
  return new Promise(function (resolve, reject) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://api.spacexdata.com/v4/launches/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
 
}

export default getOneLaunch;
