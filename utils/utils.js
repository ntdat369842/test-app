let add = (a, b) => a + b;
let asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};
let square = a => a * a;
let asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
}
let setName = (userObj, fullName) => {
    let names = fullName.split(' ');
    userObj.firstName = names[0];
    userObj.lastName = names[1];

    return userObj;
}

module.exports = {
    add,
    asyncAdd,
    square,
    asyncSquare,
    setName
}