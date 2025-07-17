import { Container, Typography } from "@mui/material";
import UnderConstruction from "../components/UnderConstruction";

export default function Other() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2">Other Creations</Typography>
      <UnderConstruction />
    </Container>
  );
}
