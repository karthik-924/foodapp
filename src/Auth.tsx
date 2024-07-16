import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactNode } from "react";

const Auth = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        if (!uid) {
            navigate('/login');
        }
    }, [navigate]);

    return children;
};

export default Auth;
