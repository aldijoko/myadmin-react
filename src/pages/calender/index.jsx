import { useState } from "react";
import FullCalender from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
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

  const handleDateClick = (selected) => {
    // console.log(selected, "selected");
    const title = prompt("Please enter a new title for your event");
    const calenderApi = selected.view.calendar;
    // console.log(calenderApi, "calenderApi");
    calenderApi.unselect(); // clear date selection

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
    // console.log(title);
    // console.log(selected, "handledate");
  };

  const handleEventClick = (selected) => {
    // console.log(selected, "handleevent");
    if (window.confirm("Are you sure you want to delete this event?")) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calender" subtitle="Full Calender Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Calender Event */}
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="20px"
          color={colors.black[100]}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h5" color={colors.gray[100]}>
            Calender Events
          </Typography>
          <List>
            {currentEvent.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  margin: "15px 0",
                  backgroundColor: colors.greenAccent[400],
                  borderRadius: "10px",
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calender */}
        <Box
          flex="1 1 100%"
          ml="15px"
          p="15px"
          borderRadius="20px"
          color={colors.black[100]}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <FullCalender
            height="65vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(e) => setCurrentEvent(e)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
