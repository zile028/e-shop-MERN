import React, {useState} from 'react';
import "./AuthPage.scss";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export const ShowLoginFormContext = React.createContext()
export const ShowRegisterFormContext = React.createContext()

function AuthPage() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const showLoginForm = () => {
        setIsLoginForm(true)
    }
    const showRegisterForm = () => {
        setIsLoginForm(false)
    }

    return (
        <div className="auth-wrapper">
            <h1>Authentication login</h1>
            <div>
                <button onClick={showLoginForm}>LOGIN</button>
                <button onClick={showRegisterForm}>REGISTER</button>
            </div>
            {/*{isLoginForm ? <LoginForm/> : <RegisterForm showLoginForm={showLoginForm}/>}*/}
            <ShowLoginFormContext.Provider value={showLoginForm}>
                <ShowRegisterFormContext.Provider value={showRegisterForm}>
                    {isLoginForm ? <LoginForm/> : <RegisterForm/>}
                </ShowRegisterFormContext.Provider>
            </ShowLoginFormContext.Provider>
        </div>
    );
}

export default AuthPage;