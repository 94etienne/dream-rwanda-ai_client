import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import jsPDF from 'jspdf';

const GenerateCertificate = ({ studentName, moduleName, teacherName, adminName }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Certificate of Completion`, 105, 20, { align: 'center' });
    doc.text(`This certifies that`, 105, 40, { align: 'center' });
    doc.text(`${studentName}`, 105, 60, { align: 'center' });
    doc.text(`has successfully completed the module`, 105, 80, { align: 'center' });
    doc.text(`${moduleName}`, 105, 100, { align: 'center' });
    doc.text(`Teacher: ${teacherName}`, 105, 120, { align: 'center' });
    doc.text(`Admin: ${adminName}`, 105, 140, { align: 'center' });
    doc.save(`${studentName}_Certificate.pdf`);
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Generate Certificate
            </Typography>
            <Typography variant="body1" align="center" style={{ marginBottom: '1rem' }}>
              Click the button below to generate the certificate for {studentName}.
            </Typography>
            <Button variant="contained" color="primary" fullWidth onClick={generatePDF}>
              Generate Certificate
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default GenerateCertificate;
