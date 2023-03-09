import { Box } from "@mui/material";
import Choropleth from "../../components/Choropleth";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Geography Chart Page" />
      <Box
        height="70vh"
        border={`1px solid ${colors.gray[400]}`}
        borderRadius="10px"
      >
        <Choropleth />
      </Box>
    </Box>
  );
};

export default Geography;
