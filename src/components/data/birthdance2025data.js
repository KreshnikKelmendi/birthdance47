// birthdance2025data.js
import poster1 from "../assets/firstPoster.png";
import poster2 from "../assets/finalVideo2.mp4";

const birth2025 = [
  {
    id: 1,
    type: "image",
    src: poster1,
    title: "Image 1",
    description: "This is an example of an image.",
    color: { title: "red", description: "red" }, // Inline color for title and description
  },
  {
    id: 2,
    type: "image",
    src: poster1,
    title: "Video 1",
    description: "This is an example of a video.",
    color: { title: "green", description: "green" }, // Inline color for title and description
  },
  {
    id: 3,
    type: "image",
    src: poster1,
    title: "Image 2",
    description: "Another example of an image.",
    color: { title: "yellow", description: "yellow" }, // Inline color for title and description
  },
  {
    id: 4,
    type: "video",
    src: poster2,
    title: "Video 2",
    description: "Another example of a video.",
    color: { title: "blue", description: "blue" }, // Inline color for title and description
  },
  {
    id: 5,
    type: "image",
    src: poster1,
    title: "Image 3",
    description: "A final example of an image.",
    color: { title: "purple", description: "purple" }, // Inline color for title and description
  },
];

export { birth2025 };
