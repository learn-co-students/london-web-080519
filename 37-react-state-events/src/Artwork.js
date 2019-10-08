import React from 'react'

class Artwork extends React.Component {
    render() {
        const { title, date, votes, image, slug, upvote } = this.props
        return (
            <div className="artwork">
                <h2>{title}</h2>
                <p>Date: {date}</p>
                <p>Votes: {votes} <button onClick={upvote}>+</button></p>
                <img src={image} />
                <a style={{ display: 'block' }} href={slug}>Link</a>
            </div>
        )
    }
}

export default Artwork