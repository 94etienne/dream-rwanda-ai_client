import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

const TeacherDashboard = () => {
  const [showTestModal, setShowTestModal] = useState(false);
  const [showMarkTestModal, setShowMarkTestModal] = useState(false);

  const actions = [
    { title: 'Access Modules', action: () => alert('Accessing Modules') },
    { title: 'Upload Module', action: () => alert('Uploading Module') },
    { title: 'Give Test', action: () => setShowTestModal(true) },
    { title: 'Mark Test', action: () => setShowMarkTestModal(true) },
  ];

  const handleCloseTestModal = () => {
    setShowTestModal(false);
  };

  const handleCloseMarkTestModal = () => {
    setShowMarkTestModal(false);
  };

  return (
    <Grid container spacing={3} style={{ marginTop: '2rem', padding: '2rem' }}>
      {actions.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                {item.title}
              </Typography>
              <Button variant="contained" color="primary" fullWidth onClick={item.action}>
                Open
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* Modal for Giving Test */}
      <Modal open={showTestModal} onClose={handleCloseTestModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Give Test
          </Typography>
          {/* Add form or functionality for giving test here */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseTestModal}
            sx={{ mt: 2, display: 'block', margin: '0 auto' }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Modal for Marking Test */}
      <Modal open={showMarkTestModal} onClose={handleCloseMarkTestModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Mark Test
          </Typography>
          {/* Add form or functionality for marking test here */}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseMarkTestModal}
            sx={{ mt: 2, display: 'block', margin: '0 auto' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default TeacherDashboard;
