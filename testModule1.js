const login = (user) => {
    if (user && "id" in user) {
        return true;
    } return false;
}

module.exports = { login };