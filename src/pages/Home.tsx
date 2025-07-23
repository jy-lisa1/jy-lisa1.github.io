import { Box, Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Home() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 5 }}>
        <Box sx={{ pt: { md: 20, xs: 10 }, pl: { md: 12, xs: 0 }, px: { xs: 6 } }}>
          <Box display="flex" alignItems="center" justifySelf={"center"}>
            <Typography variant="h1" gutterBottom>
              Hello!
            </Typography>
            <Box
              component="img"
              src="/icons/cat_laying.png"
              sx={{
                width: { md: 55, xs: 45 },
                height: { md: 55, xs: 45 },
                position: "relative",
                top: { md: "-18px", xs: "-12px" },
                left: 4,
              }}
            />
          </Box>
          <Typography variant="h3" sx={{ py: 4 }} justifySelf={"center"}>
            I'm Lisa - Thanks for visiting my site :)
          </Typography>
          <Typography variant="h3" justifySelf={"center"}>
            Come take a look at what I'm up to!
          </Typography>
          <Box sx={{ pt: { md: 8, xs: 4 } }} justifySelf={"center"}>
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
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          component="img"
          src="https://live.staticflickr.com/65535/54672584695_fbecb0c005_b.jpg"
          alt="Me in Shanghai"
          sx={{
            width: "100%",
            height: "100%",
            pt: 4,
          }}
        />
      </Grid>
    </Grid>
  );
}
