const Event = require('../models/event');

// Function to get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get a single event by ID
const getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to create a new event
const createEvent = async (req, res) => {
    const { action, added, changed, deleted } = req.body;

    try {
        if (action === "insert" || (action === "batch" && added != null)) {
            const value = (action === "insert") ? req.body.value : added[0];
            const startTime = new Date(value.StartTime);
            const endTime = new Date(value.EndTime);

            const newEvent = await Event.create({
                StartTime: startTime,
                EndTime: endTime,
                Subject: value.Subject,
                // IsAllDay: value.IsAllDay,
                // StartTimezone: value.StartTimezone,
                // EndTimezone: value.EndTimezone,
                RecurrenceRule: value.RecurrenceRule,
                RecurrenceID: value.RecurrenceID,
                RecurrenceException: value.RecurrenceException
            });

            res.status(201).json(newEvent);
        } else {
            res.status(400).json({ error: 'Invalid action or data for event creation' });
        }
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Error creating event' });
    }
};

// Function to delete an event by ID
const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to update an event by ID
const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
