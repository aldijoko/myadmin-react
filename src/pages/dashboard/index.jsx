import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import { mockTransactions } from "../../data/mockData";

import Header from "../../components/Header";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import Choropleth from "../../components/Choropleth";
import StatusBox from "../../components/StatusBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[300],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            <FileDownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Chart */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="15px"
      >
        {/* Row */}
        <Box
          backgroundColor={colors.black[400]}
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatusBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <MailOutlineOutlinedIcon
                sx={{
                  fontSize: "26px",
                  color: colors.blueAccent[200],
                }}
              />
            }
          />
        </Box>

        <Box
          backgroundColor={colors.black[400]}
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatusBox
            title="431,361"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  fontSize: "26px",
                  color: colors.blueAccent[200],
                }}
              />
            }
          />
        </Box>

        <Box
          backgroundColor={colors.black[400]}
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatusBox
            title="32,421"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  fontSize: "26px",
                  color: colors.blueAccent[200],
                }}
              />
            }
          />
        </Box>

        <Box
          backgroundColor={colors.black[400]}
          gridColumn="span 3"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatusBox
            title="1,361,123"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  fontSize: "26px",
                  color: colors.blueAccent[200],
                }}
              />
            }
          />
        </Box>

        {/* Second Section */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
        >
          <Box
            mt="20px"
            p="0 25px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[200]}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <FileDownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[200] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="240px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transaction */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.black[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.black[500]}`}
            color={colors.gray[100]}
            p="10px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.black[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[400]}
                p="5px 10px"
                borderRadius="10px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Third Section */}
      </Box>
    </Box>
  );
};

export default Dashboard;
