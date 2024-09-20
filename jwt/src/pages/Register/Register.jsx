import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';


const Register = () => {
	const navigate = useNavigate();

	const handleRegister = async(name, email, password) => {
		try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/createUser`, {
        name,
        email,
        password
      });

			console.log('Usuário cadastrado com sucesso:', response.data);
			navigate('/'); 

    } catch (error) {
			console.error('Erro ao cadastrar o usuário:', error.response?.data || error.message);
      
      if (error.response && error.response.data) {
        console.log('Detalhes do erro:', error.response.data);
			}
		}
  };

	return (
		<div className='register'>
			<AuthForm
				title="Register"
				buttonText="Register"
				linkText="Login"
				linkTo="/"
				onSubmit={handleRegister}
				isRegister={true}
    	/>
		</div>
  );
}

export default Register;