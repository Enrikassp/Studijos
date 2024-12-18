import { Button, IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { registrationSchema } from "../utils/validations/AuthSchema";

export default function Register() {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });
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
    if (registrationData.password !== registrationData.repeatedPassword) {
      setErrors((current) => ({
        ...current,
        password: "Passwords does not match!",
        repeatedPassword: "Passwords does not match!",
      }));
      return;
    }

    resetErrors();
    const validationResult = registrationSchema.safeParse(registrationData);

    if (!validationResult.success) {
      resetErrors();

      validationResult.error.issues.forEach((issue) => {
        setErrors((current) => ({
          ...current,
          [issue.path[0]]: issue.message,
        }));
      });
      return;
    }

    resetErrors();
    const promise = await fetch("/server/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });
    if (promise.ok) {
      window.location.href = "/";
    } else {
      const response = await promise.json();

      if (response.error && Array.isArray(response.error)) {
        response.error.forEach((issue) => {
          setErrors((current) => ({
            ...current,
            [issue.path[0]]: issue.message,
          }));
        });
      } else {
        alert(response.message);
      }
    }
  }

  function resetErrors() {
    setErrors({
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
    });
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
            error={!!errors.username}
            helperText={errors.username}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            fullWidth
          />
          <TextField
            error={!!errors.email}
            helperText={errors.email}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
            id="password"
            type={showPassword ? "text" : "password"}
            fullWidth
            name="password"
            label="Password"
            InputProps={{
              endAdornment: (
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
              ),
            }}
          />

          <TextField
            variant="outlined"
            error={!!errors.repeatedPassword}
            helperText={errors.repeatedPassword}
            id="repeatedPassword"
            type={showRepeatedPassword ? "text" : "password"}
            fullWidth
            name="repeatedPassword"
            label="Confirm Password"
            InputProps={{
              endAdornment: (
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
                    {showRepeatedPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

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
