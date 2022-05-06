import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Assets/logo.png";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div onClick={() => navigate("/")}>
            <img style={{ width: "15%" }} src={logo} alt={"logo"} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
