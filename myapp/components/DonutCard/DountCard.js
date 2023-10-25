'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const DountCard = ({donut}) => {
    const [showDetails, setShowDetails] = useState(false);
    const handleMouseEnter = () => {
        setShowDetails(true);
      };
    
      const handleMouseLeave = () => {
        setShowDetails(false);
      };


  return (
       <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={donut.imageUrl}
        alt={donut.title}
        width={200}
        height={200}
      />
      <div
        className={`${
          showDetails ? 'block' : 'hidden'
        } group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-semibold`}
      >
        <p className="text-center">
          {donut.title} - ${donut.price.toFixed(2)}
        </p>
      </div>
      <Link href={`/donuts/${donut.id}`}>
        <span className="absolute inset-0 z-10"></span>
      </Link>
    </div>
  )
}

export default DountCard