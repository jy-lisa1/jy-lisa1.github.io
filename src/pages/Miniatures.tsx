import { Container, Typography } from "@mui/material";
import UnderConstruction from "../components/UnderConstruction";

export default function Miniatures() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2">Miniatures</Typography>
      <UnderConstruction />
    </Container>
  );
}
