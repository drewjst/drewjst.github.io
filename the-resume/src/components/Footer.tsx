import { Box } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        color: '#666',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <p>© {currentYear} All rights reserved.</p>
      <p style={{ mt: 1 }}>Built with React • Material UI</p>
    </Box>
  );
}
