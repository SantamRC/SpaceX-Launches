import { useEffect, useState } from "react";
import Launchpad from "../Components/Launchpad";
import getLaunchPads from "../Utilities/getLaunchPads";

function Home() {
  const [launchPads, setLaunchpads] = useState<any[]>([]);

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
      {launchPads &&
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
        ))}
    </div>
  );
}

export default Home;
