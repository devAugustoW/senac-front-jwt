import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Criação do Contexto de Autenticação
const AuthContext = createContext();

// Provedor de Autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

	// Função de Login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

	// Função de Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };

	// Retorna o Provedor com os valores do contexto
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para Utilizar o Contexto de Autenticação
export const useAuth = () => useContext(AuthContext);