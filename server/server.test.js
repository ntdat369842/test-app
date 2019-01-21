const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should return Hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.',
                        name: 'Todo app'
                    })
                })
                .end(done);
        });
    })
    
    describe('GET /users', () => {
        it('should return an array of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body)
                        .toBeAn('array')
                        .toInclude({
                            name: 'John Doe',
                            age: 26
                        })
                        .toInclude({
                            name:'Jane Doe',
                            age: 21
                        })
                })
                .end(done);
        });
    })
})
