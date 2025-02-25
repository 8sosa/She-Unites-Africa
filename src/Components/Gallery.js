import React from 'react';
import { Container } from 'react-bootstrap';
import A from '../Images/eventImgs/a.jpg'
import B from '../Images/eventImgs/b.jpg'
import C from '../Images/eventImgs/c.jpg'
import D from '../Images/eventImgs/d.jpg'
import E from '../Images/eventImgs/e.jpg'
import F from '../Images/eventImgs/f.jpg'
import G from '../Images/eventImgs/g.jpg'
import H from '../Images/eventImgs/h.jpg'
import I from '../Images/eventImgs/i.jpg'
import J from '../Images/eventImgs/j.JPG'
import K from '../Images/eventImgs/k.JPG'
import L from '../Images/eventImgs/l.jpg'
import M from '../Images/eventImgs/m.png'

export default function Gallery() {
    const gallery = [
        {src: A},
        {src: B},
        {src: C},
        {src: D},
        {src: E},
        {src: F},
        {src: G},
        {src: H},
        {src: I},
        {src: J},
        {src: K},
        {src: L},
        {src: M},
    ]
  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="homeSectionTitle mont">Previous Events Gallery</h1>
      <div className="gallery">
        {gallery.map((img, index) => (
            <div className="gallery-item" key={index}>
                <img src={img.src} alt='Previous event'/>
            </div>
        ))}
      </div>
    </Container>
  );
}