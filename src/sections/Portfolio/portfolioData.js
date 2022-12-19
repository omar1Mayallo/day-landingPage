import portfolioImg1 from "../../assets/portfolio-1.jpg";
import portfolioImg2 from "../../assets/portfolio-2.jpg";
import portfolioImg3 from "../../assets/portfolio-3.jpg";
import portfolioImg4 from "../../assets/portfolio-4.jpg";
import portfolioImg5 from "../../assets/portfolio-5.jpg";
import portfolioImg6 from "../../assets/portfolio-6.jpg";
import portfolioImg7 from "../../assets/portfolio-7.jpg";
import portfolioImg8 from "../../assets/portfolio-8.jpg";
import portfolioImg9 from "../../assets/portfolio-9.jpg";

const portfolioItems = [
  {
    id: 1,
    img: portfolioImg1,
    width: 1080,
    height: 780,

    category: "web",
    title: "web1",
    description: "First website",
  },
  {
    id: 2,
    img: portfolioImg2,
    width: 1080,
    height: 1620,
    category: "mobile",
    title: "mobile1",
    description: "first mobile app",
  },
  {
    id: 3,
    img: portfolioImg3,
    width: 1080,
    height: 720,
    category: "web",
    title: "web2",
    description: "Second website",
  },
  {
    id: 4,
    img: portfolioImg4,
    category: "mobile",
    title: "mobile2",
    description: "second mobile app",
    width: 1080,
    height: 721,
  },
  {
    id: 5,
    img: portfolioImg5,
    category: "desktop",
    title: "desktop1",
    description: "first desktop app",
    width: 1080,
    height: 1620,
  },
  {
    id: 6,
    img: portfolioImg6,
    category: "web",
    title: "web3",
    description: "Third website",
    width: 1080,
    height: 900,
  },
  {
    id: 7,
    img: portfolioImg7,
    category: "mobile",
    title: "mobile3",
    description: "third mobile app",
    width: 1080,
    height: 608,
  },
  {
    id: 8,
    img: portfolioImg8,
    category: "web",
    title: "web4",
    description: "Forth website",
    width: 1080,
    height: 720,
  },
  {
    id: 9,
    img: portfolioImg9,
    category: "desktop",
    title: "desktop2",
    description: "second desktop app",
    width: 1080,
    height: 620,
  },
];
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
export const portfolioPhotos = portfolioItems.map((item) => {
  const width = breakpoints[0];
  const height = (item.height / item.width) * width;

  return {
    src: item.img,
    width,
    height,
    title: item.title,
    category: item.category,
    description: item.description,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((item.height / item.width) * breakpoint);
      return {
        src: item.img,
        width: breakpoint,
        height,
      };
    }),
  };
});
export const categories = [
  "all",
  ...new Set(portfolioItems.map(({category}) => category)),
];
