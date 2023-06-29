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
  TextField
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
    <Paper sx={{ overflow: "auto", width: "100%" }} elevation={5}>
      <Stack>
        <Divider>
          <Typography variant="h6" color="initial">
            {titleMenu}
          </Typography>
        </Divider>
      </Stack>

      <Paper
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 3,
          minWidth: 375,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            mt: 1,
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
        <TableContainer sx={{ height: "450px" }}>
          <Table
            aria-label="customized table"
            stickyHeader
            sx={{ overflow: "auto", p: "0 10px 20px 10px" }}
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
                  <StyledTableCell component="th" scope="row">
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

/*


<Card
            key={x.id}
            sx={{
           
              width:'120px',
              height:'170px',
              transition: ".6s",
              ":hover": {
                transform: "scale(1.1)",
                bgcolor: "#F1F6FE",
              },
              border: "1px solid #2B3C61",
            }}
          >
            <Link
              to={x.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardActionArea>
                <StarIcon />


                <CardContent>
                  <Divider sx={{ mt: 1 }} />
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    textAlign={"center"}
                  >
                    {x.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
    <Stack >
        <Divider>
          <Typography variant="h6" color="initial">
            {titleMenu}
          </Typography>
        </Divider>
      </Stack>

      <Stack display={"flex"} alignItems={"flex-end"} >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
      </Stack>
      
      */
