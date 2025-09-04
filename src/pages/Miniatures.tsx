import { Container, Typography } from "@mui/material";
import { miniatureDollhouses } from "../data/miniDollhouses";
import { useState } from "react";
import type { GalleryItem } from "../data/galleryItem";
import { useColumns } from "../utils/utils";
import OtherProjectType from "../components/projects/OtherProjectType";
import ProjectDetails from "../components/projects/ProjectDetails";
import { microDollhouses } from "../data/microDollhouses";

export default function Miniatures() {
  const cols = useColumns();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);
  function handleImageClick(item: GalleryItem) {
    setSelectedItem(item);
  }
  const OtherProjectTypes = [
    {
      title: "Mini Dollhouses (Scale: 1:24)",
      description: `This hobby started with diy dollhouse kits I found online - I loved watching YouTube 
        videos of people building them and decided to give it a go myself. It's way harder than it looks! 
        Each house takes me anywhere from a week to several months of continuous work, and a lot of the 
        parts need to be assembled with tweezers. It's a lot of cutting, measuring, gluing, and wrestling with 
        the tiny electrical wires. I can see how unappealing this would be to most people, but it's 
        perfect for me when I'm in the right mood!`,
      items: miniatureDollhouses,
    },
    {
      title: "Micro Dollhouses (Scale: 1:48)",
      description: `Even smaller than the mini dollhouses, these scenes are built inside tiny little 
        tins that are only a few inches wide. Almost every part is carefully assembled via tweezers. The 
        lighting is a lot simpler though, since they're just hooked up to battery powered string lights. I 
        kind of feel like a surgeon when I'm making these. An real test of patience!`,
      items: microDollhouses,
    },
  ];
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ pb: 2 }}>
        Miniatures
      </Typography>
      {OtherProjectTypes.map((projectType) => (
        <OtherProjectType
          title={projectType.title}
          description={projectType.description}
          items={projectType.items}
          cols={cols}
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
