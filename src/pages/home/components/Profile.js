import MenuButton from "./MenuButton";
const Profile = ({ state, changeMenuActive }) => {
  return (
    <div className="relative profile-and-menu max-w-screen-lg w-full mx-auto from-gray-800 to-gray-900 bg-gradient-to-b shadow-2xl overflow-hidden">
      <div className="profile-avatar py-10 sm:flex sm:items-center w-full">
        <div className="avatar-box sm:ml-20 flex justify-center">
          <div className="avatar mt-2 p-1 w-48 h-48 sm:w-64 sm:h-64 overflow-hidden bg-gradient-to-br from-yellow-700 via-yellow-400 to-yellow-700 rounded-full">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img
                src={state.profile.default_avatar}
                srcSet={state.profile.default_avatar} // For lighthouse best practice rating
                alt="default_avatar"
                width="100%"
                height="100%"
              />
              {/* ↑ Default avatar */}
              <img
                className="absolute top-0 left-0"
                src={state.profile.avatar}
                srcSet="" // For lighthouse best practice rating
                alt="avatar"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="profile-name-jobtitle mt-5 sm:ml-20 text-center sm:text-left">
          <div className="Name text-4xl font-bold">
            {state.profile.name}{" "}
            <span className="text-2xl">{state.profile.age}</span>
            {state.profile.isBirthday && <span> &#x1F382;</span>}
          </div>
          <div className="Job title text-xl sm:text-2xl">
            {state.profile.job}
          </div>
        </div>
      </div>
      {state.profile.status ? (
        <div className="STATUS absolute bg-gradient-to-r from-green-500 to-blue-500 top-6 sm:top-9 -right-20 sm:-right-16 transform rotate-45 w-64 shadow-2xl">
          <div className="text-gray-200 w-full text-center bg-gradient-to-r from-gray-800 to-gray-700 m-0.5 py-1 text-2xl font-bold">
            {state.profile.status}
          </div>
        </div>
      ) : (
        ""
      )}
      <MenuButton state={state} changeMenuActive={changeMenuActive} />
    </div>
  );
};

export default Profile;
