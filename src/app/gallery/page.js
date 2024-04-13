'use client' 
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { animated, useTransition } from 'react-spring';

const Page = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const navigate = (direction) => {
    if (direction === 'left') {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setSelectedIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const transitions = useTransition(selectedIndex, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
  });

  const galleryItems = images.map((image, index) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => openImage(index)}
        />
      ))}
      {transitions((style, index) =>
        index !== null ? (
          <animated.div className="modal" style={style}>
            <ImageGallery
              items={galleryItems}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              showNav={false}
              startIndex={index}
              onRequestClose={closeImage}
              onSlide={(_, { currentIndex }) => setSelectedIndex(currentIndex)}
            />
            <button className="nav-btn left" onClick={() => navigate('left')}>
              &lt;
            </button>
            <button className="nav-btn right" onClick={() => navigate('right')}>
              &gt;
            </button>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default Page;
