import { styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1A509E",
      color: theme.palette.common.white,
      fontWeight: "bold",
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      fontWeight: "bold",
    },
    textAlign: "center",
  }));
  