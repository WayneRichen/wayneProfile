const initSkill = {
  develop: {
    active: 0,
    skill: [{ title: "", img: "http", content: "Loading..." }],
  },
  operation: {
    active: 0,
    skill: [{ title: "", img: "http", content: "Loading..." }],
  },
};
const reducer = (skill = initSkill, action) => {
  switch (action.type) {
    case "getSkill":
      return action.data;
    case "change_skill_active":
      return action.data;
    default:
      return skill;
  }
};

export default reducer;
