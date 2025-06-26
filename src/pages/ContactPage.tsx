import { useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <Box sx={{ width: '100vw', maxWidth: '100vw', minHeight: '80vh', boxSizing: 'border-box', overflowX: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', left: 0 }}>
      <Box sx={{ py: 4, backgroundColor: 'background.paper', width: '100%', maxWidth: 600, boxSizing: 'border-box', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 4, width: '100%' }}>
          <Typography variant="h1" sx={{ mb: 1.5, color: 'primary.main', fontWeight: 400 }}>
            Get in Touch
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: '1rem' }}>
            Ready to transform your space? We'd love to hear about your project and discuss how we can help bring your vision to life.
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} autoComplete="off" sx={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
          <Grid container spacing={2}>
            {/* Row 1: Name and Email side-by-side */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>
            {/* Row 2: Phone (full width) */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Phone number *"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>
            {/* Row 3: Message (full width) */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Message *"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                variant="outlined"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>
            {/* Row 4: Send button (full width) */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage; 