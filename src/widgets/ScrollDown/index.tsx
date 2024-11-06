import { IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function ScrollerDown() {
  return (
    <div className="scroll-down">
      <IconButton>
        <ArrowDownwardIcon />
      </IconButton>
    </div>
  );
}
