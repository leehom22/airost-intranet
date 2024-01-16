import './Events.css'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
const { format, parseISO } = require('date-fns');

// Get date-time string for calender
const dateTimeForCalander = (dateStr, timeStr) => {

    let TIMEOFFSET = '+08:00';

     // Parse date and time strings into Date objects
    const parsedDate = parseISO(dateStr, 'yyyy-MM-dd');

    // Format date and time
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    
    let newDateTime = `${formattedDate}T${timeStr}:00${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));

    let startDate = event;

    // Delay in end time is 1
    let endDate = new Date(new Date(startDate).setHours(startDate.getHours()+1));

    return {
        'start': startDate,
        'end': endDate
    }
};

async function fetchEvents() {
    try {
        const response = await fetch('/calendar/upcoming-events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error.message);
    }
}

async function addEvent(event) {
    try {
        const response = await fetch('/calendar/add', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error.message);
    }
}

function Events() {

    const [events, setEvents] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [eventName, setEventName] = useState("");
    const [venue, setVenue] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetchEvents();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleSubmit = async (e) => {

        handleCloseModal();
        e.preventDefault();
        let dateTime = dateTimeForCalander(date, time);

        const event = {
            'summary': eventName,
            'location': venue,
            'start': {
                'dateTime': dateTime['start']
            },
            'end': {
                'dateTime': dateTime['end']
            }
        }

        try {
            const data = await addEvent(event);
            fetchData();
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    }

    async function deleteEvent(eventId) {
        try {
            const response = await fetch('/calendar/' + eventId, {
                method: 'DELETE',
            });
            const data = await response.json();
            fetchData();
            return data;
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    }

    return ( 
        <div className="content">
            <div className="wrap">
                <div className="calendar">
                    {loading && (
                    <div className="spinner-overlay">
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    )}
                    {!loading && <iframe title="airost-events-calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKuala_Lumpur&src=cHpoaXlpbmcwMzA2QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ubWFsYXlzaWEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%2333B679&color=%230B8043" style={{border: 'none'}}></iframe>}
                </div>
                <div className="interactions">
                    <button className="add-events" onClick={handleShowModal}>Add Events</button>
                </div>
                <h4>Upcoming Events</h4>
                {loading && (
                <div className="spinner-overlay">
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
                )}
                {!loading && <div className="upcoming-events">
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Event</th>
                                <th>Venue</th>
                                <th></th>
                            </tr>
                            {events && events.map(event => (

                                <tr key={event.id}>
                                    <td>{event.start.dateTime ? format(parseISO(event.start.dateTime), 'yyyy/MM/dd') : "-"}</td>
                                    <td>{event.start.dateTime ? format(parseISO(event.start.dateTime), 'h:mm a')  : "-"}</td>
                                    <td>{event.summary ? event.summary : "-"}</td>
                                    <td>{event.location ? event.location : "-"}</td>
                                    <td id='delete-td'><button id='delete' onClick={() => deleteEvent(event.id)}>Delete</button></td>
                                </tr>

                            ))}
                        </tbody>
                        
                    </table>
                </div>}
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                            <form className="form" id='userForm' onSubmit={handleSubmit}>
                                <div className="subtitle">Event Info</div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="date" value={date}
                                        onChange={(e) => {setDate(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Date</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="time" value={time}
                                        onChange={(e) => {setTime(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Time</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" value={eventName}
                                        onChange={(e) => {setEventName(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Event Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text"value={venue}
                                        onChange={(e) => {setVenue(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Venue</label>
                                </div>
                            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" form='userForm' className="btn btn-success">Add</button>
                    </Modal.Footer>
                </Modal>
            
        </div>

        
    );
}

export default Events;