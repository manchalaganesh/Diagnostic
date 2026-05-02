import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  needsPasswordChange: boolean;
  login: (token: string, isDefaultPassword: boolean) => void;
  logout: () => void;
  completePasswordChange: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [needsPasswordChange, setNeedsPasswordChange] = useState(false);

  useEffect(() => {
    // Check local storage for existing session
    const token = localStorage.getItem('adminToken');
    const isDefault = localStorage.getItem('needsPasswordChange') === 'true';

    if (token) {
      setIsAuthenticated(true);
      setNeedsPasswordChange(isDefault);
    }
  }, []);

  const login = (token: string, isDefaultPassword: boolean) => {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('needsPasswordChange', String(isDefaultPassword));
    setIsAuthenticated(true);
    setNeedsPasswordChange(isDefaultPassword);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('needsPasswordChange');
    setIsAuthenticated(false);
    setNeedsPasswordChange(false);
  };

  const completePasswordChange = () => {
    localStorage.setItem('needsPasswordChange', 'false');
    setNeedsPasswordChange(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, needsPasswordChange, login, logout, completePasswordChange }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
