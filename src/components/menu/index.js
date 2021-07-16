import "./styles.scss";

const listMenuItens = [
  {
    id: 1,
    label: "Menu1",
  },
  {
    id: 2,
    label: "Menu2",
  },
  {
    id: 3,
    label: "Menu3",
  },
  {
    id: 4,
    label: "Menu4",
  },
];

const renderMenuItens = (item) => {
  return (
    <li key={item.id}>
      <span>{item.label}</span>
    </li>
  );
};

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <nav className="menu">
        <ul className="menu-label">{listMenuItens.map(renderMenuItens)}</ul>
      </nav>
    </div>
  );
};

export default Menu;
