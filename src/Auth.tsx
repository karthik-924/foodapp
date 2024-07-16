import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactNode } from "react";

const Auth = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        // console.log(uid);
        if (uid===undefined || uid===null) {
            navigate('/login');
        }
    }, [navigate]);

    return children;
};

export default Auth;
