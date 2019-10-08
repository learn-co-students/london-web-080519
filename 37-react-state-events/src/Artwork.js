import React from 'react'

class Artwork extends React.Component {
    render() {
        const { title, date, votes, image, slug } = this.props
        return (
            <div>
                <h2>{title}</h2>
                <p>Date: {date}</p>
                <p>Votes: {votes}</p>
                <img src={image} />
                <a href={slug}>Link</a>
            </div>
        )
    }
}

export default Artwork