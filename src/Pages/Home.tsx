import React, { useEffect, useState } from "react";
import Launchpad from "../Components/Launchpad";
import getLaunchPads from "../Utilities/getLaunchPads";
import loader from "../Assets/loader.gif";

function Home() {
  const [launchPads, setLaunchpads] = useState<any[]>([]);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    async function getData() {
      getLaunchPads().then((result) => {
        setLaunchpads(result);
      });
    }

    getData();
  });

  return (
    <React.Fragment>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            backgroundColor: "white",
            position: "absolute",
          }}
        >
          <img
            style={{
              margin: "auto",
              display: "block",
              zIndex: "1",
            }}
            src={loader}
            alt="loader"
          />
        </div>
      ) : (
        launchPads &&
        launchPads.map((launchPad, id) => (
          <Launchpad
            key={launchPad.id}
            name={launchPad.full_name}
            status={launchPad.status}
            launches={launchPad.launches.filter(
              (launch: any, ind: number) => ind < 3
            )}
            image={launchPad.images.large[0]}
          />
        ))
      )}
    </React.Fragment>
  );
}

export default Home;
