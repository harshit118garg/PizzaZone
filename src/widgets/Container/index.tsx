import { Box } from "@mui/material";
import "./style.css";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: ContainerProps) {
  return <Box className="container">{children}</Box>;
}
