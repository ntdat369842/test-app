const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
        });
    
        it('should async add two number', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            let res = utils.square(8);
    
            expect(res).toBe(64).toBeA('number');
        });
    
        it('should async square a number', (done) => {
            utils.asyncSquare(5, (square) => {
                expect(square).toBe(25).toBeA('number');
                done();
            })
        })
    });
});


it('should verify last and first name are set', () => {
    let user = utils.setName({
        age: 19,
        location: 'vn'
    }, 'Sazerac Absinthe');

    expect(user)
        .toInclude({
            firstName: 'Sazerac',
            lastName: 'Absinthe'
        });
});