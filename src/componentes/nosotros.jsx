import React, { useState } from 'react';
import '../css/nosotros.css';
//Botones de flechas
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';

function Nosotros() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slideData = [
    {
      backgroundColor: '#26aa89',
      title: '¿Cómo funciona?',
      content:
        'Simplemente definí la cantidad de comidas que queres recibir a la semana y el plan alimenticio que más se adecue a tu dieta, del resto nos encargamos nosotros!',
      image: './img/HelloFresh_Unboxing.jpg',
    },
    {
      backgroundColor: '#26aa89',
      title: 'Dietas',
      content:
        'Contamos con opciones vegetarianas, veganas y aptas para celíacos para que puedas seleccionar tu plan según tus necesidades.',
      image: './img/recibe.jpeg',
    },
    {
      backgroundColor: '#26aa89',
      title: '¿Cómo me suscribo?',
      content: 'Contactate con nosotros para recibir asesoramiento y poder personalizar tu plan a tus gustos.',
      image: './img/cocinando.jpg',
    },
    {
      backgroundColor: '#26aa89',
      title: '¿Quienes somos?',
      content:
        'Ofrecemos planes de box semanales a domicilio que incluyen alimentos frescos y un recetario para planificar tus comidas y asegurarte una alimentación completa y nutricionalmente equilibrada.',
      image: './img/familia.jpeg',
    },
  ];

  const changeSlide = (direction) => {
    const slidesLength = slideData.length;
    if (direction === 'up') {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
    } else if (direction === 'down') {
      setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
    }
  };

  return (
    <div className="slider-container nosotros">
      <div className="left-slide" style={{ top: `-${activeSlideIndex * 100}vh` }}>
        {slideData.map((slide, index) => (
          <div key={index} style={{ backgroundColor: slide.backgroundColor }}>
            <h2 className='tituloContenido'>{slide.title}</h2>
            <p className='contenido'>{slide.content}</p>
          </div>
        ))}
      </div>
      <div className="right-slide">
        {slideData.map((slide, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${slide.image})`,
              display: activeSlideIndex === index ? 'block' : 'none',
            }}
          ></div>
        ))}
      </div>
      <div className="action-buttons">
        <button className="down-button botonSlides" onClick={() => changeSlide('down')}>
          <i className="fas fa-arrow-down"></i>
        </button>
        <button className="up-button botonSlides" onClick={() => changeSlide('up')}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );

}

export default Nosotros;
