const menuInit = {
  active: "",
  menuBtns: ["開發技能", "維運技能", "性格描述", "作品集"],
};

const reducer = (menu = menuInit, action) => {
  switch (action.type) {
    case "change_menu_active":
      return action.data;
    default:
      menu.active = menu.active ? menu.active : menu.menuBtns[0];
      return menu;
  }
};

export default reducer;
