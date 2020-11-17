import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const EventCard = (props) => {
const { event } = props
    return (
        <div>
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