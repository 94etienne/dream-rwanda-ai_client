import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, Drawer, Box, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';

const modules = [
  { title: 'Machine Learning', description: 'Explore the amazing world of Machine Learning and its applications in real-world scenarios, from predictive analytics to self-driving cars.', cost: 50000 },
  { title: 'Computer Vision', description: 'Discover how machines interpret and understand the visual world, and delve into techniques like object detection, image classification, and more.', cost: 45000 },
  { title: 'Deep Learning', description: 'Dive into the fascinating field of Deep Learning, where neural networks power advancements in AI, including language processing and computer vision.', cost: 60000 },
  { title: 'Software Development', description: 'Learn the art of building robust and scalable software solutions, mastering programming languages, frameworks, and design principles.', cost: 40000 },
];

const HomePage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown menu
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar
        modules={modules}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        toggleDrawer={toggleDrawer} // Pass toggleDrawer to Navbar
        handleOpenLogin={handleOpenLogin}
        handleOpenRegister={handleOpenRegister}
      />
      
      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Modules" />
            </ListItem>
            <ListItem button onClick={handleOpenLogin}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={handleOpenRegister}>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <div style={{ flex: '1' }}>
        <header
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#1976d2',
            color: '#fff',
          }}
        >
          <Typography variant="h3">Welcome to Dream Rwanda AI</Typography>
          <Typography variant="h6">
            Empowering the future through AI and Software Development
          </Typography>
        </header>

        <Container style={{ padding: '2rem' }}>
          <Grid container spacing={3}>
            {modules.map((module, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" sx={{ background: '#B0BEC5', color: '#000' }} style={{ textAlign: 'center' }}>
                      {module.title}
                    </Typography>
                    <Typography>
                      {expandedCard === index
                        ? module.description
                        : `${module.description.substring(0, 200)}...`}
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>
                      Cost: {module.cost} RWF
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary" onClick={() => toggleReadMore(index)}>
                      {expandedCard === index ? 'Show Less' : 'Read More'}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* Login Modal */}
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>

      {/* Register Modal */}
      <Dialog open={openRegister} onClose={handleCloseRegister}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRegister} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseRegister} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
