import React from 'react'
import Artwork from './Artwork';

const ArtworkList = (props) => {
    return (
        <div className="artwork-list">
            {
                props.artworks.map((artwork, i) => <Artwork upvote={() => props.upvote(artwork.id)} key={i} image={artwork.image} votes={artwork.votes} title={artwork.title} date={artwork.date} slug={artwork.slug} />)
            }
        </div>
    )
}

export default ArtworkList