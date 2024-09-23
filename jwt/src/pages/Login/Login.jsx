import './Login.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
	const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


	const handleLogin = async(email, password) => {
		console.log('Login -> Email:', email, 'Password:', password);
    try {
			const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
				email,
				password,
			});
	
			// Armazenar o token JWT no localStorage
			localStorage.setItem('token', response.data.token);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			
			console.log('Login bem-sucedido:', response.data);
			console.log('Navegando para o Dashboard');
			
			navigate('/dashboard');
	
		} catch (error) {
			console.error('Erro ao fazer login:', error.response?.data || error.message);
			const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Tente novamente.';
			setErrorMessage(errorMessage);
		}
  };

  return ( 
		<div className='login'>
			<AuthForm
				title="Login"
				buttonText="Login"
				linkText="Cadastre-se"
				linkTo="/register"
				onSubmit={handleLogin}
				showConfirmPassword={false}
			/>

		{errorMessage && <p className="error-message">{errorMessage}</p>}
		</div>
  );
};

export default Login;