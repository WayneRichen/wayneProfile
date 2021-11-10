const Profile = ({ state }) => {
  return (
    <div className="profile-and-menu max-w-screen-lg w-full mx-auto from-gray-800 to-gray-900 bg-gradient-to-b shadow-2xl">
      <div className="profile-avatar py-10 sm:flex sm:items-center w-full">
        <div className="avatar-box sm:ml-20 flex justify-center">
          <div className="avatar mt-2 p-1 w-48 h-48 sm:w-64 sm:h-64 overflow-hidden bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-700 rounded-full">
            <div className="w-full h-full rounded-full overflow-hidden" style={{backgroundImage: `url(${state.avatar})`, backgroundSize: `contain`}}>
              {/* <img
                alt="avatar"
                src={state.avatar}
              /> */}
            </div>
          </div>
        </div>
        <div className="profile-name-jobtitle mt-5 sm:ml-20 text-center sm:text-left">
          <div className="Name text-4xl font-black">
            {state.name} <span className="text-2xl">{state.birthday}</span>
          </div>
          <div className="Job title text-xl sm:text-2xl">{state.job}</div>
        </div>
      </div>
      <div className="Skill area hidden sm:flex p-1">
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
  );
};

export default Profile;
