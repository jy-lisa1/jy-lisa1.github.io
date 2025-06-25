import {
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { recentPaintings } from "../data/recentPaintings";
import { oldPaintings } from "../data/oldPaintings";
import type { GalleryItem } from "../data/galleryItem";

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

  const recentPaintingsOrdered = reorderPaintings(cols, recentPaintings);
  const oldPaintingsOrdered = reorderPaintings(cols + 1, oldPaintings);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2">Recent Paintings</Typography>
      <Typography variant="h5">
        These are my most recent paintings, done in the past year. Click on each one for more
        details!
      </Typography>
      <ImageList variant="masonry" cols={cols} gap={20} sx={{ px: { md: 20, xs: 0 }, py: 2 }}>
        {recentPaintingsOrdered.map((item) => (
          <ImageListItem key={item.title}>
            <img src={`${item.path}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Divider sx={{ borderWidth: "1px", my: 4 }} />

      <Typography variant="h2">Older Paintings</Typography>
      <Typography variant="h5">
        These are some paintings, in no particular order, from my teenage years. What a throwback!
        Dates are missing from most of these because I genuinely don't remember.
      </Typography>
      <ImageList variant="masonry" cols={cols + 1} gap={20} sx={{ py: 2 }}>
        {oldPaintingsOrdered.map((item) => (
          <ImageListItem key={item.title}>
            <img src={`${item.path}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
