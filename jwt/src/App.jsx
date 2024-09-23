import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const isAuthenticated = !!localStorage.getItem('token');

	return (
		<AuthProvider>
			<Router>
				{isAuthenticated ? (
					<>
						<Header />
						<Sidebar />
						<Routes>
							<Route path="/" element={<Navigate to="/dashboard" replace />} />
							<Route path="/register" element={<Register />} />
							<Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
							<Route path="/create-post" element={<PrivateRoute element={<CreatePost />} />} />
						</Routes>
					</>
				) : (
					<Routes>
						<Route path="/" element={<Login />} />
					</Routes>
				)}
			</Router>
		</AuthProvider>
	);
}

export default App;