import React, { useState } from 'react';
import '../css/nosotros.css';

const PreguntasFrecuentes = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            title: '¿Qué métodos de pago aceptan?',
            content: 'Podés pagar con tarjeta de débito o crédito Visa, MasterCard o American Express.',
        },
        {
            title: '¿Se trata de un cobro mensual o semanal?',
            content: 'Procesamos todos los cobros por semana, sólo se te cobrará por los pedidos activos que no se hayan omitido.',
        },
        {
            title: '¿A dónde hacen envíos?',
            content: 'Entregamos sin cargo en todo CABA, partidos de Vicente López, San Isidro y Zona Oeste. Tenemos muchos más planes de expansión. ¡Estate atentx a las novedades en redes sociales!',
        },
        {
            title: '¿Cuándo son las entregas y qué pasa si no estoy en casa?',
            content: 'Los plazos de entrega son de 19 a 22 hs los días lunes. Si no estás en casa, ¡no te preocupes! Siempre podes agregar instrucciones de entrega especiales. Por ejemplo decirnos otra dirección de entrega o dejarle la caja a un vecino o en portería del edificio. Tené en cuenta que la caja no tiene devolución. Cada caja es única, y está llena de ingredientes frescos lista para que la recibas y disfrutes. En caso de que no estés en tu casa, no podamos comunicarnos con vos telefónicamente y no tengas una nueva dirección o instrucción especial para darnos, entonces la caja no va a ser entregada (recordá que la caja no tiene devolución, está hecha especialmente para vos, con tus recetas y llena de ingredientes frescos que necesitan ser refrigerados o freezados).',
        },
        {
            title: '¿Cómo se mantiene fresca mi comida?',
            content: 'Cada receta viene con información nutricional detallada, incluidas las alergias alimentarias. Podes encontrar esta información en todas las tarjetas digitales de recetas y online cuando elijas tus comidas.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bodyFYQ">
            <h2 className="tituloP12 text-center fyq"> Preguntas Frecuentes </h2>
            <div className="faq-container">
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`}>
                        <h3 className="faq-title" onClick={() => toggleAccordion(index)}>
                            {faq.title}
                        </h3>
                        <p className="faq-text">{faq.content}</p>
                        <button className="faq-toggle" onClick={() => toggleAccordion(index)}>
                            <i className={`fas ${activeIndex === index ? 'fa-times' : 'fa-chevron-down'}`}></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreguntasFrecuentes;
