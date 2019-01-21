const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Tad', 20);
        expect(spy).toHaveBeenCalledWith('Tad', 20);
    });

    it('should call user with userObj', () => {
        let email = 'Tad Doe';
        let password = '123abc';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

})