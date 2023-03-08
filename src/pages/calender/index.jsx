import { useState } from "react";
import FullCalender, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Calender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvent, setCurrentEvent] = useState([]);
  return (
    // <Header/>
    <div>index</div>
  );
};

export default Calender;
