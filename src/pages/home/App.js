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
    fetch(process.env.REACT_APP_GET_DATA_API)
      .then((response) => response.json())
      .then((data) => {
        getProfile(data.profile);
        getSkill(data.content);
        changeMenuActive(data.menu);
      })
      .catch((error) => console.error("Error:", error));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //↑確定要這麼做 React 官方說可以 https://zh-hant.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  const state = useSelector((state) => state);

  return (
    <Fragment>
      <Profile state={state} changeMenuActive={changeMenuActive} />
      <Content state={state} changeSkillActive={changeSkillActive} />
    </Fragment>
  );
}

export default App;
