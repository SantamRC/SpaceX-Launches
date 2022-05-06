import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Launchpad({
  name,
  status,
  launches,
  image,
}: {
  name: string;
  status: string;
  launches: any;
  image: string;
}) {
  return (
    <Box
      sx={{
        width: "48%",
        float: "left",
        margin: "1% 1%",
      }}
    >
      <Card
        variant="outlined"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          height: "12rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <img style={{ width: "40%", flex: 1.5 }} src={image} alt={"Rocket"} />
          <CardContent style={{ width: "30%", flex: 1 }}>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              Status: {status}
            </Typography>
            <Typography
              sx={{ fontSize: 14, display: "block" }}
              color="text.primary"
              gutterBottom
            >
              Top 3 Launches
            </Typography>
            {launches.map((launch: any, index: number) => (
              <Button key={index} size="small" href={`launch/${launch}`}>
                Launch {index + 1}
              </Button>
            ))}
          </CardContent>
        </div>
      </Card>
    </Box>
  );
}
