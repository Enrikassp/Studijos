import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setRepeatedShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowRepeatedPassword = () =>
    setRepeatedShowPassword((show) => !show);

  const handleMouseDownRepeatedPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpRepeatedPassword = (event) => {
    event.preventDefault();
  };

  async function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registrationData = {};

    formData.forEach((val, key) => (registrationData[key] = val));
    console.log(registrationData);
  }

  return (
    <main className="bg-slate-200 flex flex-col justify-center place-items-center h-[100vh] select-none">
      <div className="bg-white rounded p-8 shadow-md">
        <RegisterHeader />

        <form
          className="flex flex-col gap-2 w-[400px]"
          onSubmit={handleRegister}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              fullWidth
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showRepeatedPassword ? "text" : "password"}
              fullWidth
              name="repeatedPassword"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showRepeatedPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowRepeatedPassword}
                    onMouseDown={handleMouseDownRepeatedPassword}
                    onMouseUp={handleMouseUpRepeatedPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="contained" type="submit" fullWidth>
            Register In
          </Button>
        </form>

        <RegisterFooter />
      </div>
    </main>
  );
}

function RegisterHeader() {
  return (
    <div className="mb-5">
      <h2 className="font-bold text-2xl">Registration</h2>
      <p className="text-[#979797]">Register your new account...</p>
    </div>
  );
}

function RegisterFooter() {
  return (
    <div className="text-center mt-4">
      <p>
        Already have an account?
        <a className="font-semibold cursor-pointer ml-1" href="/login">
          Click here to login...
        </a>
      </p>
    </div>
  );
}
