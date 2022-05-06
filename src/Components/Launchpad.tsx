import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Launchpad({
  name,
  status,
  launches,
}: {
  name: string;
  status: string;
  launches: any;
}) {
  return (
    <Box sx={{ minWidth: "40%", float: "left", margin: "1% 5%" }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              {name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              Status: {status}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
              Top 3 Launches
            </Typography>
          </CardContent>
          <CardActions>
            {launches.map((launch: any, index: number) => (
              <Button key={index} size="small" href={`launch/${launch}`}>
                Launch {index + 1}
              </Button>
            ))}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
