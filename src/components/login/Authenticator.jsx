import { Link } from "react-router-dom";

export const Authenticator = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Link to="/sign-in">
                    <button className="btn">Sign in</button>
                </Link>
                <Link to="/sign-up">
                    <button className="btn">Sign up</button>
                </Link>
            </div>
        </div>
    );
};
