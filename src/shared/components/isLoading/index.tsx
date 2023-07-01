import { CircularProgress, TableCell, TableRow } from "@mui/material";

export const CircularIndeterminate: React.FC<{}> = () => {
  return (
    <TableRow>
      <TableCell component="th" scope="row" padding="none" align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
};
