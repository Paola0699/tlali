import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Section = ({ id, title, content }) => {
  return (
    <Paper id={id} elevation={0} style={{ padding: '20px'}}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography>{content}</Typography>
    </Paper>
  );
};
export default Section;