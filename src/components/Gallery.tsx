import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

interface GalleryItem {
  title: string;
  image: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: 'FPV PILOT',
    image: require('../assets/images/LukasImage_1530_20250725.jpg'),
    link: '/fpv-pilot'
  },
  {
    title: 'VIDEO',
    image: require('../assets/images/LukasImage_1530_20250725.jpg'),
    link: '/video'
  },
  {
    title: 'PHOTO',
    image: require('../assets/images/LukasImage_1530_20250725.jpg'),
    link: '/photo'
  }
];

export default function Gallery(): React.ReactElement {
  return (
    <div className="image-gallery">
      {galleryItems.map((item, index) => (
        <Link to={item.link} key={index} className="gallery-item">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-overlay">
            <span className="gallery-text">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
