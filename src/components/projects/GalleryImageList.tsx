import { ImageList, ImageListItem, Box } from "@mui/material";
import type { GalleryItem } from "../../data/galleryItem";

type Props = {
  cols: number;
  items: GalleryItem[];
  handleImageClick: (item: GalleryItem) => void;
  title?: string;
  description?: string;
};

export default function GalleryImageList({ cols, items, handleImageClick }: Readonly<Props>) {
  return (
    <ImageList
      variant="masonry"
      cols={cols}
      gap={20}
      sx={{ px: cols <= 2 ? { md: 20, xs: 0 } : 0, py: 2 }}
    >
      {items.map((item) => (
        <ImageListItem key={item.title}>
          <Box
            component="img"
            src={`${item.paths[0]}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            onClick={() => handleImageClick(item)}
            sx={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
              transition: "0.1s ease",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
