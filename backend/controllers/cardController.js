const Card = require('../models/card');

// Create a new card
const createCard = async (req, res) => {
    try {
        const { title, description, link } = req.body;
        const card = new Card({ title, description, link });
        await card.save();
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all cards
const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get card by title
const getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCard, getAllCards, getCardByTitle };
