const express = require('express');
const router = express.Router();
const { fetchEvents, addEvent, deleteEvent } = require('../controller/eventController');

// get up coming google calendar events (one week)
router.get('/upcoming-events', fetchEvents);

// add event to google calendar
router.post('/add', addEvent);

// delete event
router.delete('/:id', deleteEvent);

module.exports = router;