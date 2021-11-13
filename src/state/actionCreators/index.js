export const getProfile = (profile) => {
  profile.age = getAge(profile.birthday);
  profile.isBirthday = isBirthday(profile.birthday);
  return (dispatch) => {
    dispatch({
      type: "getProfile",
      data: profile,
    });
  };
};

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
