import { Typography, Divider, Stack } from "@mui/material";
import type { GalleryItem } from "../../data/galleryItem";
import GalleryImageList from "./GalleryImageList";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  items: GalleryItem[];
  cols: number;
  handleImageClick: (galleryItem: GalleryItem) => void;
  infoButton?: ReactNode;
};

export default function OtherProjectType({
  title,
  description,
  items,
  cols,
  handleImageClick,
  infoButton,
}: Readonly<Props>) {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h3">{title}</Typography>
        {infoButton}
      </Stack>
      <Divider sx={{ borderWidth: "1px", my: 1 }} />
      <Typography>{description}</Typography>
      <GalleryImageList cols={cols} items={items} handleImageClick={handleImageClick} />
    </>
  );
}
