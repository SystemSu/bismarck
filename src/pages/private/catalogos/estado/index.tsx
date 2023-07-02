import {
  useGetAllStateQuery,
  useCreateEstadoMutation,
} from "@/shared/ApiRTKQuery";
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
  IconButton,
  Tooltip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header } from "./columHeaderEstado";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { ModelFormEstado } from "@/redux/models";

export const Estado: React.FC<{}> = () => {
  const { data, isLoading ,error,isError} = useGetAllStateQuery();
  const [CrearEstado] = useCreateEstadoMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
    setValue,
    register,
  } = useForm<ModelFormEstado>();

  const onSubmit = (data: ModelFormEstado) => {
    CrearEstado(data);

    if (error) {
     alert('hola')
      if ('status' in error) {
        
     
  
          console.log(error.status)
      }
      else {
        // you can access all properties of `SerializedError` here
        console.log(error.message)
      
    }
  }
    reset();
  };
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
        <Box sx={{ display: "flex", columnGap: 1 }}>
          <Tooltip title={"Regresar "}>
            <Link to={"../catalogo"}>
              <IconButton
                aria-label=""
                sx={{
                  flexGrow: 0,
                  bgcolor: "#27AE60",
                  borderRadius: "50%",
                  ":hover": {
                    bgcolor: "#27AE60",
                  },
                }}
                size="small"
              >
                <KeyboardBackspaceIcon fontSize="small" color="info" />
              </IconButton>
            </Link>
          </Tooltip>

          <Divider sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="initial">
              Registro de catalogo de estado
            </Typography>
          </Divider>
        </Box>
        <Stack
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          flexWrap={"wrap"}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack
            display={"flex"}
            flexDirection={"row"}
            flexGrow={1}
            flexWrap={"wrap"}
            columnGap={5}
            rowGap={2}
          >
            <Controller
              name="Estado"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Estado"
                  variant="standard"
                  error={errors.Estado ? true : false}
                  onChange={onChange}
                  value={value}
                  sx={{ flexGrow: 1 }}
                />
              )}
            />

            <Controller
              name="Descripcion"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Descripciòn"
                  variant="standard"
                  error={errors.Descripcion ? true : false}
                  onChange={onChange}
                  value={value}
                  sx={{ flexGrow: 3 }}
                />
              )}
            />
          </Stack>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap={5}
            justifyContent={"flex-end"}
            flexGrow={1}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveAsIcon />}
              type="submit"
            >
              Guardar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Cancelar
            </Button>
          </Stack>
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
          <SearchIcon fontSize="large" color="primary" />
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
