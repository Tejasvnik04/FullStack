import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import loginAvatar from "../assets/Avatar.gif";
import Video from "./video.mp4";
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/UserSlice';

const Signin = () => {
  const [username, setUsername] = useState("lala");
  const [password, setPassword] = useState("lsls");
  const dispatch = useDispatch();
  const handleUsernameChange=(event)=>
  {
    setUsername(event.target.value)
  }

  const handleLogin = () => {
    // Dispatch the action to set the username
    console.log(username);
    dispatch(setUserName(username));
};


  return (
    <div style={{ backgroundColor: '#031924', height: '100vh' }}>
      <Grid container justifyContent="left" marginLeft={15}>
        <Grid item>
          <Paper elevation={10} style={{ padding: 20, width: 360, margin: "70px auto", background: 'white' }}>
            <Grid align='center'>
              <img src={loginAvatar} alt="avatar" style={{ height: 200, width: 200 }} />
              <Typography variant="h5" style={{ color: '#00008B' }}>Sign In</Typography>
            </Grid>
            <TextField label='Username' placeholder='Enter username' variant="outlined" value={username} onChange={handleUsernameChange} fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth margin="normal" required InputProps={{ style: { borderRadius: 20, backgroundColor: '#F5F5F5' } }} />
            <Checkbox color="primary" style={{ color: '#00008B' }} />Keep me logged in
            <Typography align="center" color="textSecondary">
              <Link href="/forgotpassword" style={{ color: '#00008B' }}>Forgot password?</Link>
            </Typography>
            <Button href='/home' type='submit' color='primary' variant="contained" style={{ margin: '20px 0', borderRadius: 20, backgroundColor: '#00008B' }} fullWidth onClick={handleLogin}>Sign in</Button>
            <Typography align="center" color="textSecondary">
              Don't have an account? <Link href="/signup" style={{ color: '#00008B' }}>Sign Up</Link>
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
  );
}

export default Signin;
