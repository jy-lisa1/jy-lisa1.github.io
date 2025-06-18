import { Box, Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Container sx={{ mt: 4, px: 4 }}>
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Typography>Work in progress...</Typography>
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
    </Container>
  );
}
