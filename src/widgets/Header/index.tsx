import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  IconButton,
  Link,
  Stack,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import "./style.css";

export default function Navigation() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <AppBar position="sticky" className="header">
          <Toolbar className="header-toolbar">
            <Link href="/" underline="none">
              <Stack direction={"row"} className="logo">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <LocalPizzaIcon />
                </IconButton>
                <Typography
                  className="logo-label"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  PizzaZone
                </Typography>
              </Stack>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </StyledEngineProvider>
    </>
  );
}
