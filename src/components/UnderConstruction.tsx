import { Typography, Box } from "@mui/material";

export default function UnderConstruction() {
  return (
    <>
      <Typography variant="h3">Work in progress...</Typography>
      <Box
        component="img"
        src="/under_construction.png"
        alt="Under construction"
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: {
            xs: "100%",
            md: 500,
          },
          mx: "auto",
          display: "block",
        }}
      />
    </>
  );
}
