import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login: React.FC<{}> = () => {
  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Paper
        elevation={celular ? 0 : 5}
        sx={{
          bgcolor: celular ? "white" : "#EEF1F7",
          width: {
            xl: "25%",
            lg: "25%",
            md: "30%",
            sm: "50%",
            xs: "100%",
          },
          height: "75%",
        }}
      >
        <Grid container direction={"column"} alignItems="center" spacing={3}>
          <Grid item xs={12}>
            {" "}
            <Typography variant="h6" color="initial" mt={2}>
              Inicio de sesìon
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Avatar
              src="/broken-image.jpg"
              sx={{ width: "70px", height: "70px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="" label="Usuario" size="small" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Link to={"#"}>
              <Typography
                variant="body2"
                color="initial"
                sx={{
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                Recuperacion de cuenta
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Iniciar sesion
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
