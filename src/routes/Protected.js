import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthenticationContext } from '../pages/context/Authentication';

function Protected({ children }) {
  const { user, loader } = useContext(AuthenticationContext);

  const location = useLocation();

  if (loader) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
      </div>
    );
  }

  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default Protected;
