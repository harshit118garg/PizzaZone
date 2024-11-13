import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { PIZZA_CATEGORIES } from "../../definations/constants";
import { PIZZACATEGORY, PizzaResponseType } from "../../definations/types";
import { formatPrice } from "../../utils/helper";
import PizzaCategoryChip from "../Chip";
import "./index.css";

export default function PizzaCard(pizza: PizzaResponseType) {
  const {
    name,
    image,
    description,
    price,
    category,
    availability,
    tags,
    rating,
  } = pizza;

  const pizzaCategory: PIZZACATEGORY = PIZZA_CATEGORIES.find(
    (obj) => obj.category === category
  ) as PIZZACATEGORY;

  return (
    <Card className={`pizzaCard ${!availability ? "NotAvailable" : ""}`}>
      <CardMedia
        component="img"
        height="300"
        image={image.url}
        alt={image.title}
      />
      {/* Price overlay */}
      <Box className="moveTop">
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {formatPrice(price)}
        </Typography>
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          readOnly
          sx={{ mt: 1 }}
        />
      </Box>
      <Box className="cardContent">
        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" marginBottom={2}>
            {description}
          </Typography>
          <Stack
            direction={"row"}
            spacing={6}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PizzaCategoryChip {...pizzaCategory} />
            {/* Availability with icon */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              {availability ? (
                <CheckCircleIcon color="success" fontSize="small" />
              ) : (
                <CancelIcon color="error" fontSize="small" />
              )}
              <Typography
                variant="subtitle2"
                sx={{ marginLeft: 0.5, color: availability ? "green" : "red" }}
              >
                {availability ? "Available" : "Out of Stock"}
              </Typography>
            </Box>
          </Stack>
          {/* Tags */}
          {tags.length > 0 && tags[0] && (
            <Box sx={{ marginTop: 1 }}>
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  sx={{ marginRight: 0.5 }}
                />
              ))}
            </Box>
          )}
        </CardContent>
        <CardActions sx={{ marginBottom: 2, width: "100%" }}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            disabled={!availability}
            endIcon={<AddShoppingCartIcon />}
            sx={{ width: "100%" }}
            aria-label="add to shopping cart"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
