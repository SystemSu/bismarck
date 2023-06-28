import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Box } from "@mui/material";

export const LayoutPage: React.FC<{}> = () => {
  return (
    <Box
      minHeight={"668px"}
      minWidth={"375px"}
      height={"100vh"}
      width={"100vw"}
    >
      <NavBar />
      <Box paddingTop={9} height={"89%"}>
        <Outlet />
      </Box>
    </Box>
  );
};
