import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Card from '../../components/Card/Card';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        setPosts(response.data);
        setError(null); // Limpar erro ao obter dados com sucesso

      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);

      } finally {
        setLoading(false);

      }
    };

    fetchPosts();
  }, []);


  return (
    <div className="dashboard">
      <main className='dashboardContent'>
        <h2 className='dashboardTitle'>Conteúdo do Dashboard</h2>
        {loading && <p>Carregando postagens...</p>}
        {error && <p>Erro: {error}</p>}

        <div className="posts">
          {posts.map(post => (
            <Card 
              key={post._id} 
              title={post.title} 
              userName={post.userName} 
              content={post.content} 
              createdAt={post.createdAt} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;