import defaultavatar from "../../images/defaultAvatar.png";

const profileInit = {
  name: "Wayne Richen",
  default_avatar: defaultavatar,
  birthday: "1999/09/01",
  job: "Website Engineer",
  status: "",
  socialmedia: [],
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
