import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import loginAvatar from "../assets/Avatar.gif";
import Video from "./video.mp4";

const Signup = () => {
  return (
    <div>
       <div style={{ backgroundColor: '#031924', height: '100vh' }}>
      <Grid container justifyContent="left" marginLeft={15}>
        <Grid item>
          <Paper elevation={10} style={{ padding: 20, width: 400, margin: "30px auto", background: 'white' }}>
            <Grid align='center'>
              <img src={loginAvatar} alt="fefef" style={{ height: 180, width: 180 }} />
              <Typography variant="h5" style={{ color: '#00008B' }}>Sign Up</Typography>
            </Grid>
            <TextField label='First Name' placeholder='Enter First Name' variant="outlined" fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            <TextField label='Last Name' placeholder='Enter Last Name' type='password' variant="outlined" fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            <TextField label='Email Id' placeholder='Enter Email' variant="outlined" fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            
            <Typography align="center" color="textSecondary">
            </Typography>
            <Button type='submit' color='primary' variant="contained" style={{ margin: '20px 0', borderRadius: 20, backgroundColor: '#00008B' }} fullWidth>Sign up</Button>
            <Typography align="center" color="textSecondary">
              Already have an account? <Link href="/signin" style={{ color: '#00008B' }}>Sign In</Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={10} style={{ padding: 0, width: 700, height: 700, marginLeft: 100, marginTop: 50, background: '#C2E9FA' }}>
            <video autoPlay loop muted className="bg-vid" style={{ width: '100%', height: '100%' }}><source src={Video} type="video/mp4" /></video>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Signup
