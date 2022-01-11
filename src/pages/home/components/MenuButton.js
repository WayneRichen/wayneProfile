import "./MenuButton.css";

const MenuButton = ({ state, changeMenuActive }) => {
  function active(menuNo) {
    const newActiveMenu = Object.assign({}, state.menu);
    newActiveMenu.active = menuNo;
    changeMenuActive(newActiveMenu);
  }

  return (
    <div className="Skill area flex">
      {state.menu.menuBtns.map((btn, index) => (
        <button
          key={btn}
          className={
            state.menu.active === index
              ? "menu-btn flex-1 menu-btn-active"
              : "menu-btn flex-1"
          }
          onClick={() => {
            active(index);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default MenuButton;
