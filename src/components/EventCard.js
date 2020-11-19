import React, {useState} from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button
  } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import ShareButton from './ShareButton'
import food_logo from '../assets/food_img.jpg'

const EventCard = (props) => {
const {push} = useHistory()
const { event } = props
    return (
        
            <Card className='shadow event-card'>
                <CardImg src={food_logo} alt="Card image cap" />
                <CardBody>
                    <div id='share-container'>
                        <ShareButton id={props.event.event_id} />
                    </div>
                    <CardTitle tag="h5">{event.event_name}</CardTitle>
                    <CardText>{event.description}</CardText>
                    <div className='event-card-btn' onClick={() => push(`/events/${props.event.event_id}`)}>
                        <Button color='primary' size="sm">See Who's Coming</Button>
                        <Button size="sm">Edit Event</Button>
                    </div>
                    </CardBody>
            </Card>
        

      );
}
 
export default EventCard;