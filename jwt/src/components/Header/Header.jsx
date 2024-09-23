import './Header.css';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <header className="header">
      <h1 className="header-title">Bem-vindo, {user.name || 'Usuário'}</h1>
    </header>
  );
};

export default Header;