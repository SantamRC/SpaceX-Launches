import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneLaunch from "../Utilities/getOneLaunch";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Launch() {
  const [launch, setLaunch] = useState<{
    name: string;
    details: string;
    date_utc: string;
    cores: Array<any>;
    links: any;
  }>();
  const [reused, setReused] = useState<string>("false");
  let { id } = useParams();

  useEffect(() => {
    getOneLaunch(id).then((result) => {
      setLaunch(result);
      console.log(result.cores[0]["reused"]);
      //setReused(result.cores[0]["reused"]);
    });
  }, []);

  return (
    <div>
      {launch && (
        <div>
          <Typography
            style={{ textAlign: "center", marginTop: "2%" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            {launch.name ? launch.name : "No Data"}
          </Typography>
          <Typography
            style={{ marginLeft: "5%" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {launch!.details ? launch!.details : "No Data"}
          </Typography>
          <Typography
            style={{ marginLeft: "5%" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Date of Launch:{" "}
            {launch!.date_utc ? launch!.date_utc.split("T")[0] : "No Data"}
          </Typography>
          <Typography
            style={{ marginLeft: "5%" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Reused:{" "}
            {launch.cores[0].reused ? launch.cores[0].reused : "No Data"}
          </Typography>
          <ImageList
            sx={{ maxWidth: "70%", marginLeft: "auto", marginRight: "auto" }}
            cols={3}
            rowHeight={164}
          >
            {launch.links.flickr.original.map((item: any) => (
              <ImageListItem key={item}>
                <img
                  src={`${item}`}
                  srcSet={`${item}`}
                  alt={"Rocket"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </div>
  );
}

export default Launch;
