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
  Typography,
} from "@mui/material";
import { PIZZA_CATEGORIES } from "../../definations/constants";
import { PIZZACATEGORY, PizzaResponseType } from "../../definations/types";
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
    <Card className="pizzaCard">
      <CardMedia
        component="img"
        height="300"
        image={image.url}
        alt={image.title}
      />
      {/* Price overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          borderRadius: "4px",
          padding: "4px 8px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          ${price.toFixed(2)}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
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
        <Rating
          name="read-only"
          value={rating}
          precision={0.1}
          readOnly
          sx={{ mt: 1 }}
        />
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
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
