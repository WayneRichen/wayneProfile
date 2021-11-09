export const getProfile = (profile) => {
  return (dispatch) => {
    dispatch({
      type: "getProfile",
      data: profile,
    });
  };
};
