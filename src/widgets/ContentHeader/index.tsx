import { Typography } from "@mui/material";
import Image from "../Image/index.js";
import "./style.css";

export default function ContentHeader() {
  return (
    <div className="content-header">
      <div className="image-container">
        <div className="image-section">
          <div className="content-container">
            <div className="content-section">
              <Typography className="headline" variant="h3" component="div">
                Welcome to PizzaZone
              </Typography>
              <Typography
                className="sub-content"
                variant="subtitle1"
                component="div"
              >
                Your One stop destination for all your pizza cravings
              </Typography>
            </div>
          </div>
          <div className="image-container">
            <Image
              src="public/assets/contentHeaderImages/bannerImage.jpg"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
