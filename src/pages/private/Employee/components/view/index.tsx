import { ListaCatalogo } from "@/pages/private/catalogos/ListCatalogo";
import { Header } from "@/pages/private/catalogos/estado/columHeaderEstado";
import { StyledTableCell } from "@/shared/components/TableHeader";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography, Button,
} from "@mui/material";
import React from "react";
export const ViewEmployee: React.FC<{}> = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={1}
    >
      <Paper sx={{ flexGrow: 0 }}>
        <Divider>
          <Typography variant="h6" color="initial">
            Consulta de empleado
          </Typography>
        </Divider>

        <Paper
          sx={{
            flexGrow: 2,

            width: "100%",
          }}
          elevation={5}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              pb: 1,
            
            }}
          >
            <Box flexGrow={1} paddingX={1}>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Box>
            <Box
            flexGrow={1} paddingX={1}
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <SearchIcon fontSize="large" color="primary" />
              <TextField
                id="input-Search"
                label="Buscador"
                variant="standard"
                value={""}
                size="small"
                onChange={(e) => console.log()}
              />
            </Box>
          </Box>
          <TableContainer sx={{ overflow: "auto" }}>
            <Table
              aria-label="customized table"
              stickyHeader
              sx={{ p: "0 10px 20px 10px", overflow: "auto" }}
            >
              <TableHead>
                <TableRow>
                  {Header.map((x) => (
                    <StyledTableCell align="center" key={x.id}>
                      {x.title}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ overflow: "auto" }}>
                {ListaCatalogo.map((row) => (
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
    </Box>
  );
};
