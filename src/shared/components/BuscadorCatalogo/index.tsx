import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { StyledTableCell } from "../TableHeader";
import { ColumnListaCatalogo } from "./column";
import { ModelCardMenu, ModelCardMenuInfo } from "./models";
export const BuscadorCatalogo: React.FC<ModelCardMenu> = ({
  titleMenu,
  list,
}) => {
  const [valor, setValor] = useState<string>("");
  const [lista, setLista] = useState<ModelCardMenuInfo[]>(list);

  const filtrar = (filtro: string) => {
    let expresion = new RegExp(`^${filtro}`, "i");
    let result = list.filter((x) => expresion.test(x.title));
    setLista(filtro == "" ? list : result);
    setValor(filtro);
  };

  return (
    <Paper sx={{ width: "100%",height:'100%' }} elevation={5}>
      <Stack sx={{height:'5%'}}>
        <Divider>
          <Typography variant="h6" color="initial">
            {titleMenu}
          </Typography>
        </Divider>
      </Stack>

      <Paper
        sx={{
          
          display: "flex",
          flexDirection: "column",
          height:'95%',
     
        
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            pb:1
          }}
        >
          <TextField
            id="input-Search"
            label="Buscador"
            variant="standard"
            value={valor}
            size="medium"
            onChange={(e) => filtrar(e.target.value)}
          />
          <SearchIcon fontSize="large" />
        </Box>
        <TableContainer sx={{ height:'100%'}}>
          <Table
            aria-label="customized table"
            stickyHeader
            sx={{  p: "0 10px 20px 10px",overflow: "auto"}}
          >
            <TableHead>
              <TableRow>
                {ColumnListaCatalogo.map((x) => (
                  <StyledTableCell align="center" key={x.id}>
                    {x.title}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ overflow: "auto" }}>
              {lista.map((row) => (
                <TableRow key={row.id}>
                  <StyledTableCell component="th" scope="row" padding="none">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.Buttom}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Paper>
  );
};

