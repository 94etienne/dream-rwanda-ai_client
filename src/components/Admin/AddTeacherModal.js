import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';

const AddTeacher = ({ onClose }) => {
  const [teacherData, setTeacherData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTeacher = () => {
    // Handle submission of teacher data here (e.g., send to API)
    console.log('Teacher Data:', teacherData);

    // Reset form and notify the user
    setTeacherData({ name: '', email: '', subject: '' });
    alert('Teacher added successfully!');
    onClose(); // Close the modal after adding the teacher
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add Teacher
      </Typography>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={teacherData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={teacherData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          {/* Subject Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Subject"
              name="subject"
              value={teacherData.subject}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* Submit Button */}
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddTeacher}
            >
              Submit
            </Button>
          </Grid>
          {/* Cancel Button */}
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddTeacher;
