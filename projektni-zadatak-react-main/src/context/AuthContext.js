import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = Cookies.get('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    const storedUser = JSON.parse(Cookies.get('user') || '{}');
    if (!(storedUser.username === username && storedUser.password === password)) {
      setUser(storedUser);
      navigate('/');
    } else {
      alert('I');
    }
  };

  const signup = (username, password) => {
    const newUser = { username, password };
    Cookies.set('user', JSON.stringify(newUser), { expires: 1 });
    setUser(newUser);
    navigate('/');
  };

  const logout = () => {
    Cookies.remove('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
