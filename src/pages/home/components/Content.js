import "./Content.css";
const Content = ({ state, changeSkillActive }) => {
  // console.log(state)
  function skillTab() {
    switch (state.menu.active) {
      case "開發技能":
        return state.content.develop;
      case "維運技能":
        return state.content.operation;
      case "性格描述":
        break;
      case "作品集":
        break;
      default:
        break;
    }
  }

  function active(index) {
    const newActiveSkill = Object.assign({}, state.content);
    switch (state.menu.active) {
      case "開發技能":
        newActiveSkill.develop.active = index;
        changeSkillActive(newActiveSkill);
        break;
      case "維運技能":
        // console.log(state);
        newActiveSkill.operation.active = index;
        changeSkillActive(newActiveSkill);
        break;
      case "性格描述":
        break;
      case "作品集":
        break;
      default:
        break;
    }
  }

  return (
    <div className="max-w-screen-lg w-full mx-auto mb-6">
      <div className="relative content w-full bg-gray-400 h-56 bg-no-repeat bg-center">
        <div className="backdrop-filter backdrop-brightness-25 backdrop-contrast-100 backdrop-blur-xs w-full h-full p-1 sm:p-4">
          <div className="grid grid-cols-2 h-full divide-x divide-white">
            <div className="grid grid-cols-4 sm:grid-cols-7 h-0 mr-0.5 sm:mr-1">
              {skillTab().skill.map((skill, index) => (
                <div className="skillicon" key={skill.title}>
                  <div className="skilliconchild">
                    <img
                      alt={skill.title}
                      src={skill.img}
                      width="100%"
                      height="100%"
                      onClick={() => {
                        active(index);
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* {console.log(skillTab())} */}
            </div>
            <div className="px-4">
              <p>{skillTab().skill[skillTab().active].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
