import{ useState } from 'react';
import axios from 'axios';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts`, {
        title,
        content,
        userName: 'Seu Nome Aqui', // Substitua pelo nome real do usuário, se aplicável
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Limpar o formulário e mostrar sucesso
      setTitle('');
      setContent('');
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="create-post">
      <h2>Criar Postagem</h2>
      {success && <p>Postagem criada com sucesso!</p>}
      {error && <p>Erro: {error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Conteúdo:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Criar Postagem</button>
      </form>
    </div>
  );
};

export default CreatePost;