import type { GalleryItem } from "./galleryItem";

const HIGH_SCHOOL = "Some time in high school (2016-2020)";
const MIDDLE_SCHOOL = "Some time in middle school (2014-2016)";
const OIL = "Oil";
const ACRYLIC = "Acrylic";
const GOUACHE = "Gouache";
const POTTERY = "Pottery";

export const oldPaintings: GalleryItem[] = [
  {
    path: "/old_paintings/first_oil_painting.jpg",
    title: "My first oil painting!",
    date: HIGH_SCHOOL,
    medium: OIL,
    referenceSource: "Followed a tutorial from an old art book.",
    size: "14 x 18",
    notes: `My first time trying oil painting! It's really different from acrylic and it was hard
       to get used to, since the paint doesn't dry instantly. I didn't fully get used to it until 2025, 
       when I learned a bunch of useful techniques on TikTok.`,
  },
  {
    path: "/old_paintings/impressionism.jpg",
    title: "A shot at impressionism",
    date: HIGH_SCHOOL,
    medium: OIL,
    referenceSource: "Nothing! The water lilies are inspired by monet though.",
    size: "16 x 20",
    notes: `Painted over a painting I hated, and decided to give impressionism a try. 
      I love Monet paintings and I tried to emulate some of his vibes, without a reference photo.`,
  },
  {
    path: "/old_paintings/venice.jpg",
    title: "Venice",
    date: "July 2024",
    medium: OIL,
    referenceSource: "My camera album after my 2019 Europe trip",
    size: "20 x 24",
    notes: `Venice was my favourite part of my Italy trip. I went during a heat wave, and it was the 
        only place I visited where it wasn't 40 degrees.`,
  },
  {
    path: "/old_paintings/flowers_and_grapes.jpg",
    title: "Flowers",
    date: HIGH_SCHOOL,
    medium: OIL,
    referenceSource:
      "Google Images - It was a popular reference photo, but I can't find it anymore.",
    size: "16 x 20",
    notes: `I just remember this one being kinda tedious. Something about this piece looks weird, but I 
    can't put my finger on it. I definitely like landscapes more :)`,
  },
  {
    path: "/old_paintings/cranes_dancing.jpg",
    title: "Dancing Cranes",
    date: HIGH_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "Google Images. It was another popular reference photo that disappeared.",
    size: "20 x 24",
    notes: `I lvoed the reference photo, but I really procrastinated finishing this one. 
    It sat, unfinished and neglected in the basement, for years.`,
  },
  {
    path: "/old_paintings/ghibli_column.jpg",
    title: "Ghibli Courtyard",
    date: HIGH_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "Pinterest",
    size: "12 x 12",
    notes: `One of my favourite recreations! I love how the water turned out - it was pretty hard and time 
    consuming to achieve this effect with acrylics, but I hadn't learned oil at the time.`,
  },
  {
    path: "/old_paintings/plant_leaves.jpg",
    title: "Plants",
    date: HIGH_SCHOOL,
    medium: OIL,
    referenceSource: "Some home decor I saw",
    size: "20 x 24",
    notes: `I saw this as a print at a home decor store, but it was morbidly overpriced. Decided to make 
    it myself and it actually didn't take long at all - finished it in just one afternoon.`,
  },
  {
    path: "/old_paintings/cranes.jpg",
    title: "Cranes",
    date: HIGH_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "Google Images - I can't find the original photo anymore.",
    size: "14 x 18",
    notes: `I finished this one in one sitting! It's one of my dad's favourites.`,
  },
  {
    path: "/old_paintings/italy.jpg",
    title: "Italy",
    date: MIDDLE_SCHOOL,
    medium: OIL,
    referenceSource: "A book about Italy",
    size: "20 x 24",
    notes: `Not much to say about this one - saw a photo I liked in a book about Italy and decided to 
    paint it. I never varnished it because I didn't know I was supposed to, and unfortunately it's starting 
    to crack already :(`,
  },
  {
    path: "/old_paintings/ghibli_gazebo.jpg",
    title: "Ghibli - scene from Porco Rosso",
    date: MIDDLE_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "Ghibli movie",
    size: "16 x 20",
    notes: `I actually really liked this one, even though the clouds are looking kinda rough. The red gazebo roof, 
    combined with the vibrant colours of the garden, made it really fun to look at.`,
  },

  {
    path: "/old_paintings/sheep_on_hill.jpg",
    title: "Sheep by the sea",
    date: HIGH_SCHOOL,
    medium: GOUACHE,
    referenceSource: "Pinterest",
    size: "4 x 6",
    notes: `A small painting that I hung in my tiny Montreal apartment.`,
  },
  {
    path: "/old_paintings/autumn.jpg",
    title: "A fall scene",
    date: MIDDLE_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "An old art book",
    size: "16 x 20",
    notes: `I think I made this one sometime in middle school. I followed a tutorial in an old art book, 
    and loved how it turned out. It was a lot of fun dabbing my brush onto the canvas to make the leaves.`,
  },
  {
    path: "/old_paintings/sheep_by_water.jpg",
    title: "Another sheep",
    date: HIGH_SCHOOL,
    medium: GOUACHE,
    referenceSource: "Pinterest",
    size: "4 x 6",
    notes: `I like painting sheep because my name in Chinese (Yang) is a homonym for sheep/goats.`,
  },
  {
    path: "/old_paintings/sheep_plate.jpg",
    title: "Sheep plate",
    date: HIGH_SCHOOL,
    medium: POTTERY,
    referenceSource: "Pinterest",
    size: "15-ish cm across",
    notes: `Painted this at Art Haven. I honestly liked the colours better before the piece was fired in
    the oven, but it still looks pretty cute. I'm using it to display some of my perfumes right now.`,
  },
  {
    path: "/old_paintings/ghibli_yard.jpg",
    title: "Another Ghibli scene",
    date: HIGH_SCHOOL,
    medium: ACRYLIC,
    referenceSource: "Ghibli movie.",
    size: "12 x 12",
    notes: `Not a huge fan of this one. I painted it to match the other square Ghibli scene.`,
  },
];
