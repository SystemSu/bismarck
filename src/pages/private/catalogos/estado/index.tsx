import { Box, Divider, Paper, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
export const Estado: React.FC<{}> = () => {
  return (
    <Box padding={1}>
      <Divider>
        <Typography variant="h6" color="initial">
          Registro de Catalogo de estado
        </Typography>
      </Divider>

      <Box  >
            <Paper sx={{width:'100%',display:'flex',flexWrap:'wrap'}} >
             <TextField id="" label="Nombre del estado" variant="standard" fullWidth/>
             <TextField id="" label="Descripcion del estado" variant="standard" fullWidth />
              
            </Paper>
      
      </Box>
    </Box>
  );
};
