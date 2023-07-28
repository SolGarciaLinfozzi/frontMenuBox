import React, { useState } from 'react';
import '../css/planes.css';

const CalculadoraPlan = () => {
    const [boxesCount, setBoxesCount] = useState(1);
    const [boxData, setBoxData] = useState([{ plan: 'almuerzo', price: 2500, days: 1 }]);
    const [totalPrice, setTotalPrice] = useState(2500);

    const handleBoxesCountChange = (event) => {
        const count = parseInt(event.target.value);
        setBoxesCount(count);

        const newBoxData = Array.from({ length: count }, (_, index) => boxData[index] || { plan: 'almuerzo', price: 2500, days: 1 });
        setBoxData(newBoxData);
    };

    const handlePlanChange = (event, index) => {
        const newBoxData = [...boxData];
        newBoxData[index].plan = event.target.value;
        newBoxData[index].price = calcularPrecioPlan(event.target.value);
        setBoxData(newBoxData);
    };

    const handleDaysChange = (event, index) => {
        const newBoxData = [...boxData];
        newBoxData[index].days = parseInt(event.target.value);
        newBoxData[index].price = calcularPrecioPlan(newBoxData[index].plan) * newBoxData[index].days;
        setBoxData(newBoxData);
    };

    const calcularPrecioPlan = (plan) => {
        switch (plan) {
            case 'almuerzo':
                return 2500;
            case 'almuerzo-cena':
                return 4500;
            case 'almuerzo-cena-desayuno-merienda':
                return 6500;
            default:
                return 0;
        }
    };

    const calcularPrecioTotal = () => {
        const total = boxData.reduce((sum, box) => sum + box.price, 0);
        setTotalPrice(total);
    };

    return (
        <div className='bodyPlanes'>
            <div className='calcularPlanes' >
                <h2 className='tituloPlanes'> Cotiza tus planes según tus necesidades</h2>
                <div>
                    <label htmlFor="boxesCount"> Cantidad de boxes:</label>
                    <input className='cantidadBoxes' type="number" id="boxesCount" min="1" value={boxesCount} onChange={handleBoxesCountChange} />
                </div>

                {
                    boxData.map((box, index) => (
                        <div key={index}>
                            <h3 className='numeroBox'>Box {index + 1}</h3>
                            <label className='labelPlanes' htmlFor={`plan-${index}`}>Selecciona el plan:</label>
                            <select className='cantidadBoxes' id={`plan-${index}`} value={box.plan} onChange={(e) => handlePlanChange(e, index)}>
                                <option value="almuerzo">Almuerzo $2500</option>
                                <option value="almuerzo-cena">Almuerzo - Cena $4500</option>
                                <option value="almuerzo-cena-desayuno-merienda">Almuerzo - Cena - Desayuno - Merienda $6500</option>
                            </select>

                            <label className='labelPlanes' htmlFor={`days-${index}`}>Cantidad de días a la semana:</label>
                            <input className='cantidadBoxes' type="number" id={`days-${index}`} min="1" value={box.days} onChange={(e) => handleDaysChange(e, index)} />
                        </div>
                    ))
                }

                <button className='botonPlanes' onClick={calcularPrecioTotal}>Calcular</button>
                <div>
                    <h3> Cotización total: ${totalPrice}</h3>
                </div>
            </div >
        </div>
    );
};

export default CalculadoraPlan;
