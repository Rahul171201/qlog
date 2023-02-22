import users from "../data/users";

const handleLogin = (e) => {
  // flag to know if the user is found in this function
  let currentFlag = false;
  let finalUser = undefined;
  e.preventDefault();

  const userId = +e.target[0].value;
  const password = e.target[1].value;

  users.forEach((u) => {
    if (u.userId === userId && u.password === password) {
      finalUser = u;
      currentFlag = true;
    }
  });

  if (!currentFlag) {
    alert("Wrong username or password");
  }

  return finalUser;
};

export default handleLogin;
