const validPass = (password) => {
  if(password.length >= 8) {
    return true;
  }
  return false;
}

module.exports = { validPass };