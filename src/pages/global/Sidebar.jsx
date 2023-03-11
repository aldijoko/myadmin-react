import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem 
      active={selected === title} 
      style={{ color: colors.gray[100]}} 
      onClick={() => setSelected(title)} 
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);
  const [isSelected, setIsSelected] = useState("Dashboard");

  return (
    <Box 
      sx={{
        
        "& .pro-sidebar-inner": {
          backgroundColor: `${colors.black[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#4682B4 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6495ED !important",
        }
      }}>
       <ProSidebar collapsed={collapsed} >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0",
              color: colors.gray[100],
            }}>
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                <Typography variant="h3" sx={{ color: colors.gray[100] }}>ADMIN</Typography>
                <IconButton>
                  <MenuOutlinedIcon  />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          
          {!collapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* <img 
                  src={`../../assets/images/avatars/avatar-1.png`}
                  alt="profile"
                  width="100px"
                  height="100px"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                  }} /> */}
                  <div className="w-[100px] h-[100px] cursor-pointer rounded-full bg-gray-400">

                  </div>
              </Box>
              <Box textAlign="center" mt="20px">
                <Typography 
                  variant="h2" 
                  color={colors.gray[100]}
                  fontWeight="bold"
                  >Aldi Joko</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>Frontend Developer</Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item 
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "5px 0 5px 25px"}}>Data</Typography>
            <Item 
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlineOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Contacts Information"
              to="/contacts"
              icon={<ContactPageOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "5px 0 5px 25px"}}>Pages</Typography>
            <Item 
              title="Profile Form"
              to="/form"
              icon={<PersonOutlineOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Calendar"
              to="/calender"
              icon={<CalendarMonthOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "5px 0 5px 25px"}}>Charts</Typography>
            <Item 
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
            <Item 
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon/>}
              selected={isSelected}
              setSelected={setIsSelected}/>
          </Box>
          
        </Menu>
       </ProSidebar>
    </Box>
  )
};

export default Sidebar;
