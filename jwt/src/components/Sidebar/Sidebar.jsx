import './Sidebar.css'; 
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
			<li><Link className="sidebar-link" to="/create-post">Criar Postagem</Link></li>
        <li><Link className="sidebar-link">Log Off</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;