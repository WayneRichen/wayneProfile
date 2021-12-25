import "./Content.css";
import defaulimage from "../../../images/defaultImage.png";
import contentbackground from "../../../images/contentbackground.jpg";
const Content = ({ state, changeSkillActive }) => {
  function skillTab() {
    switch (state.menu.active) {
      case 0:
        return state.content.develop;
      case 1:
        return state.content.operation;
      default:
        break;
    }
  }

  function skillActive(index) {
    const newActiveSkill = Object.assign({}, state.content);
    switch (state.menu.active) {
      case 0:
        newActiveSkill.develop.active = index;
        changeSkillActive(newActiveSkill);
        break;
      case 1:
        newActiveSkill.operation.active = index;
        changeSkillActive(newActiveSkill);
        break;
      default:
        break;
    }
  }

  let content;
  switch (state.menu.active) {
    case 0:
    case 1: //不管是"開發技能"還是"維運技能"都是走這個 case，底下會再判斷
      content = (
        <div className="grid grid-cols-2 h-full divide-x divide-white">
          <div className="grid grid-cols-3 sm:grid-cols-7 h-0 mr-0.5 sm:mr-1">
            {skillTab().skill.map((skill, index) => (
              <div
                className="skillicon"
                key={skill.title}
                onClick={() => {
                  skillActive(index);
                }}
              >
                <div
                  className={
                    skillTab().active === index
                      ? "skilliconchild-active"
                      : "skilliconchild"
                  }
                >
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
            <p className="text-lg font-bold">
              {skillTab().skill[skillTab().active].title}
            </p>
            <p>{skillTab().skill[skillTab().active].content}</p>
          </div>
        </div>
      );
      break;
    case 2:
      content = (
        <div
          className="ml-1"
          dangerouslySetInnerHTML={{ __html: state.content.personality }}
        ></div>
      );
      break;
    case 3:
      content = (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {state.content.portfolio.map((portfolio) => (
            <div
              className="card"
              key={portfolio.title}
              onClick={() => {
                window.open(portfolio.link, "_blank");
              }}
            >
              <div className="card-image-box">
                <div
                  className="card-image w-full h-full bg-auto bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${defaulimage}")` }}
                >
                  <img
                    alt={portfolio.title}
                    className="object-cover w-full h-full"
                    src={portfolio.img}
                    srcSet=""
                    width="100%"
                    height="100%"
                    onError={(event) => {
                      event.target.style = "display: none";
                    }}
                  />
                </div>
              </div>
              <div className="w-2/3 p-2 px-5">
                <div className="title font-bold text-xl">{portfolio.title}</div>
                <div className="des overflow-ellipsis h-22 overflow-hidden text-gray-300 mt-1">
                  {portfolio.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <div className="max-w-screen-lg w-full mx-auto mb-6">
      <div
        className="relative content w-full bg-gray-400 h-72 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${contentbackground})` }}
      >
        <div className="backdrop-filter backdrop-brightness-25 backdrop-contrast-100 backdrop-blur-xs w-full h-full p-1 sm:p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
