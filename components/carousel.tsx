import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

// const steps = [
//   {
//     label: 'Select campaign settings',
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: 'Create an ad group',
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.',
//   },
//   {
//     label: 'Create an ad',
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];

interface Props {
  steps: any[];
  modalImgIdx: number;
  setModalImgIdx: React.Dispatch<React.SetStateAction<number>>
}
const Carousel: React.FC<Props> = ({ steps, modalImgIdx, setModalImgIdx }) => {
  const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setModalImgIdx((prevActiveStep) => (prevActiveStep + 1) % steps.length);
  };

  const handleBack = () => {
    if (modalImgIdx == 0) {
      setModalImgIdx(steps.length - 1);
    } else {
      setModalImgIdx((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {steps.length > 1 && (
          <Typography
            color="#7c818f"
            fontSize={32}
            sx={{ cursor: "pointer" }}
            onClick={handleBack}
          >
            &lt;
          </Typography>
        )}
      </Box>
      {steps[modalImgIdx]}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {steps.length > 1 && (
          <Typography
            color="#7c818f"
            fontSize={32}
            sx={{ cursor: "pointer" }}
            onClick={handleNext}
          >
            &gt;
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Carousel;