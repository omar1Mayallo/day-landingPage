import React, {useState} from "react";
import {PortfolioBlockStyled} from "./portfolio.styled";
import {categories, portfolioPhotos} from "./portfolioData";

//photo lightBox gallery
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import {AnimationOnScroll} from "react-animation-on-scroll";

const PortfolioBlock = () => {
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState(portfolioPhotos);
  const slides = photos.map(
    ({src, width, height, images, title, description, category}) => ({
      src,
      width,
      height,
      title,
      description,
      category,
      srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
      })),
    })
  );
  const filterPhotos = (category) => {
    //Check The all Items category
    if (category === "all") {
      setPhotos(portfolioPhotos);
      return;
    }
    // filter based on the selected category
    const filteredPhotos = portfolioPhotos.filter((item) => {
      // console.log(item.category);
      return item.category.toLowerCase() === category.toLowerCase();
    });
    setPhotos(filteredPhotos);
  };
  // console.log(photos);
  return (
    <PortfolioBlockStyled>
      <ul className="categoriesList">
        {categories.map((category, idx) => (
          <li key={idx} onClick={() => filterPhotos(category)}>
            {category.toUpperCase()}
          </li>
        ))}
      </ul>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <PhotoAlbum
          layout="columns"
          photos={slides}
          targetRowHeight={150}
          onClick={({index}) => setIndex(index)}
        />
      </AnimationOnScroll>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </PortfolioBlockStyled>
  );
};

export default PortfolioBlock;
