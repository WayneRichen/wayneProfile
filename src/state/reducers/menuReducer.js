const menuInit = {
  active: "",
  menuBtns: [],
};

const reducer = (menu = menuInit, action) => {
  switch (action.type) {
    case "change_menu_active":
      return action.data;
    default:
      menu.active = menu.active ? menu.active : 0;
      return menu;
  }
};

export default reducer;
