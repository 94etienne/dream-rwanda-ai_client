import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = ({ modules, anchorEl, setAnchorEl, toggleDrawer, handleOpenLogin, handleOpenRegister }) => {
  const handleModulesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleModulesClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dream Rwanda AI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleModulesClick}>
            Modules
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleModulesClose}>
            {modules.map((module, index) => (
              <MenuItem key={index} onClick={handleModulesClose}>
                {module.title}
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" onClick={handleOpenLogin}>
            Login
          </Button>
          <Button color="inherit" onClick={handleOpenRegister}>
            Register
          </Button>
        </Box>
        <IconButton color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
