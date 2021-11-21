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

  let content;
  switch (state.menu.active) {
    case "開發技能":
    case "維運技能":
      content = (
        <div className="grid grid-cols-2 h-full divide-x divide-white">
          <div className="grid grid-cols-4 sm:grid-cols-7 h-0 mr-0.5 sm:mr-1">
            {skillTab().skill.map((skill, index) => (
              <div
                className="skillicon"
                key={skill.title}
                onClick={() => {
                  active(index);
                }}
              >
                <div className="skilliconchild">
                  <img
                    alt={skill.title}
                    src={skill.img}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="px-4">
            <p>{skillTab().skill[skillTab().active].content}</p>
          </div>
        </div>
      );
      break;
    case "性格描述":
      content = (<p>{state.content.personality}</p>);
      break;
    case "作品集":
      content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="card-image-box">
            <div className="card-image">
              <img className="object-cover w-full h-full" src="https://i.imgur.com/uc3xT85.png" width="100%" height="100%" />
            </div>
          </div>
          <div className="w-2/3 p-2 px-5">
            <div className="title font-bold text-xl">
            What is Lorem Ipsum?  
            </div>
            <div className="des overflow-ellipsis h-22 overflow-hidden text-gray-300 mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image-box">
            <div className="card-image">
              <img className="object-cover w-full h-full" src="https://i.imgur.com/uc3xT85.png" width="100%" height="100%" />
            </div>
          </div>
          <div className="w-2/3 p-2 px-5">
            <div className="title font-bold text-xl">
            What is Lorem Ipsum?  
            </div>
            <div className="des overflow-ellipsis h-22 overflow-hidden text-gray-300 mt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
      </div>)
      break;
    default:
      break;
  }

  return (
    <div className="max-w-screen-lg w-full mx-auto mb-6">
      <div className="relative content w-full bg-gray-400 h-56 bg-no-repeat bg-center">
        <div className="backdrop-filter backdrop-brightness-25 backdrop-contrast-100 backdrop-blur-xs w-full h-full p-1 sm:p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
