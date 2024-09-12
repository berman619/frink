import React, { useState } from 'react';
import '../styles/Samples.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const sampleImages = [
  { url: `${process.env.PUBLIC_URL}/sample1.jpg`, alt: 'Sample 1' },
  { url: `${process.env.PUBLIC_URL}/sample2.jpg`, alt: 'Sample 2' },
  { url: `${process.env.PUBLIC_URL}/sample3.jpg`, alt: 'Sample 3' },
  { url: `${process.env.PUBLIC_URL}/sample4.jpg`, alt: 'Sample 4' },
  { url: `${process.env.PUBLIC_URL}/sample5.jpg`, alt: 'Sample 5' },
  { url: `${process.env.PUBLIC_URL}/sample6.jpg`, alt: 'Sample 6' },
];

const Samples = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="samples" className="samples">
      <h2>Samples</h2>
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          {sampleImages.map((image, index) => (
            <div key={index} className="sample-item">
              <div onClick={() => openModal(image)} style={{ cursor: 'pointer' }}>
                <img src={image.url} alt={image.alt} className="clickable-image" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage.url} alt={modalImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Samples;
