const initSkill = {
  develop: {
    active: 0,
    skill: [{ title: "", img: "http", content: "哎呀！發生問題！" }],
  },
  operation: {
    active: 0,
    skill: [{ title: "", img: "http", content: "哎呀！發生問題！" }],
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
