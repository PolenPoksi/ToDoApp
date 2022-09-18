import * as React from 'react';

import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material';


export default function ProfileCard() {
  return (
    <Card sx={{  backgroundColor: 'transparent', border:' none' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ height: '30px', width: '30px' }} aria-label="recipe" >
            E
          </Avatar>
        }
        title={<Typography sx={{ color: 'white', fontSize: 12 }}>Eni Lapa</Typography>}
        subheader={<Typography sx={{ color: 'white', fontSize: 8 }}>enilapa@gmail.com</Typography>}
      />

    </Card>
  );
}
