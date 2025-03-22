import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="bottom-nav">
      <button className="nav-button active">
        <span className="material-icons">sync</span>
      </button>
      <button className="nav-button">
        <span className="material-icons">attach_money</span>
      </button>
      <button className="nav-button">
        <span className="material-icons">shopping_bag</span>
      </button>
    </nav>
  );
};
