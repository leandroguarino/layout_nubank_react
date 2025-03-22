import { UserInfo } from '../../types';
import './Header.css';

interface HeaderProps {
  userInfo: UserInfo;
}

export const Header = ({ userInfo }: HeaderProps) => {
  return (
    <header className="header">
      <div className="user-section">
        <button className="icon-button">
          <span className="material-icons">person_outline</span>
        </button>
        <div className="header-icons">
          <button className="icon-button">
            <span className="material-icons">visibility</span>
          </button>
          <button className="icon-button">
            <span className="material-icons">help_outline</span>
          </button>
          <button className="icon-button">
            <span className="material-icons">mail_outline</span>
          </button>
        </div>
      </div>
      <h1 className="greeting">Olá, {userInfo.name}!</h1>
    </header>
  );
};
