import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CssBaseline,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

// Sabhi pages ko import karo
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx'; // Yeh assignment wala main page hai


/**
 * Yeh main App component hai.
 * Yeh poori app ka layout (Header, Drawer, Content, Footer) manage karta hai.
 */
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home'); // Default page 'Home' hai

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Navigation items ka array
  const pages = [
    { text: 'Home', icon: <HomeIcon />, component: <HomePage /> },
    { text: 'Feedback', icon: <FeedbackIcon />, component: <FeedbackPage /> },
    { text: 'About', icon: <InfoIcon />, component: <AboutPage /> },
    { text: 'Settings', icon: <SettingsIcon />, component: <SettingsPage /> },
  ];

  // Active page ke basis par component render karta hai
  const renderPage = () => {
    const page = pages.find((p) => p.text === activePage);
    return page ? page.component : <HomePage />;
  };

  return (
    // Main container (Row flex)
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* 1.(Header) */}
      <Header toggleDrawer={toggleDrawer}/>

      {/* 2. Navigation Drawer (Mobile ke liye) */}
      <Drawer
        variant="temporary" // Mobile par temp dikhega
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Mobile par performance ke liye
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Mobile par 'block', desktop par 'none'
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Toolbar /> {/* AppBar jitni khaali jagah */}
        <Typography variant="h6" className="p-4">
          Menu
        </Typography>
        <Divider />
        <List>
          {pages.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                setActivePage(item.text);
                toggleDrawer();
              }}
              className={
                activePage === item.text
                  ? 'bg-blue-100 text-blue-700' // Active link style
                  : 'hover:bg-gray-100'
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* 3. Permanent Sidebar (Desktop ke liye) */}
      <Drawer
        variant="permanent" // Hamesha dikhega
        sx={{
          display: { xs: 'none', sm: 'block' }, // Mobile par 'none', desktop par 'block'
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, position: 'relative' },
        }}
        open
      >
        <Toolbar /> {/* AppBar jitni khaali jagah */}
        <Typography variant="h6" className="p-4">
          Menu
        </Typography>
        <Divider />
        <List>
          {pages.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => setActivePage(item.text)}
              className={
                activePage === item.text
                  ? 'bg-blue-100 text-blue-700' // Active link style
                  : 'hover:bg-gray-100'
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 4. Main Content + Footer Wrapper (Column flex) */}
      <Box 
        component="div"
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', // Content aur Footer ko vertically stack karega
          flexGrow: 1, 
          minHeight: '100vh' // Poori screen height lega
        }}
      >
        {/* 4a. Main Content Area */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }} // 'flexGrow: 1' content ko expand karega aur footer ko niche push karega
          className="mt-16 bg-gray-50" // 'mt-16' (64px) AppBar ke liye offset
        >
          {renderPage()} {/* Yahaan active page render hoga */}
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
      
    </Box>
  );
}

