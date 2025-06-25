import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import ProjectTypePanel, {
  type ProjectTypePanelProps,
} from "../components/projects/ProjectTypePanel";

const projectPages: ProjectTypePanelProps[] = [
  {
    title: "Paintings",
    description: "I paint in oil, gouache, and acrylic.",
    imagePath: "url('/paint.jpg')",
    projectType: "paintings",
  },
  {
    title: "Block Printing",
    description: "One of my new discoveries.",
    imagePath: "url('/carve.jpg')",
    projectType: "carvings",
  },
  {
    title: "Other",
    description: "All the other random hobbies I picked up.",
    imagePath: "url('/wool.jpg')",
    projectType: "other",
  },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Box sx={{ pb: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
          <Typography variant="h2" sx={{ lineHeight: 1 }}>
            My Projects
          </Typography>
          <Box
            component="img"
            src="/icons/cat_xo.png"
            sx={{
              width: 50,
              height: 50,
              position: "relative",
              top: "-4px",
            }}
          />
        </Stack>
        <Typography variant="h3">Take a look at some of my recent creations!</Typography>
      </Box>
      <Grid container spacing={2}>
        {projectPages.map((page) => {
          return (
            <Grid size={{ xs: 12, md: 4 }} key={page.projectType}>
              <ProjectTypePanel
                title={page.projectType}
                description={page.description}
                imagePath={page.imagePath}
                projectType={page.projectType}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
