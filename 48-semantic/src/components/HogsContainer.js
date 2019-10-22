import React from 'react'
import { Card } from 'semantic-ui-react';
import HogCard from './HogCard'

const HogsContainer = ({ hogs, toggleGreased, hideHog }) => {
    return (
        <Card.Group itemsPerRow={3}>
            {
                hogs.map(hog => <HogCard key={hog.name} {...hog} toggleGreased={() => toggleGreased(hog)} hideHog={() => hideHog(hog)} />)
            }
        </Card.Group>
    )
}

export default HogsContainer
