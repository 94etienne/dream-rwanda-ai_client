import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';
import AddTeacher from './AddTeacherModal';
import ViewStudentPerformance from './ViewStudentPerformance';

const AdminDashboard = () => {
  const [showAddTeacher, setShowAddTeacherModal] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [studentData] = useState([
    { studentName: 'Simeon Rukundo', module: 'Machine Learning', score: 85, status: 'Passed' },
    { studentName: 'Evariste Vuguziga', module: 'Deep Learning', score: 78, status: 'Passed' },
    { studentName: 'Alice UMUTESI', module: 'Computer Vision', score: 65, status: 'Passed' },
    { studentName: 'Bob Wilson', module: 'Software Development', score: 92, status: 'Passed' },
  ]);

  const actions = [
    { title: 'Add Teacher', action: () => setShowAddTeacherModal(true) },
    { title: 'Add Student', action: () => alert('Add Student') },
    { title: 'Add Module', action: () => alert('Add Module') },
    { title: 'View Teacher Activities', action: () => alert('View Activities') },
    { title: 'View Student Performance', action: () => setShowPerformance(true) },
  ];

  const handleClosePerformanceModal = () => {
    setShowPerformance(false);
  };

  const handleCloseAddTeacherModal = () => {
    setShowAddTeacherModal(false);
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

      {/* Modal for Adding Teacher */}
      <Modal open={showAddTeacher} onClose={handleCloseAddTeacherModal}>
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
          <AddTeacher onClose={handleCloseAddTeacherModal} />
        </Box>
      </Modal>

      {/* Modal for Viewing Student Performance */}
      <Modal open={showPerformance} onClose={handleClosePerformanceModal}>
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
          <ViewStudentPerformance studentData={studentData} />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClosePerformanceModal}
            sx={{ mt: 2, display: 'block', margin: '0 auto' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
};

export default AdminDashboard;
