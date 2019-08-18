const express = require('express');

const router = express.Router();

const Actions = require('../data/helpers/actionModel.js');

// Get all actions
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({
            error: "The action information could not be retrieved."
        });
    }
});

// Get action by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const action = await Actions.get(id);
        res.status(200).json(action)
    } catch (error) {
        res.status(500).json({
            error: "The action information could not be retrieved."
        });
    }
})

// Create a new action
router.post('/', async (req, res) => {
    try {
        const actionData = req.body;
        const newAction = await Actions.insert(actionData);
        res.status(201).json(newAction);
    } catch (error) {
        res.status(500).json({
            error: "There was an error while saving the action to the database"
        });
    }
})

// Update an existing action
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const updatedAction = await Actions.update( id, changes );
        res.status(202).json(updatedAction);
    } catch (error) {
        res.status(500).json({
            error: "The action information could not be modified."
        });
    }
})

// Delete action
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAction = await Actions.remove(id);
        res.status(204).json(deletedAction)
    } catch (error) {
        res.status(500).json({
            error: "The action could not be removed"
        });
    }
});



module.exports = router;