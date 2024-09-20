import './AuthForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ title, buttonText, linkText, linkTo, onSubmit, isRegister }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


	const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };


	return (
		<form className="authForm" onSubmit={handleSubmit}>
			<h2 className='authTitle'>{title}</h2>
			{isRegister && (
				<input
					className='authFormInput'
					type="text"
					placeholder="Nome"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			)}
			<input
				className='authFormInput'
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				className='authFormInput'
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>

			<button className='btnSubmit' type="submit">{buttonText}</button>
			<Link className="btnLink" to={linkTo}>{linkText}</Link>
		</form>
	)
}

export default AuthForm;