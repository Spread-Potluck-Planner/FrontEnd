import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap';
import {useParams, useHistory} from 'react-router-dom'
import Navigation from '../components/Navigation'
import {fetchEvent} from '../actions/userActions'
import classnames from 'classnames'
// import {fetchGuests} from '../actions/userActions'
import '../styling/SinglePotluck.css'

export default function EditPotluck() {
    const event = useSelector(state => state.eventState);
    console.log(event)
    const dispatch = useDispatch()
    // const guests = useSelector(state => state.guestsState)
    const [activeTab, setActiveTab] = useState('1');
    const {id} = useParams()
    const {push} = useHistory()
    const eventDate = new Date(event.date).toUTCString().split('').splice(0,17).join('')

    useEffect(() => {
        dispatch(fetchEvent(id))
        // dispatch(fetchGuests(id))
    }, [])

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab)
    }
    
    return (
        <div className='dashboard'>
            <Navigation />
            <div className='single-page-potluck'>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{event.event_name.charAt(0).toUpperCase() + event.event_name.slice(1)}</CardTitle>
                </CardBody>
                <img width="100%" src="../assets/logo.png" alt="Card image cap" />
                <CardBody>
                    <CardText>
                        Location: {
                        event.address 
                        + ', ' + 
                        event.city.charAt(0).toUpperCase() + event.city.slice(1)
                        + ', ' + 
                        event.state.charAt(0).toUpperCase() + event.state.slice(1)
                        }   
                    </CardText>
                    <CardText>
                        Date: {
                        event.time 
                        + ' ' +
                        eventDate
                        }
                    </CardText>
                </CardBody>
                <Button type='button' onClick={ () => <EditPotluck /> } color='danger'>Edit</Button>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: activeTab === '1'})}
                        onClick={() => { toggle('1'); }}
                        >
                            Guests
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: activeTab === '2'})}
                        onClick={() => { toggle('2'); }}        
                        >
                            Description
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='1' >
                        <Row>
                            <Col sm='12'>
                            <h4>Guests:</h4>
                            {event.guests.map(guest => {
                                return <p key={guest.user_id}>{guest.full_name.charAt(0).toUpperCase() + guest.full_name.slice(1)} 
                                {/* dont know if this will work but can't test it */}
                                {typeof event.recipes !== 'undefined' && event.recipes.filter(recipe => {
                                    if(guest.user_id === recipe.user_id){
                                        return <p>{':' + recipe}</p>
                                    }
                                })}</p>
                            })}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                        <Row>
                            <Col sm='12'>
                                <h4>Description:</h4>
                                <p>{event.description}</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Card>
                {/* <h2>{event.event_name.charAt(0).toUpperCase() + event.event_name.slice(1)}</h2>
                <h4>
                    Location: {
                    event.address 
                    + ', ' + 
                    event.city.charAt(0).toUpperCase() + event.city.slice(1)
                    + ', ' + 
                    event.state.charAt(0).toUpperCase() + event.state.slice(1)
                    }
                </h4>
                <h4>
                    Date: {
                    event.time 
                    + ' ' +
                    eventDate
                    }
                </h4> */}
            </div>
        </div>
    )
}