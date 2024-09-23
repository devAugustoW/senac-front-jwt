import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';


const Register = () => {
	const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const navigate = useNavigate();


	const handleRegister = async(name, email, password) => {
		try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/createUser`, {
        name,
        email,
        password
      });

			if (response.status === 201 || response.status === 200) {
				setModalMessage('Usuário cadastrado com sucesso!');
				setIsModalOpen(true);
				setIsSuccess(true);
			} else {
				setModalMessage('Erro ao cadastrar o usuário. Tente novamente.');
				setIsModalOpen(true);
				setIsSuccess(false);
			}

		} catch (error) {
			console.error('Erro ao cadastrar o usuário:', error.response?.data || error.message);

			const errorMessage = error.response?.data?.message || 'Erro ao cadastrar o usuário. Tente novamente.';
			setModalMessage(errorMessage);
			setIsModalOpen(true);
			setIsSuccess(false);
    }
  };

	const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    navigate('/'); // Redireciona após o sucesso
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
			{isModalOpen && (
        <Modal 
          message={modalMessage} 
          onClose={closeModal} 
          onSuccess={isSuccess ? handleSuccess : null} 
        />
      )}
		</div>
  );
}

export default Register;