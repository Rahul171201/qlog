/**
 * Authenticates the current user in the system,
 * if user provides correct userId and password
 * @param {Event} e
 * @param {Map} users
 * @returns
 */
const handleLogin = (e, users) => {
  const userId = +e.target[0].value;
  const password = e.target[1].value;

  let finalUser =
    users.has(userId) && users.get(userId).password === password
      ? users.get(userId)
      : null;

  return finalUser;
};

export default handleLogin;
