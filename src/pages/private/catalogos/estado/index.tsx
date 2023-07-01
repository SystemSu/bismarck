import { useGetAllStateQuery } from "@/shared/ApiRTKQuery";
import { StyledTableCell } from "@/shared/components/TableHeader";
import { CircularIndeterminate } from "@/shared/components/isLoading";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header } from "./columHeaderEstado";
export const Estado: React.FC<{}> = () => {
  const { data, isLoading } = useGetAllStateQuery();
  const theme = useTheme();
  const celular = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#EAF1FC",
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
    
    >
      <Paper sx={{ paddingInline: 2, flexGrow: 0 }} elevation={5}>
        <Divider>
          <Typography variant="h6" color="initial">
            Registro de catalogo de estado
          </Typography>
        </Divider>
      </Paper>

      <Paper
        sx={{
          flexGrow: 0,
          display: "flex",
          flexFlow: "column",
          padding: 2,
          rowGap: 1,
        }}
        elevation={5}
      >
        <Stack display={"flex"} flexDirection={"row"} gap={2} flexWrap={"wrap"} flexGrow={1}>
          <TextField
            id="a"
            label="Nombre del estado"
            variant="standard"
            sx={{ flexGrow: 1 }}
          />

          <TextField
            id="s"
            label="Descripcion del estado"
            variant="standard"
            sx={{ flexGrow: 1 }}
          />
        </Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          gap={5}
          justifyContent={"flex-end"}
          alignItems={'flex-end'}
       
          flexGrow={1}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveAsIcon />}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Cancelar
          </Button>
        </Stack>
      </Paper>

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
            justifyContent: "flex-end",
            pb: 1,
          }}
        >
          <TextField
            id="input-Search"
            label="Buscador"
            variant="standard"
            value={""}
            size="small"
            onChange={(e) => console.log()}
          />
          <SearchIcon fontSize="large" />
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
              {!isLoading ? (
                data?.map((row) => (
                  <TableRow key={row.id}>
                    <StyledTableCell align="center">
                      {row.nombreestado}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {row.descripcion}
                    </StyledTableCell>
                  </TableRow>
                ))
              ) : (
                <CircularIndeterminate />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
