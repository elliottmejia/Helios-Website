export type AboutData = {
  name: string;
  selector: string;
  format: string;
};

export const dir = "public/about";

export const AboutContentData: AboutData[] = [
  {
    name: "About Us",
    selector: "about-us",
    format: "mdx",
  },
  {
    name: "How Solar Works",
    selector: "how-solar-works",
    format: "mdx",
  },
  {
    name: "Pace Funding",
    selector: "pace-funding",
    format: "mdx",
  },
  {
    name: "Our Team",
    selector: "our-team",
    format: "mdx",
  },
];
