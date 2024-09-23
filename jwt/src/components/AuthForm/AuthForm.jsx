import './AuthForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, linkText, linkTo, onSubmit, isRegister }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


	const handleSubmit = (e) => {
    e.preventDefault();
		if (isRegister) {
      onSubmit(name, email, password); // Chama onSubmit com nome para registro
    } else {
      onSubmit(email, password); // Chama onSubmit apenas com email e senha para login
    }
  };


	return (
		<form className="authForm" onSubmit={handleSubmit}>
			<h2 className='authTitle'>{title}</h2>
			{isRegister && (
				<input
					className='authFormInput'
					type="text"
					id="name"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					autoComplete="name"
				/>
			)}
			<input
				className='authFormInput'
				type="email"
				id="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
				autoComplete="email"
			/>
			<input
				className='authFormInput'
				type="password"
				id="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				autoComplete="new-password"
			/>

			<button className='btnSubmit' type="submit">{buttonText}</button>
			<Link className="btnLink" to={linkTo}>{linkText}</Link>
		</form>
	)
}

export default AuthForm;