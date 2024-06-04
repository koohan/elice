import React, { useEffect, useState } from 'react';
import Slider from '../../molecules/mainSlider/Slider';

const Sliders = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        const urls = data.products.map(product => product.imageSrc);
        setImageUrls(urls);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Image Slider</h2>
      <Slider images={imageUrls} />
    </div>
  );
};

export default Sliders;
