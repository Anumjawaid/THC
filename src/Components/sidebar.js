import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo from '../UI/logo.png'
import AppsIcon from '@material-ui/icons/Apps';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 290;

export default function SideBar() {
  let history=useNavigate()
  const listItems=[
    {text:"Dashboard",
     icon:<AppsIcon/>,
     path:"/dashboard"},

     {text:"Book Appointments",
     icon:<WatchLaterOutlinedIcon/>,
     path:"/bookappointment"},

     {text:"Account Settings",
     icon:<SettingsIcon/>,
     path:"/accountsettings"},

     {text:"SignOut",
     icon:<ExitToAppIcon/>,
     path:"/"},
  ]
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
     
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
          {/* If logo then here */}
          <img src={logo} />
       
        <List>
          {listItems.map((text, index) => (
            <ListItem button key={text.text}
            onClick={()=>history(text.path)}
             style={{color:' #62C5C4',fontSize:'18px'}}>
              <ListItemIcon style={{color:' #62C5C4',fontSize:'18px'}}>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      </React.Fragment>
 
  );
}
