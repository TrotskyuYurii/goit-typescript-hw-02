import React from "react";
import css from "../ImageCard/ImageCard.module.css";

interface ImageCardProps {
  smallImage: string;
  alt_description: string;
  onClickOnImage: (imageUrl: string) => void;
  bigImage: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ smallImage, alt_description, onClickOnImage, bigImage }) => {

  const handleClick: React.MouseEventHandler<HTMLImageElement> = () => {
    onClickOnImage(bigImage);
  };

  return (
    <div>
      <img className={css.imageCard} src={smallImage} alt={alt_description} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;
