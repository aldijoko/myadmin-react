import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#d9d9d9",
          200: "#b3b3b3",
          300: "#8c8c8c",
          400: "#666666",
          500: "#404040",
          600: "#333333",
          700: "#262626",
          800: "#1a1a1a",
          900: "#0d0d0d",
        },
        black: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        redAccent: {
          100: "#e8cccc",
          200: "#d19999",
          300: "#b96666",
          400: "#a23333",
          500: "#8b0000",
          600: "#6f0000",
          700: "#530000",
          800: "#380000",
          900: "#1c0000",
        },
        blueAccent: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033"
      },
        greenAccent: {
          100: "#cce0cc",
          200: "#99c199",
          300: "#66a266",
          400: "#338333",
          500: "#006400",
          600: "#005000",
          700: "#003c00",
          800: "#002800",
          900: "#001400",
        },
      }
    : {
        gray: {
          100: "#0d0d0d",
          200: "#1a1a1a",
          300: "#262626",
          400: "#333333",
          500: "#404040",
          600: "#666666",
          700: "#8c8c8c",
          800: "#b3b3b3",
          900: "#d9d9d9",
        },
        black: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", 
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        redAccent: {
          100: "#1c0000",
          200: "#380000",
          300: "#530000",
          400: "#6f0000",
          500: "#8b0000",
          600: "#a23333",
          700: "#b96666",
          800: "#d19999",
          900: "#e8cccc",
        },
        blueAccent: {
          100: "#000033",
          200: "#000066",
          300: "#000099",
          400: "#0000cc",
          500: "#0000ff",
          600: "#3333ff",
          700: "#6666ff",
          800: "#9999ff",
          900: "#ccccff",
      },
        greenAccent: {
          100: "#001400",
          200: "#002800",
          300: "#003c00",
          400: "#005000",
          500: "#006400",
          600: "#338333",
          700: "#66a266",
          800: "#99c199",
          900: "#cce0cc",
        },
      }),
});



//mui theme setting
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            primary: {
              main: colors.black[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
