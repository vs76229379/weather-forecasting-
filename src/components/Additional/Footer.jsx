import React from "react";
import { Box, Typography, Link } from "@mui/material";

// Define a custom theme for the footer
const footerTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ff9800",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
};

// Define a custom component for the footer
function Footer() {
  return (
    <Box
      sx={{
        marginBottom:"0px",
        color: 'rgba(255,255,255, .85)',
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
      component="footer"
    >
      <Typography
        variant="h6"
        color={footerTheme.palette.primary.main}
        sx={{ fontWeight: "bold" }}
      >
        Designed and developed by{" "}
        <Link
          href="https://www.linkedin.com/in/vivek-singh-51a420291/"
          color={footerTheme.palette.primary.main}
          underline="hover"
        >
          Vivek Singh
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
