import React from "react";
import Logo from "../assets/images/Logo.png";

import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
// https://mui.com/material-ui/react-stack/
// The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px={"20px"}
    >
      <Link to={"/"}>
        <img src={Logo} alt="" style={logoStyles} />
      </Link>
      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems="flex-end"
      >
        <Link to={"/"} style={homeLink}>
          {" "}
          Home{" "}
        </Link>
        <a href="#exercises" style={anchorExercises}>
          {" "}
          Exercises{" "}
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

const logoStyles = {
  width: "48px",
  height: "48px",
  margin: "0 20px",
};

const homeLink = {
  textDecoration: "none",
  color: "3A1212",
  borderBottom: "3px solid #FF2625",
};

const anchorExercises = {
  textDecoration: "none",
  color: "#3A1212",
};
