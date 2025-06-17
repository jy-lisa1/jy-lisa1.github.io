import { Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Typography>This is my mobile-first personal site built with MUI and Vite.</Typography>
    </Container>
  );
}
