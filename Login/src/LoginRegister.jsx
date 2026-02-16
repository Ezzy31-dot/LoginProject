import  { useState } from 'react'
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import profileLog from './assets/UTOL.png'

const LoginRegister = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [rememberMe,setRememberMe] = useState('false');
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange= (e) => {
        setPassword(e.target.value);
    };
    const handleRememberChange = (e) => {
        setRememberMe(e.target.checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert('please fill in all fields');
            return;
        }
        console.log('logging in with:', {username,password,rememberMe});
        setUsername('');
        setPassword ('');
        setRememberMe (false);

    };

    const handleRegister = () => {
        alert('Register functionality not implemented yet');
    };

    const handleForgtPassword = () => {
        alert('Forgot password functionality not implemented yet');
    };
    


    
    return(
        <div className='wrapper'>
        <div className='form-box login'>
        <form onSubmit={handleSubmit}>
            <div className='logo-container'><img src={profileLog} alt="Logo" className="Logo"/> </div>
    
            <div className="input-box">
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
                />
            <FaUser className='icon'/>
            </div>
            
            <div className="input-box">
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            <FaLock className='icon'/>
            </div>
            

            <div className="remember-forgot">
                <label>
                    <input
                    type='checkbox'
                    checked={rememberMe}
                    onChange={handleRememberChange}
                    />
                    Remember me
                </label>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
        </div>
    
    );
};

export default LoginRegister;