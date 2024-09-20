import './Login.css';
import AuthForm from '../../components/AuthForm/AuthForm';


const Login = () => {
	const handleLogin = (email, password) => {
    console.log('Email:', email, 'Password:', password);
    // Adicione a lógica de login aqui
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
		</div>
  );
};

export default Login;