import { Box, Stack, Typography, Grid, Button, Container, Drawer } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavbarHeight } from "../components/NavbarHeightContext";

function Description() {
  return (
    <Stack spacing={2}>
      <Typography>
        I'm a software developer and recent graduate from McGill University, where I earned a Joint
        Major in Stats & CS. But this site isn't about code - it's a space for my hobbies: a place
        to document my creative work and share a bit of the process behind it.
      </Typography>
      <Typography>
        I've loved making art since I was a kid, and it's when I feel most like myself. I prefer
        traditional art over digital because of the physical connection - feeling the texture of the
        substrate, the weight of the tools, and the hands-on process of creating something beautiful
        and tangible. I'm by no means a professional - I have no formal training beyond art class
        during primary school, but I learn a lot from TikTok :)
      </Typography>
      <Typography>
        I mostly paint in oil, but also dabble in acrylic, gouache, and markers. Besides painting, I
        also love experimenting with different materials like wood, paper, and leather. Feel free to
        check out some of my work!
      </Typography>
    </Stack>
  );
}

export default function About() {
  const navbarHeight = useNavbarHeight();

  return (
    <Grid container sx={{ minHeight: "100%", pt: 1, mb: -4 }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box sx={{ p: { md: 6, xs: 2 }, pr: { md: 10 } }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
            <Typography variant="h2" sx={{ lineHeight: 1 }}>
              About Me
            </Typography>
            <Box
              component="img"
              src="/cat_sitting.png"
              sx={{
                width: 50,
                height: 50,
                position: "relative",
                top: "-4px",
              }}
            />
          </Stack>
          <Description />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              py: 4,
            }}
          >
            <Button
              endIcon={<KeyboardDoubleArrowRightIcon />}
              color="inherit"
              variant="outlined"
              component={RouterLink}
              to="/projects"
            >
              Ok let's go!
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }} sx={{ minHeight: "100%" }}>
        <Box
          component="img"
          src="/me/pingu.jpg"
          alt="Me"
          sx={{
            mt: -1,
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            // display: "block",
            // top: navbarHeight,
          }}
        />
      </Grid>
    </Grid>
  );
}
