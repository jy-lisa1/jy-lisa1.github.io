import { Container, Typography } from "@mui/material";
import UnderConstruction from "../components/UnderConstruction";

export default function Projects() {
  return (
    <Container sx={{ mt: 4, px: 4 }}>
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <UnderConstruction />
    </Container>
  );
}
