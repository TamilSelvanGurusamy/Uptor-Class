import Box from '@mui/material/Box'
import React from 'react'
import loginbackground from '../assets/login_background.png'
import bghero from '../assets/loginheroimg.png'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import googlesymbol from '../assets/google-icon.png'
import githubicon from '../assets/github_icon.png'
import facebookicon from '../assets/Facebook_icon.svg'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons/component'

const Login = () => {
  return (
    <Box sx={{ backgroundColor: "#FFD1B0", width: "100%", height: "100vh" }}>
      <img src={loginbackground} alt="Login_Background" style={{ width: "45%", position: "absolute", bottom: "0px", left: "-5%" }} />

      <Box id="login_container" style={{ width: "70%", backgroundColor: "#FEDCC566", height: "61%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", gap: "50px", padding: "3%" }}>
        <Box id="login_form" style={{ backgroundColor: "#FFFFFF4D", display: "flex", flexDirection: "column", minHeight: "50%", justifyContent: "space-between", minWidth: "50%" }}>
          <Typography >your Login</Typography>
          <Typography >Login</Typography>
          <TextField id='login_email' label="Email" variant="outlined" />
          <TextField id='login_password' label="Password" variant="outlined" />
          <Typography >Forgot Password?</Typography>
          <Button variant="contained">Sign In</Button>
          <Typography >or Continue with</Typography>


          <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={facebookicon} alt="Facebook-Icon" style={{ Width: "30px", height: "30px" , cursor: "pointer"}} />
            <img src={googlesymbol} alt="Google-Icon" style={{ Width: "30px", height: "30px" , cursor: "pointer"}} />
            <img src={githubicon} alt="Google-Icon" style={{ Width: "30px", height: "30px" , cursor: "pointer"}} />
            {/* <SocialIcon network="github" url="www.github.com" /> */}
          </Box>

          <Typography >Don't have an account yet? Register for free</Typography>
        </Box>

        <img id="login_hero" src={bghero} style={{ width: "auto", height: "100%", objectFit: "contain", flex: 1 }}></img>
      </Box>
    </Box>
  )
}

export default Login
