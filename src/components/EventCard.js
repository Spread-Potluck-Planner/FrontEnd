import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';

const EventCard = (props) => {
const {push} = useHistory()
const { event } = props
    return (
        <div onClick={() => push(`/events/${props.event.event_id}`)}>
            <Card className='shadow event-card'>
                <CardImg src="sample" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{event.event_name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
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