import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Launchpad({ name }: { name: string }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.primary"
              gutterBottom
            >
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
