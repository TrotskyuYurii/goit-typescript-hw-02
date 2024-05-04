import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageData } from "../../App.types";
import css from "../ImageGallery/ImageGallery.module.css";

interface ImageGalleryProps {
  Images: ImageData[];
  onClickOnImage: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ Images, onClickOnImage }) => {
  return (
    <ul className={css.ImageGalleryUl}>
      {Images.map((image) => (
        <li className={css.ImageCardLi} key={image.id}>
          <ImageCard
            smallImage={image.urls.small}
            alt_description={image.alt_description}
            onClickOnImage={onClickOnImage}
            bigImage={image.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
