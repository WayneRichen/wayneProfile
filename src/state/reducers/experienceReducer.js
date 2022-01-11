const initExperience = {
  title: "Experience",
  history: [],
};
const reducer = (experience = initExperience, action) => {
  switch (action.type) {
    case "get_experience":
      return action.data;
    default:
      return experience;
  }
};

export default reducer;
