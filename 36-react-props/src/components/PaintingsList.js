import React from 'react'
import Painting from './Painting';
import artworks from '../artworks'

const PaintingsList = () => {
    return (
        <div className="paintings-list">
            {
                artworks.map(artwork => <Painting {...artwork} />)
            }
        </div>
    )
}

export default PaintingsList
