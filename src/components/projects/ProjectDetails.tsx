import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import type { GalleryItem } from "../../data/galleryItem";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  item: GalleryItem;
  open: boolean;
  onClose: () => void;
};

export default function ProjectDetails({ item, open, onClose }: Readonly<Props>) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            pr: 5,
            overflow: "hidden",
            textOverflow: "wrap",
          }}
        >
          Project Details - {item.title}
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ ml: 2 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="img"
          src={`${item.path}?w=248&fit=crop&auto=format`}
          alt={item.title}
          sx={{
            width: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: 1,
          }}
        />
        <Typography sx={{ pt: 2 }}>
          <b>Date:</b> {item.date}
        </Typography>
        <Typography>
          <b>Medium:</b> {item.medium}
        </Typography>
        <Typography sx={{ pb: 2 }}>
          <b>Size:</b> {item.size}
        </Typography>
        <Divider />
        <Typography sx={{ py: 2 }}>{item.notes}</Typography>
      </DialogContent>
    </Dialog>
  );
}
