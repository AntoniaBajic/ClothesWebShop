//-----------------------------------------------------------------
// Faking an authentication service
// Source: https://www.gatsbyjs.org/docs/authentication-tutorial
//-----------------------------------------------------------------
export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

// store user info to the local storage (in this way
// user data/info can survive browser reload events)
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  // hardcoded user John Doe
  if (username === `antonia@gmail.com` && password === `lozinka`) {
    setUser({
      username: `antonia@gmail.com`,
      name: `John Doe`,
      email: `johndoe@fesb.hr`
    });

    return {
      error: false
    };
  }

  return {
    error: true,
    message: 'Invalid, try "antonia@gmail.com" & "lozinka"'
  };
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const handleLogout = callback => {
  setUser({});
  callback && callback();
};
