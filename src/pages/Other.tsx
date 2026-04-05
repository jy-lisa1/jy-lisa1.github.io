import { Container, Typography } from "@mui/material";
import { useState } from "react";
import type { GalleryItem } from "../data/galleryItem";
import ProjectDetails from "../components/projects/ProjectDetails";
import { useColumns } from "../utils/utils";
import { feltworks } from "../data/feltworks";
import { markerDrawings } from "../data/markerDrawings";
import { fakeCakes } from "../data/fakeCakes";
import OtherProjectType from "../components/projects/OtherProjectType";
import { miniatureDollhouses } from "../data/miniDollhouses";
import { microDollhouses } from "../data/microDollhouses";

export default function Other() {
  const cols = useColumns();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | undefined>(undefined);
  function handleImageClick(item: GalleryItem) {
    setSelectedItem(item);
  }

  const OtherProjectTypes = [
    {
      title: "Felting",
      description: `This was a covid hobby that I come back to every now and then. I love how simple it is - all
          you really need is a felting needle and some wool, and then you just stab the wool until it
          forms into the shape that you want. It's cheap, convenient, and makes really cute Christmas
          ornaments! It does give me hella hand cramps though.`,
      items: feltworks,
    },
    {
      title: "Fake Cakes",
      description: `I saw someone making these on TikTok and I had to try it out! The "icing" is just
          lightweight spackling from Home Depot, mixed with acrylic paint for the colour. You can use
          anything as the base of the cake - I use boxes and jewellery boxes. Then, you just ice the
          cake as you would a real one, with piping bags and tips. It dries completely overnight!`,
      items: fakeCakes,
    },
    {
      title: "Miniatures (Scale: 1:24)",
      description: `This hobby started with diy dollhouse kits I found online - I loved watching YouTube 
        videos of people building them and decided to give it a go myself. It's way more work than it looks! 
        Each house takes me anywhere from a week to several months of continuous work, and a lot of the 
        parts need to be assembled with tweezers. It's a lot of cutting, measuring, gluing, and wrestling with 
        the tiny electrical wires. I can see how unappealing this would be to most people, but it's 
        perfect for me when I'm in the right mood!`,
      items: miniatureDollhouses,
    },
    {
      title: "Miniatures (Scale: 1:48)",
      description: `Even smaller than the mini dollhouses, these scenes are built inside tiny little 
              tins that are only a few inches wide. Almost every part is carefully assembled via tweezers. The 
              lighting is a lot simpler though, since they're just hooked up to battery powered string lights. I 
              kind of feel like a surgeon when I'm making these. An real test of patience!`,
      items: microDollhouses,
    },
    {
      title: "Alcohol Marker Drawings",
      description: `Alcohol markers are a very recent find of mine, but I don't use them much since they're
          super expensive and I always feel like they're gonna run out in like two seconds. I haven't
          really gotten the hang of them yet, but I love how vibrant the colours are and how smoothly
          they glide onto the paper.`,
      items: markerDrawings,
    },
  ];

  return (
    <Container sx={{ pt: 4, pb: 2 }}>
      <Typography variant="h2" sx={{ pb: 4 }}>
        Other Creations
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
