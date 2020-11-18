import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap';
import {useParams, useHistory} from 'react-router-dom'
import Navigation from '../components/Navigation'
import {fetchEvent} from '../actions/userActions'
import food_logo from '../assets/food_img.jpg'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import classnames from 'classnames'
// import {fetchGuests} from '../actions/userActions'
import '../styling/SinglePotluck.css'

export default function SinglePotluck() {
    const event = useSelector(state => state.eventState);
    console.log('here is the event data', event)
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

    const deleteEvent = () => {
        axiosWithAuth()
            .delete(`https://potluck-planner-bw.herokuapp.com/events/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        push(`/user/${event.organizer_id}`)
    }
    
    return (
        <div className='dashboard'>
            <Navigation />
            <div className='single-page-potluck'>
            <Card>
                <div className='targeting-background-div'>
                    <CardBody className='header-card-body'>
                        <CardTitle tag="h4">{event.event_name.charAt(0).toUpperCase() + event.event_name.slice(1)}</CardTitle>
                    </CardBody>
                    <img src={food_logo} alt="Card image cap" />
                    {/* Key: pk.eyJ1IjoiZXRoYnJhZHNoYXciLCJhIjoiY2tobnNhcXNhMGExczJ5bWlmMnllNjNyYSJ9.9yVsCdIiqTfD8B5xo_WEmQ */}
                    <CardBody>
                        <CardText id='single-event-p'>
                            <span className='event-info-labels'>Location:</span> {
                            event.address 
                            + ', ' + 
                            event.city.charAt(0).toUpperCase() + event.city.slice(1)
                            + ', ' + 
                            event.state.charAt(0).toUpperCase() + event.state.slice(1)
                            }   
                        </CardText>
                        <p className='event-info-border'></p>
                        <CardText id='single-event-p'>
                        <span className='event-info-labels'>Date:</span> {
                            event.time 
                            + ' ' +
                            eventDate
                            }
                        </CardText>
                    </CardBody>
                    <div className='single-page-button'>
                        <Button type='button' id='edit-btn' onClick={ () => push(`/events/edit/${id}`) } color='secondary'>Edit</Button>
                        <Button type='button' id='delete-btn' onClick={ () => deleteEvent() } color='danger' >Delete</Button>
                        <Button type='button' id='back-btn' onClick={ () => push(`/user/${event.organizer_id}`) } color='danger' >Back</Button>
                    </div>
                </div>
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
                            <h6>Guests</h6>
                            {event.guests.map(guest => {
                                return <p key={guest.user_id} id='styled-p-nav'>{guest.full_name.charAt(0).toUpperCase() + guest.full_name.slice(1)} 
                                {/* dont know if this will work but can't test it */}
                                {typeof event.recipes !== 'undefined' && event.recipes.filter(recipe => {
                                    if(guest.user_id === recipe.user_id){
                                        return <p id='styled-p-nav'>{':' + recipe}</p>
                                    }
                                })}</p>
                            })}
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                        <Row>
                            <Col sm='12'>
                                <h6>Description</h6>
                                <p>{event.description}</p>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Card>
            </div>
        </div>
    )
}
