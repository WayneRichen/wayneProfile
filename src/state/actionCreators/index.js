import defaultavatar from "../../images/defaultAvatar.png";

export const getProfile = (profile) => {
  profile.age = getAge(profile.birthday);
  profile.isBirthday = isBirthday(profile.birthday);
  profile.default_avatar = defaultavatar;
  return (dispatch) => {
    dispatch({
      type: "getProfile",
      data: profile,
    });
  };
};

export const changeMenuActive = (menu) => {
  return (dispatch) => {
    dispatch({
      type: "change_menu_active",
      data: menu,
    });
  };
};

export const getSkill = (skill) => {
  return (dispatch) => {
    dispatch({
      type: "getSkill",
      data: skill,
    });
  };
};

export const changeSkillActive = (skill) => {
  return (dispatch) => {
    dispatch({
      type: "change_skill_active",
      data: skill
    })
  }
}

function getAge(birthday) {
  let today = new Date();
  let birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function isBirthday(birthday) {
  let today = new Date();
  let birthDate = new Date(birthday);
  if (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate()
  ) {
    return true;
  }
  return false;
}
