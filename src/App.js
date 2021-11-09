import { Fragment } from "react/cjs/react.production.min";
import Profile from "./components/Profile";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { getProfile } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    const fetchProfile = () => {
      fetch("http://localhost:3000/demo.json")
        .then((response) => response.json())
        .then((data) => getProfile(data))
        .catch((error) => console.error("ErrorRRR:", error));
    };
    fetchProfile();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const state = useSelector((state) => state.profile);
  return (
    <Fragment>
      <Profile state={state} />
      <div className="max-w-screen-lg w-full mx-auto mb-6">
        <div className="relative content w-full bg-gray-400 h-56 bg-no-repeat bg-center">
          <div className="absolute backdrop-filter backdrop-brightness-25 backdrop-contrast-100 backdrop-blur-xs w-full h-full p-4  border-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
