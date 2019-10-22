import React from 'react'
import { Card, Icon, Checkbox, Button, Image } from 'semantic-ui-react';

const hogNameToImagePath = (name) => {
    return `./hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`
}

const frontExtra = (props, onClick) =>
    <Button primary fluid onClick={onClick} >Show hog details</Button>



const backExtra = (props, hideDetails, onCheckboxChange) => (<>
    <Button secondary fluid onClick={hideDetails} >Hide hog details</Button>
    <Card.Content>
        <Icon name='winner' />
        {props["highest medal achieved"]}
    </Card.Content>
    <Card.Content>
        <Icon name='star' />
        {props["specialty"]}
    </Card.Content>
    <Card.Content>
        <Icon name='weight' />
        {props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
    </Card.Content>
    <Card.Content>
        <Checkbox
            label='Greased'
            onChange={onCheckboxChange}
            checked={props.greased}
        />
    </Card.Content>
    <Button negative onClick={props.hideHog} >Hide this hog</Button>
</>)

class HogCard extends React.Component {

    state = {
        front: true
    }

    render = () => {
        const { name, specialty } = this.props
        return (

            <Card
                header={name}
                meta={specialty}
            >
                <Image src={hogNameToImagePath(name)} wrapped ui={false} />
                {
                    this.state.front ? frontExtra(this.props, () => this.setState({ front: false })) : backExtra(this.props, () => this.setState({ front: true }), this.props.toggleGreased)
                }
            </Card>
        )
    }
}

export default HogCard
