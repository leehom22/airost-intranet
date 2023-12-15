const express = require('express');
const { getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent } = require('../controller/eventController');

const router = express.Router();

// Get all events
router.get('/',  getEvents);

// Get a single event by ID
router.get('/:id',  getEvent);

// Create a new event
router.post('/',  createEvent);

// Delete an event by ID
router.delete('/:id',  deleteEvent);

// Update an event by ID
router.patch('/:id',  updateEvent);

module.exports = router;