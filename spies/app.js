const db = require('./db');

let handleSignUp = (email, password) => {
    db.saveUser({email, password});
};

module.exports = {
    handleSignUp
}