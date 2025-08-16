import { Container, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { recentPaintings } from "../data/recentPaintings";
import { oldPaintings } from "../data/oldPaintings";
import type { GalleryItem } from "../data/galleryItem";
import { useState } from "react";
import ProjectDetails from "../components/projects/ProjectDetails";
import GalleryImageList from "../components/projects/GalleryImageList";

function getEveryNth(list: GalleryItem[], n: number, m: number) {
  return list.filter((_, index) => (index - m) % n === 0 && index >= m);
}

function reorderPaintings(cols: number, paintings: GalleryItem[]) {
  const orderedPaintings: GalleryItem[] = [];
  for (let i = 0; i < cols; i += 1) {
    orderedPaintings.push(...getEveryNth(paintings, cols, i));
  }
  return orderedPaintings;
}

export default function Paintings() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isXs ? 1 : 2;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);

  const recentPaintingsOrdered = reorderPaintings(cols, recentPaintings);
  const oldPaintingsOrdered = reorderPaintings(cols + 1, oldPaintings);

  function handleImageClick(item: GalleryItem) {
    setDialogOpen(true);
    setSelectedItem(item);
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2">Recent Paintings</Typography>
      <Typography variant="h5">
        These are my most recent paintings. Click on each one for more details!
      </Typography>
      <GalleryImageList
        cols={cols}
        items={recentPaintingsOrdered}
        handleImageClick={handleImageClick}
      />

      <Divider sx={{ borderWidth: "1px", my: 4 }} />

      <Typography variant="h2">Older Paintings</Typography>
      <Typography variant="h5">
        These are some paintings, in no particular order, from my teenage years. What a throwback!
        Dates are missing from most of these because I don't really remember.
      </Typography>
      <GalleryImageList
        cols={cols + 1}
        items={oldPaintingsOrdered}
        handleImageClick={handleImageClick}
      />

      {selectedItem && (
        <ProjectDetails
          item={selectedItem}
          open={dialogOpen}
          onClose={() => {
            setDialogOpen(false);
            setSelectedItem(undefined);
          }}
        />
      )}
    </Container>
  );
}
