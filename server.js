const express = require('express');
const app = express();
const PORT = 3000;

let projects = [
    { 'name': 'DigiForms',
        'id': 1,
        'description': 'Digital Forms'
    }
];
let nextId = 1;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Tracker API is running');
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.get('/projects', (req, res) => {
    res.json(projects);
});

app.get('/projects/:id', (req, res) => {
    const id = Number(req.params.id);
    const project = projects.find(target => target.id === id);
    console.log(`User requested project with ID: ${id}`);
    res.status(200).json(project);
});

app.put('/projects/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, description } = req.body;
    const project = projects.find(target => target.id === id);
    console.log(`User requested to update project with ID: ${id}`);
    project.description = description;
    project.name = name;
    res.status(200).json(project);
});

app.post('/projects', (req, res) => {
    const { name, description } = req.body;
    const project = { id: nextId++, name, description };
    projects.push(project);
    res.status(201).json(project);
});

app.delete('/projects/:id', (req, res) => {
    const id = Number(req.params.id);
    const projectID = projects.findIndex(target => target.id === id);
    console.log(`User requested to delete project with ID: ${id}`);
    projects.splice(projectID, 1);
    console.log(projects);
    res.status(200);
});

app.listen(PORT, () => {   
    console.log(`Server running on http://localhost:${PORT}`);
});