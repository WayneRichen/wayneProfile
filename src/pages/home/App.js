import { Fragment } from "react/cjs/react.production.min";
import Profile from "./components/Profile";
import Content from "./components/Content";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { getProfile, changeMenuActive, getSkill, changeSkillActive } =
    bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    fetch("/demo.json")
      .then((response) => response.json())
      .then((data) => getProfile(data))
      .catch((error) => console.error("Error:", error));
    fetch("/skill.json")
      .then((response) => response.json())
      .then((data) => getSkill(data))
      .catch((error) => console.error("Error:", error));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //↑確定要這麼做 React 官方說可以 https://zh-hant.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  const state = useSelector((state) => state);

  // let a = {"menu":["開發技能","維運技能"],"content":[{"items":[{"title":"aws","img":"img.jpg","active":true},{"title":"aws2","img":"img2.jpg","active":false}]},{"title":"linux","img":"pingu.jpg"}]}

  return (
    <Fragment>
      <Profile state={state} changeMenuActive={changeMenuActive} />
      <Content state={state} changeSkillActive={changeSkillActive} />
    </Fragment>
  );
}

export default App;
