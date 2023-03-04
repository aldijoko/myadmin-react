import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
        <Typography 
            variant="h2" 
            sx={{ color: colors.gray[100], mb: "5px" }} 
            fontWeight="bold">{title}</Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[400] }}>{subtitle}</Typography>
    </Box>
  )
}

export default Header