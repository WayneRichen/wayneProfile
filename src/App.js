import { Fragment } from "react/cjs/react.production.min";
import "./App.css";

function App() {
  return (
    <Fragment>
    <div className="main max-w-screen-lg w-full mx-auto items-center from-gray-800 to-gray-900 bg-gradient-to-b shadow-2xl">
      <div className="flex flex-row p-10">
        <div className="avatar p-1 w-16 h-16 md:w-64 md:h-64 overflow-hidden bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-700 rounded-full">
          <div className="w-full h-full bg-white rounded-full overflow-hidden border-solid border-1 border-yellow-700">
            <img className="" src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Ahri_0.jpg" />
          </div>
        </div>
        <div>
          <div className="h-full ml-20 flex items-center">
            <div className="">
              <div className="Name text-base md:text-4xl">Wayne Richen 22</div>
              <div className="Job title text-base md:text-2xl">Web developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Skill area flex p-1">
        <button className="btn flex-1 m-1 bg-gray-800 hover:bg-gray-700 text-tan text-2xl font-black border-b-2 border-gray-400">
          開發技能
        </button>
        <button className="btn flex-1 m-1 bg-gray-800 hover:bg-gray-700 text-tan text-2xl font-black border-gray-400">
          維運技能
        </button>
        <button className="btn flex-1 m-1 bg-gray-800 hover:bg-gray-700 text-tan text-2xl font-black border-gray-400">
          性格描述
        </button>
        <button className="btn flex-1 m-1 bg-gray-800 hover:bg-gray-700 text-tan text-2xl font-black border-gray-400">
          開發技能
        </button>
      </div>
    </div>
    <div className="max-w-screen-lg w-full mx-auto mb-6">
      <div className="relative content w-full bg-gray-400 h-56 bg-no-repeat bg-center">
        <div className="absolute backdrop-filter backdrop-brightness-25 backdrop-contrast-100 backdrop-blur-xs w-full h-full p-4  border-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
