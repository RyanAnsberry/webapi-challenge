const express = require('express');

const router = express.Router();

const Projects = require('../data/helpers/projectModel');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            error: "The project information could not be retrieved."
        });
    }
});

// Get project by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Projects.get(id);
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({
            error: "The project information could not be retrieved."
        });
    }
})

// Create a new project
router.post('/', async (req, res) => {
    try {
        const projectData = req.body;
        const newProject = await Projects.insert(projectData);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({
            error: "There was an error while saving the project to the database"
        });
    }
})

// Update an existing project
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const changes = req.body;
        const updatedProject = await Projects.update( id, changes );
        res.status(202).json(updatedProject);
    } catch (error) {
        res.status(500).json({
            error: "The project information could not be modified."
        });
    }
})

// Delete project
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProject = await Projects.remove(id);
        res.status(204).json(deletedProject)
    } catch (error) {
        res.status(500).json({
            error: "The project could not be removed"
        });
    }
});

// Get project actions
router.get('/:id/actions', async (req, res) => {
    try {
        const { id } = req.params;
        const projectActions = await Projects.getProjectActions(id);
        res.status(200).json(projectActions);
    } catch (error) {
        res.status(500).json({
            error: "Failed to retrieve project's actions."
        });
    }
})


module.exports = router;