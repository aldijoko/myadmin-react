import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import TungstenIcon from '@mui/icons-material/Tungsten';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.black[900]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }} >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <TungstenIcon />
          ) : (
            <TungstenOutlinedIcon />
          )}
         
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: colors.black }} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ color: colors.black }} />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon sx={{ color: colors.black }} />
        </IconButton>

      </Box>
    </Box>
  );
};

export default Topbar;
