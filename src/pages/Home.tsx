import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Home() {
  return (
    <Container sx={{ mt: 16 }}>
      <Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
          <Typography variant="h1" gutterBottom>
            Hello!
          </Typography>
          <Box
            component="img"
            src="/cat_sitting.png"
            sx={{
              width: 55,
              height: 55,
              position: "relative",
              top: "-6px",
            }}
          />
        </Stack>
        <Typography variant="h3" sx={{ py: 4 }}>
          I'm Lisa - Thanks for visiting my site :)
        </Typography>
        <Typography variant="h3">Come take a look at what I'm up to!</Typography>
        <Box sx={{ pt: 8 }}>
          <Button
            endIcon={<KeyboardDoubleArrowRightIcon />}
            color="inherit"
            variant="outlined"
            component={RouterLink}
            to={"/projects"}
          >
            I wanna see!
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
