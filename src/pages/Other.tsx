import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import GalleryImageList from "../components/projects/GalleryImageList";
import { carvings, carvingTools } from "../data/carvings";
import { useState } from "react";
import type { GalleryItem } from "../data/galleryItem";
import ProjectDetails from "../components/projects/ProjectDetails";
import { useColumns } from "../utils/utils";
import HandymanIcon from "@mui/icons-material/Handyman";
import theme from "../themes/theme";
import { feltworks } from "../data/feltworks";
import { markerDrawings } from "../data/markerDrawings";
import { fakeCakes } from "../data/fakeCakes";

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

      <Typography variant="h3">Alcohol Marker Drawings</Typography>
      <Divider sx={{ borderWidth: "1px", my: 1 }} />
      <Typography>
        Alcohol markers are a very recent find of mine, but I don't use them much since they're
        super expensive and I always feel like they're gonna run out in like two seconds. I haven't
        really gotten the hang of them yet, but I love how vibrant the colours are and how smoothly
        they glide onto the paper.
      </Typography>
      <GalleryImageList cols={cols} items={markerDrawings} handleImageClick={handleImageClick} />

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h3">Woodblock Printing</Typography>
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
        I got into block printing when I saw a woodblock carving kit in the Suzhou Museum's gift
        shop. I fell in love immediately! It came with all the tools I needed, and some designs to
        get me started. Woodblock printing is an ancient Chinese technique originating from the Tang
        dynasty - while its practical role has long since been replaced by modern printing methods,
        I love how it still lives on today as a beloved art form.
      </Typography>
      <GalleryImageList cols={cols} items={carvings} handleImageClick={handleImageClick} />

      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h3">Felting</Typography>
      </Stack>
      <Divider sx={{ borderWidth: "1px", my: 1 }} />
      <Typography>
        This was a covid hobby that I come back to every now and then. I love how simple it is - all
        you really need is a felting needle and some wool, and then you just stab the wool until it
        forms into the shape that you want. It's cheap, convenient, and makes really cute Christmas
        ornaments! It does give me hella hand cramps though.
      </Typography>
      <GalleryImageList cols={cols} items={feltworks} handleImageClick={handleImageClick} />

      <Typography variant="h3">Fake Cakes</Typography>
      <Divider sx={{ borderWidth: "1px", my: 1 }} />
      <Typography>
        I saw someone making these on TikTok and I had to try it out! The "icing" is just
        lightweight spackling from Home Depot, mixed with acrylic paint for the colour. You can use
        anything as the base of the cake - I use boxes and jewellery boxes. Then, you just ice the
        cake as you would a real one, with piping bags and tips. It dries completely overnight!
      </Typography>
      <GalleryImageList cols={cols} items={fakeCakes} handleImageClick={handleImageClick} />

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
