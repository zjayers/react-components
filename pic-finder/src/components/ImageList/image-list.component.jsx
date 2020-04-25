import React from 'react';
import ImageCard from '../ImageCard/image-card.component'
import './image-list.style.css';


const ImageList = ({ images }) => {

  const imgsToRenfer = images.map((image) => <ImageCard key={image.id} image={image} />);

  return (
    <div className='image-list'>
      {imgsToRenfer}
    </div>
  );
}

export default ImageList;