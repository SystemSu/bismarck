import { Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { ModelButtomTableWithLink } from "./models";
export const ButtonTableSelectWithLink: React.FC<ModelButtomTableWithLink> = ({
  title,
  link,
}) => {
  return (
    <Link to={link}>
      <Tooltip title={title}>
        <IconButton>
          <AdsClickIcon fontSize="medium" color="primary" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};
