// Footer.js
import React from 'react';
import { Container, Grid, Typography, Box, IconButton } from '@mui/material';
import { LinkedIn, WhatsApp, GitHub, Email } from '@mui/icons-material';

const Footer = () => (
  <footer style={{ background: '#1976d2', color: '#fff', padding: '2rem 0' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Dream Rwanda AI
          </Typography>
          <Typography variant="body2">
            Dream Rwanda AI is an e-learning platform dedicated to empowering learners with AI and software development skills.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2" component="a" href="/courses" style={{ color: '#fff', textDecoration: 'none' }}>
            Courses
          </Typography>
          <br />
          <Typography variant="body2" component="a" href="/about-us" style={{ color: '#fff', textDecoration: 'none' }}>
            About Us
          </Typography>
          <br />
          <Typography variant="body2" component="a" href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
            Contact
          </Typography>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Connect With Us
          </Typography>
          <Box>
            {/* LinkedIn */}
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ntambara-etienne-7572901aa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#fff' }}
            >
              <LinkedIn />
            </IconButton>

            {/* WhatsApp */}
            <IconButton
              component="a"
              href="https://wa.me/250783716761"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ color: '#fff' }}
            >
              <WhatsApp />
            </IconButton>

            {/* GitHub */}
            <IconButton
              component="a"
              href="https://github.com/94etienne"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: '#fff' }}
            >
              <GitHub />
            </IconButton>

            {/* Email */}
            <IconButton
              component="a"
              href="mailto:ntambaraienne94@gmail.com"
              aria-label="Email"
              style={{ color: '#fff' }}
            >
              <Email />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          © 2024 Dream Rwanda AI. All Rights Reserved.
        </Typography>
        <Typography variant="body2">
          Empowering the future through AI and Software Development.
        </Typography>
      </Box>
    </Container>
  </footer>
);

export default Footer;
