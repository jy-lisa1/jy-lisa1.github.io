import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import GalleryImageList from "../components/projects/GalleryImageList";
import { carvings, carvingTools } from "../data/carvings";
import { useState } from "react";
import type { GalleryItem } from "../data/galleryItem";
import ProjectDetails from "../components/projects/ProjectDetails";
import { useColumns } from "../utils/utils";
import HandymanIcon from "@mui/icons-material/Handyman";
import theme from "../themes/theme";

export default function Other() {
  const buttonColor = theme.palette.secondary.main;
  const cols = useColumns();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);

  function handleImageClick(item: GalleryItem) {
    setSelectedItem(item);
  }

  return (
    <Container sx={{ pt: 4, pb: 2 }}>
      <Typography variant="h2" sx={{ pb: 4 }}>
        Other Creations
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h3">Woodblock Carving & Printing</Typography>
        <Button
          endIcon={<HandymanIcon />}
          variant="outlined"
          sx={{ color: buttonColor, borderColor: buttonColor }}
          onClick={() => setSelectedItem(carvingTools)}
        >
          Tools
        </Button>
      </Stack>
      <Divider sx={{ borderWidth: "1px", my: 1 }} />
      <Typography>
        I got into block printing when I saw a woodblock carving kit in Suzhou Museum's gift shop. I
        fell in love immediately! It came with all the tools I needed, and some designs to get me
        started. Woodblock printing is an ancient Chinese technique originating from the Tang
        dynasty - while its practical role has long since been replaced by modern printing methods,
        I love how it still lives on today as a beloved art form.
      </Typography>

      <GalleryImageList cols={cols} items={carvings} handleImageClick={handleImageClick} />
      {selectedItem && (
        <ProjectDetails
          item={selectedItem}
          onClose={() => {
            setSelectedItem(undefined);
          }}
        />
      )}
    </Container>
  );
}
