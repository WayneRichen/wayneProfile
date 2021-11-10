const profileInit = {
  name: "微日成",
  birthday: "1999/09/01",
  job: "網站工程師",
};

const reducer = (profile = profileInit, action) => {
  switch (action.type) {
    case "getProfile":
      return action.data;
    default:
      return profile;
  }
};

export default reducer;