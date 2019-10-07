import React from 'react'

const Painting = ({ title, image, slug }) => {
    return (
        <div className="painting-card">
            <h2>{title}</h2>
            <p>{slug}</p>
            <img alt="painting" src={image} />
        </div>
    )
}

export default Painting
