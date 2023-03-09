import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion
        expanded={expanded === "panel1"}
        sx={{ mb: "10px" }}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h4">
            What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <Typography variant="h5">
            Cutting back on sleep drastically reduces a healthy young man's
            testosterone levels, according to a study published in the June 1
            issue of the Journal of the American Medical Association (JAMA).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        sx={{ mb: "10px" }}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h4">
            What is the purpose another of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <Typography variant="h5">
            Eve Van Cauter, PhD, professor in medicine and director of the
            study, found that men who slept less than five hours a night for one
            week in a laboratory had significantly lower levels of testosterone
            than when they had a full night's sleep. Low testosterone has a host
            of negative consequences for young men, and not just in sexual
            behavior and reproduction. It is critical in building strength and
            muscle mass, and bone density.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        sx={{ mb: "10px" }}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h4">
            What is some purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <Typography variant="h5">
            "Low testosterone levels are associated with reduced well being and
            vigor, which may also occur as a consequence of sleep loss" said Van
            Cauter.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        sx={{ mb: "10px" }}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h4">
            What is the reason purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <Typography variant="h5">
            At least 15% of the adult working population in the US gets less
            than 5 hours of sleep a night, and suffers many adverse health
            effects because of it. This study found that skipping sleep reduces
            a young man's testosterone levels by the same amount as aging 10 to
            15 years.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        sx={{ mb: "10px" }}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: colors.blueAccent[700],
          }}
        >
          <Typography variant="h4">
            What is the some another purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: colors.blueAccent[800],
          }}
        >
          <Typography variant="h5">
            "As research progresses, low sleep duration and poor sleep quality
            are increasingly recognized as endocrine disruptors," Van Cauter
            said.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
