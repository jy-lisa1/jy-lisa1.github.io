import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import type { GalleryItem } from "../data/galleryItem";
import { useColumns } from "../utils/utils";
import OtherProjectType from "../components/projects/OtherProjectType";
import ProjectDetails from "../components/projects/ProjectDetails";
import { suzhouMuseumPrints, carvingTools } from "../data/suzhouMuseumPrints";
import HandymanIcon from "@mui/icons-material/Handyman";
import theme from "../themes/theme";
import { chineseCatPrints } from "../data/originalPrints";

export default function Carvings() {
  const buttonColor = theme.palette.secondary.main;
  const cols = useColumns();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);
  function handleImageClick(item: GalleryItem) {
    setSelectedItem(item);
  }
  const OtherProjectTypes = [
    {
      title: "Chinese Cat Collection",
      description: `Inspired by the concept of combining cats (my favourite animal) and traditional Chinese 
      elements in the Suzhou Museum kit, I decided to go ahead and create some original designs. 
      I brainstormed some ideas based on my own experiences and memories of my time spent in China 
      over the years. I think they turned out super cute, and I love being gifting these to my friends - 
      I can guarantee that they are one of a kind! I even stamped them with my seal on the back.`,
      items: chineseCatPrints,
      cols: cols - 1,
    },
    {
      title: "Suzhou Museum Block Prints",
      description: `The kit that started it all! I loved all the designs it came with, and it inspired 
      me to make my own original collections in the sections above.`,
      items: suzhouMuseumPrints,
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <></>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 2 }}>
        <Typography variant="h2">Block Prints</Typography>
        <Button
          endIcon={<HandymanIcon />}
          variant="outlined"
          sx={{ color: buttonColor, borderColor: buttonColor }}
          onClick={() => setSelectedItem(carvingTools)}
        >
          Tools
        </Button>
      </Stack>
      <Typography variant="h5" sx={{ pb: 4 }}>
        I got into block printing when I saw a woodblock carving kit in the Suzhou Museum's gift
        shop. I fell in love immediately! It came with all the tools I needed, and some designs to
        get me started. Woodblock printing is an ancient Chinese technique originating from the Tang
        dynasty - while its practical role has long since been replaced by modern printing methods,
        I love how it still lives on today as a beloved art form.
      </Typography>
      {OtherProjectTypes.map((projectType) => (
        <OtherProjectType
          title={projectType.title}
          description={projectType.description}
          items={projectType.items}
          cols={projectType.cols ?? cols}
          handleImageClick={handleImageClick}
        />
      ))}
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
