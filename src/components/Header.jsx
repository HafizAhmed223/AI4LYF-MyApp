import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/home.svg";
import AnalIcon from "../assets/analy.svg";
import BellIcon from "../assets/Bell.svg";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1B73A3" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink to="/" className="flex items-center gap-2">
              <img src={HomeIcon} alt="Logo" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg">MyApp</span>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: { xs: "5px", sm: "10px", md: "20px" },
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-3 gap-2 ${
                  isActive ? "bg-[#165F87] rounded-md" : ""
                }`
              }
            >
              <img src={HomeIcon} alt="home" className="w-5 h-5" />
              <span className="text-white hidden sm:block">Dashboard</span>
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center p-3 gap-2 ${
                  isActive ? "bg-[#165F87] rounded-md" : ""
                }`
              }
            >
              <img src={AnalIcon} alt="analytics" className="w-5 h-5" />
              <span className="text-white hidden sm:block">Analytics</span>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              gap: { xs: "10px", sm: "20px" },
            }}
          >
            <Tooltip title="Notifications">
              <IconButton
                sx={{
                  position: "relative",
                  p: 0,
                  backgroundColor: "#EDF7FC",
                  height: "40px",
                  width: "40px",
                  "&:hover": {
                    bgcolor: "#D1EEFC",
                  },
                }}
              >
                <img src={BellIcon} alt="bell" />
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "red",
                    top: "-2px",
                    right: "-2px",
                    width: "14px",
                    height: "14px",
                    color: "#fff",
                    fontSize: "10px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  3
                </Box>
              </IconButton>
            </Tooltip>

            <Tooltip title="Settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User" src="../assets/Placeholder.png" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
