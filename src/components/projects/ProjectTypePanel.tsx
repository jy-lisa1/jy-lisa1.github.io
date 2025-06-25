import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export type ProjectTypePanelProps = {
  imagePath: string;
  title: string;
  description: string;
  projectType: string;
};

export default function ProjectTypePanel(props: ProjectTypePanelProps) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { md: "70vh", xs: "50vh" },
        borderRadius: 2,
        overflow: "hidden",
        backgroundImage: props.imagePath,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          p: 4,
          textAlign: "center",
        }}
      >
        <Box alignItems={"flex-start"} pt="120px">
          <Typography variant="h2" textTransform={"uppercase"}>
            {props.title}
          </Typography>
          <Typography variant="h5">{props.description}</Typography>
        </Box>

        <Box alignItems={"flex-end"} pb="120px">
          <Link to={props.projectType}>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              View all
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
