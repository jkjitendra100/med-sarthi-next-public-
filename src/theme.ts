"use client";

import { createTheme } from "@mui/material/styles";

// Define your custom colors and styles
export const theme: any = createTheme({
  palette: {
    primary: {
      main: "#0d69aa",
    },
    secondary: {
      main: "#13aae1",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          margin: "8px 0",
        },
      },
    },
  },
});
