import { Box, Container, Stack, Typography } from "@mui/material";
import UnderConstruction from "../components/UnderConstruction";

export default function Contact() {
  return (
    <Container sx={{ py: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
        <Typography variant="h2" sx={{ lineHeight: 1 }}>
          Contact
        </Typography>
        <Box
          component="img"
          src="/icons/cat_waving.png"
          sx={{
            width: 50,
            height: 50,
            position: "relative",
            top: "-4px",
          }}
        />
      </Stack>
      <UnderConstruction />
    </Container>
  );
}
