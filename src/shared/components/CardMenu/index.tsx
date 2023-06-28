import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { ModelCardMenu } from "./models";
import { Link } from "react-router-dom";

export const CardMenu: React.FC<ModelCardMenu> = ({ titleMenu, list }) => {
  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}

    >
      <Divider>
        <Typography variant="h6" color="initial">
          {titleMenu}
        </Typography>
      </Divider>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: 5,
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          overflow: "auto",
          p:1
        }}
      >
        {list.map((x) => (
          <Card key={x.id} 
          
          sx={{
            maxWidth: 250,
            maxHeight: 250,
            minHeight: 200,
            minWidth: 200,
            height: 220,
            width: 200,
            mb: 10,
            transition: ".6s",
            ":hover": {
              transform: "scale(1.1)",
              bgcolor: "#F1F6FE",
            },
            border: "2px solid #2B3C61",
           
          }}
          
          >
            <Link to={x.path} style={{textDecoration:'none',color:'black'}}>

            <CardActionArea>
              <CardMedia
                component={"img"}
                sx={{ height: "140px" }}
                image={x.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {x.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
        
          </Card>
        ))}
      </Box>
    </Box>
  );
};
