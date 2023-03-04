import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";

type props = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
};

const MediaCard: React.FC<props> = ({ imageSrc, title, description }) => {
  return (
    <Box sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative" }}>
        <Image src={imageSrc} alt="Test image" fill></Image>
      </Box>

      <Box>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="white"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default MediaCard;
