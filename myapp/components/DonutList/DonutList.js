'use client'
import React, { useEffect, useState } from 'react';
import DountCard from '../DonutCard/DountCard';
const DonutList = () => {
    const [donuts, setDonuts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/donut')
        .then((response) => response.json())
        .then((data) => setDonuts(data))
        .catch((error) => console.error(error));
    }, []);
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {donuts.map((donut) => (
          <DountCard key={donut.id} donut={donut} />
        ))}
      </div>
    )
    }

export default DonutList