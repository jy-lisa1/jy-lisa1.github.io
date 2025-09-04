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
import { Carousel } from "react-responsive-carousel";

type Props = {
  item: GalleryItem;
  onClose: () => void;
};

export default function ProjectDetails({ item, onClose }: Readonly<Props>) {
  return (
    <Dialog open={true} onClose={onClose}>
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
          {item.title !== "Carving Tools" && "Project Details - "}
          {item.title}
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={{ ml: 2 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {item.paths.length === 1 ? (
          <Box
            component="img"
            src={`${item.paths[0]}?w=248&fit=crop&auto=format`}
            alt={item.title}
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: 1,
            }}
          />
        ) : (
          <Box>
            <Carousel useKeyboardArrows showThumbs={false} showStatus={false}>
              {item.paths.map((path, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "450px",
                  }}
                >
                  <img
                    src={path}
                    alt={`project_photo_${index}`}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Box>
        )}
        {item.date && (
          <Typography sx={{ pt: 2 }}>
            <b>Date:</b> {item.date}
          </Typography>
        )}
        {item.medium && (
          <Typography>
            <b>Medium:</b> {item.medium}
          </Typography>
        )}
        {item.size && (
          <Typography sx={{ pb: 2 }}>
            <b>Size:</b> {item.size}
          </Typography>
        )}
        <Divider />
        <Typography sx={{ py: 2 }}>{item.notes}</Typography>
      </DialogContent>
    </Dialog>
  );
}
