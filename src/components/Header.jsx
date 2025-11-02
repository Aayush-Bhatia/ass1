import React from 'react';
import { AppBar , Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Header({toggleDrawer}) {
  
  return (
    <AppBar 
        position="fixed" 
        className="bg-blue-600"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} // Taaki yeh Desktop drawer ke upar rahe
      >
        <Toolbar className="flex justify-between">
          <div className="flex items-center gap-2">
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { sm: 'none' } }} // Sirf mobile par dikhega
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Feedback Portal
            </Typography>
          </div>
          {/* <Avatar alt="User Avatar" src="https://i.pravatar.cc/40" /> */}
        </Toolbar>
      </AppBar>
  );
}

export default Header;