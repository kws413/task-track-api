const request = require('supertest');
const app = require('../server.js');

describe('Health Endpoints', () => {

    it('GET /health status is ok', async () => {
        return request(app)
            .get('/health')
            .expect(200)
            .then((response) => {
                expect(response.body.status).toBe('OK');
            });
    });
});

describe('Projects Endpoints', () => {

    it('GET /projects returns all projects', async () => {
        return request(app)
            .get('/projects')
            .expect(200)
            .then((response) => {
                expect(response.body).toBeInstanceOf(Array);
            });
    });

    it('POST /projects creates a new project', async () => {
        const newProject = { name: 'New Project', description: 'A new project' };
        return request(app)
            .post('/projects')
            .send(newProject)
            .expect(201)
            .then((response) => {
                expect(response.body.name).toBe(newProject.name);
                expect(response.body.description).toBe(newProject.description);
            });
    });
});
