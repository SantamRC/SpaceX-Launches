import { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import Launchpad from "../Components/Launchpad";
import getLaunchPads from "../Utilities/getLaunchPads";

function Home() {
  const [launchPads, setLaunchpads] = useState([]);

  useEffect(() => {
    async function getData() {
      getLaunchPads().then((result) => {
        setLaunchpads(result);
      });
    }
    getData();
  });

  return (
    <div>
      <Appbar />
      {launchPads &&
        launchPads.map((launchPad) => (
          <Launchpad
            key={launchPad.id}
            name={launchPad.full_name}
            status={launchPad.status}
            launches={launchPad.lauches}
          />
        ))}
    </div>
  );
}

export default Home;
