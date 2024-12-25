import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from '@mui/material';
import jsPDF from 'jspdf';

const ViewStudentPerformance = ({ studentData }) => {
    const generatePDF = (studentName, moduleName, teacherName = 'Mr. Joseph UWINEZA', adminName = 'Mr. Etienne NTAMBARA') => {
        const doc = new jsPDF('landscape', 'mm', 'a4');
      
        // Page Dimensions
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
      
        // Add Borders
        doc.setLineWidth(1);
        doc.setDrawColor(0, 0, 0);
        doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
      
        // Title
        doc.setFont('times', 'bold');
        doc.setFontSize(26);
        doc.text('Certificate of Completion', pageWidth / 2, 40, { align: 'center' });
      
        // Subheading
        doc.setFont('times', 'normal');
        doc.setFontSize(18);
        doc.text('This is to certify that', pageWidth / 2, 60, { align: 'center' });
      
        // Student Name
        doc.setFont('times', 'bold');
        doc.setFontSize(22);
        doc.text(studentName, pageWidth / 2, 80, { align: 'center' });
      
        // Achievement Description
        doc.setFont('times', 'normal');
        doc.setFontSize(18);
        doc.text('has successfully completed the module:', pageWidth / 2, 100, { align: 'center' });
      
        // Module Name
        doc.setFont('times', 'bold');
        doc.setFontSize(20);
        doc.text(moduleName, pageWidth / 2, 120, { align: 'center' });
      
        // Completion Date
        doc.setFont('times', 'normal');
        doc.setFontSize(16);
        doc.text(`Date of Completion: ${new Date().toLocaleDateString()}`, pageWidth / 2, 140, { align: 'center' });
      
        // Signatures
        doc.setFont('times', 'normal');
        doc.text(`Trainer: ${teacherName}`, pageWidth / 4, 170, { align: 'center' });
        doc.text(`CEO: ${adminName}`, (pageWidth / 4) * 3, 170, { align: 'center' });
      
        // Save the PDF
        doc.save(`${studentName}_Certificate.pdf`);
      };
      

  return (
    <Box
      sx={{
        maxWidth: '100%',
        p: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Student Performance
      </Typography>
      <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Module</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.studentName}</TableCell>
                <TableCell>{row.module}</TableCell>
                <TableCell>{row.score}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      generatePDF(row.studentName, row.module)
                    }
                  >
                    View Certificate
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewStudentPerformance;
