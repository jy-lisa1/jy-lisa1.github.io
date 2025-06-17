import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography>This is my mobile-first personal site built with MUI and Vite.</Typography>
    </Container>
  );
}
