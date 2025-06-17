import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h1" gutterBottom>
        Hello!
      </Typography>
      <Typography variant="h3" sx={{ py: 4 }}>
        I'm Lisa - Thanks for visiting my site :)
      </Typography>
      <Typography variant="h3">Come take a look at all my random side projects!</Typography>
    </Container>
  );
}
