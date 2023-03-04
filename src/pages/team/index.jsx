import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import Header from "../../components/Header";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; 


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'access',
            headerName: 'Access Level',
            flex: 1,
            renderCell: ({ row: { access }}) => {
                return (
                    <Box 
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
                        borderRadius="5px"
                    >
                       {access === "admin" && <GroupsOutlinedIcon /> }
                       {access === "manager" && <ShieldOutlinedIcon /> }
                       {access === "user" && <LockOutlinedIcon /> }
                       <Typography color={colors.gray[100]} sx={{ ml: "5px" }}>
                            {access}
                       </Typography>
                    </Box>
                )
            }
        }
    ]

  return (
    <Box m="20px">
        <Header title="Team" subtitle="Managing the Team Member" />
        <Box
            m="20px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[200]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[800],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.black[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[800]
                },
                "& .MuiDataGrid-iconSeparator": {
                    display: "none"
                }
            }}>
         <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
    </Box>
  )
}

export default Team