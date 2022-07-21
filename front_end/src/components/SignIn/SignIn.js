import React, { useState } from "react";
import "../SignUp/SignUp.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
// import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/user";

const initialState = { email: "", password: "" };

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const clientID =
  //   "305526818944-2ouklusapkfonc30i22t0ugas7u81dgi.apps.googleusercontent.com";

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // const googleSuccess = async (res) => {
  //   console.log("success");
  // };

  // const googleFailure = (error) => {
  //   console.log(error);
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData, navigate));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="xs" className="auth-page">
        <Paper className="auth-form">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Sign Up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                value={formData.email}
                onChange={handleChange}
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* <GoogleLogin
            clientId={clientID}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          /> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              Don't have an account?
              <Link to="/sign-up">Sign up</Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </form>
  );
}
