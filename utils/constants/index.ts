export const HUB_SPOT_TOKEN = process.env.NEXT_PUBLIC_HUB_SPOT_TOKEN;
export const navItems = [
  { text: "Features", link: "/#features" },
  { text: "About Us", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Contact Us", link: "/#contactUs" },
];

export const features = [
  {
    heading: "Face Identification",
    description:
      "Pinpoint different faces to know who is who. Ex: Who is this?",
    src: "/icons/face.svg",
  },
  {
    heading: "Face Verification",
    description:
      "To find and confirm whose face it is in the picture. Ex: Is this Divya?",
    src: "/icons/face1.svg",
  },
  {
    heading: "Face Match",
    description:
      "To compare and verify the human faces are the same from two input images.",
    src: "/icons/face2.svg",
  },
];
