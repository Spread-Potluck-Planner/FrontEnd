import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import food_logo from '../assets/food_img.jpg'

const EventCard = (props) => {
const {push} = useHistory()
const { event } = props
    return (
        <div onClick={() => push(`/events/${props.event.event_id}`)}>
            <Card className='shadow event-card'>
                <CardImg src={food_logo} alt="Card image cap" />
                <CardBody>
                    <div id='share-container'>
                        <Button color='primary' size="sm">Share</Button>
                    </div>
                    <CardTitle tag="h5">{event.event_name}</CardTitle>
                    
                    <CardText>{event.description}</CardText>
                    <div className='event-card-btn'>
                        <Button color='primary' size="sm">See Who's Coming</Button>
                        <Button size="sm">Edit Event</Button>
                    </div>
                    </CardBody>
            </Card>
        </div>

      );
}
 
export default EventCard;