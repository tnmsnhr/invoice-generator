import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

interface ProtectedRouteProps {
    isAllowed: boolean;
    redirectPath?: string;
    children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAllowed, redirectPath = '/', children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAllowed) {
            navigate(redirectPath, { replace: true });
        }
    }, [isAllowed, navigate, redirectPath]);

    if (!isAllowed) {
        return null; // or you can show a loading indicator if needed
    }

    return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
