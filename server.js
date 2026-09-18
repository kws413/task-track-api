const express = require('express');
const app = express();
const PORT = 3000;

let projects = [];
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

app.post('/projects', (req, res) => {
    const { name, description } = req.body;
    const project = { id: nextId++, name, description };
    projects.push(project);
    res.status(201).json(project);
});

app.listen(PORT, () => {   
    console.log(`Server running on http://localhost:${PORT}`);
});