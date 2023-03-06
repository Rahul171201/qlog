/**
 * Adds a new user to the database if registration successful
 * @param {Event} e
 * @param {Map} registeredUsers
 * @returns
 */
const handleRegister = (e, registeredUsers) => {
  e.preventDefault();

  const email = e.target[0].value;
  const userName = e.target[1].value;
  const password = e.target[2].value;
  const confirmPassword = e.target[3].value;
  let total_users = registeredUsers.size;

  // check if same email already exists
  let sameEmail = false;
  for (let obj of registeredUsers) {
    const user = registeredUsers.get(obj[0]);
    if (user.email === email) {
      sameEmail = true;
      break;
    }
  }

  if (sameEmail) {
    return registeredUsers;
  }

  if (password === confirmPassword) {
    const finalRegisteredUsers = registeredUsers;
    finalRegisteredUsers.set((total_users + 1) * (total_users + 1), {
      userId: (total_users + 1) * (total_users + 1),
      userName,
      email,
      password,
      asked: [],
      answered: [],
      hasRated: [],
      hasUpvoted: [],
      hasDownvoted: [],
      profileImage: "/profiles/unknown-user.png",
    });
    return finalRegisteredUsers;
  }
  //  else {
  //   alert("Confirm password must match password field");
  //   return null;
  // }
  return null;
};

export default handleRegister;
