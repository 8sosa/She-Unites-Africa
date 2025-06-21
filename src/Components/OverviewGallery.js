import React from 'react';
import { Container } from 'react-bootstrap';

export default function Gallery() {
  const importAll = (requireContext) => {
    return requireContext.keys().map(requireContext);
  };
  
const gallery = importAll(require.context('../Images/eventImgs', false, /\.(png|jpe?g|svg|jpg)$/));
  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="homeSectionTitle mont">Overview Gallery</h1>
      <div className="gallery">
        {gallery.map((img, index) => (
            <div className="gallery-item" key={index}>
                <img src={img} alt='Previous event'/>
            </div>
        ))}
      </div>
    </Container>
  );
}