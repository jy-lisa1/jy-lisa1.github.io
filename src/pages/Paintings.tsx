import { Container, Divider, Typography } from "@mui/material";
import { recentPaintings } from "../data/recentPaintings";
import { oldPaintings } from "../data/oldPaintings";
import type { GalleryItem } from "../data/galleryItem";
import { useState } from "react";
import ProjectDetails from "../components/projects/ProjectDetails";
import GalleryImageList from "../components/projects/GalleryImageList";
import { useColumns } from "../utils/utils";

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
  const cols = useColumns();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);

  const recentPaintingsOrdered = reorderPaintings(cols - 1, recentPaintings);
  const oldPaintingsOrdered = reorderPaintings(cols, oldPaintings);

  function handleImageClick(item: GalleryItem) {
    setSelectedItem(item);
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2">Recent Paintings</Typography>
      <Typography variant="h5">
        These are my most recent paintings. Click on each one for more details!
      </Typography>
      <GalleryImageList
        cols={cols - 1}
        items={recentPaintingsOrdered}
        handleImageClick={handleImageClick}
      />

      <Divider sx={{ borderWidth: "1px", my: 4 }} />

      <Typography variant="h2">Older Paintings</Typography>
      <Typography variant="h5">
        Most of these paintings are from my teenage years, in no particular order. What a throwback!
        Dates are missing from most of these because I don't really remember.
      </Typography>
      <GalleryImageList
        cols={cols}
        items={oldPaintingsOrdered}
        handleImageClick={handleImageClick}
      />

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
