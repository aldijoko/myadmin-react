import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
        },
        redColor: {
          100: "#fdccdd",
          200: "#fb99bc",
          300: "#f9669a",
          400: "#f73379",
          500: "#f50057",
          600: "#c40046",
          700: "#930034",
          800: "#620023",
          900: "#310011",
        },

        blueColor: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },

        black: {
          100: "#d4ccf4",
          200: "#a999e8",
          300: "#7e66dd",
          400: "#5333d1",
          500: "#2800c6",
          600: "#20009e",
          700: "#180077",
          800: "#10004f",
          900: "#080028",
        },

        greenColor: {
          100: "#ccebcc",
          200: "#99d699",
          300: "#66c266",
          400: "#33ad33",
          500: "#009900",
          600: "#007a00",
          700: "#005c00",
          800: "#003d00",
          900: "#001f00",
        },
      }
    : {}),
});
// color design
