import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Description() {
  return (
    <Stack spacing={2}>
      <Typography>
        I'm a software developer and recent graduate from McGill University, where I earned a Joint
        Major in Stats & CS. But this site isn't about code - it's a space for my hobbies: a place
        to document my creative work and share a bit of the process behind it.
      </Typography>
      <Typography>
        I've loved making art since I was a kid, and it's when I feel the happiest. I prefer
        traditional art over digital because of the physical connection - feeling the texture of the
        substrate, the weight of the tools, and the hands-on process of creating something beautiful
        and tangible. I'm by no means a professional - I have no formal training beyond art class
        during primary school, but I learn a lot from TikTok :)
      </Typography>
      <Typography>
        When I'm not busy making something, you'll find me indulging in some of my other favourite
        hobbies: collecting & sampling perfumes, playing piano, gambling on blind boxes, having a
        yummy drink, and doomscrolling while rotting in bed.
      </Typography>
      <Typography>
        As for my art - I mostly paint in oil, but also dabble in acrylic, gouache, and markers.
        Besides painting, I also love experimenting with different materials like wood, wool, and
        leather. Feel free to check out some of my work!
      </Typography>
    </Stack>
  );
}

export default function About() {
  return (
    <Grid container sx={{ minHeight: "100%", pt: 1, mb: -4 }}>
      <Grid size={{ xs: 12, md: 5 }} sx={{ minHeight: "100%" }} order={{ xs: 2, md: 1 }}>
        <Box
          component="img"
          src="https://live.staticflickr.com/65535/54672256546_6b82669b68_b.jpg"
          alt="Me in Liu Yuan, a historical garden in Suzhou."
          sx={{
            mt: -1,
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: 2 }}>
        <Box sx={{ px: { md: 10, xs: 4 }, py: { md: 6, xs: 4 } }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
            <Typography variant="h2" sx={{ lineHeight: 1 }}>
              About Me
            </Typography>
            <Box
              component="img"
              src="/icons/cat_sitting.png"
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
    </Grid>
  );
}
