const handleLogin = (e, users) => {
  e.preventDefault();
  const userId = +e.target[0].value;
  const password = e.target[1].value;

  let finalUser =
    users.has(userId) && users.get(userId).password === password
      ? users.get(userId)
      : undefined;

  if (!finalUser) {
    alert("Wrong username or password");
  }

  return finalUser;
};

export default handleLogin;
