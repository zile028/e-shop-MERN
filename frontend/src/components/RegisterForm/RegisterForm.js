import React, {useState, useContext} from 'react';
import AuthService from "../../services/authService";
import "./style.scss"
import {ShowLoginFormContext} from "../../pages/AuthPage";

function RegisterForm() {
    //state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isValidForm, setIsValidForm] = useState(true);
    //context
    const showLoginForm = useContext(ShowLoginFormContext);

    const onUsernameInput = (e) => setUsername(e.target.value)
    const onPasswordInput = (e) => setPassword(e.target.value)
    const onFirstNameInput = (e) => setFirstName(e.target.value)
    const onLastNameInput = (e) => setLastName(e.target.value)
    const onEmailInput = (e) => setEmail(e.target.value)

    const showLogin = () => {
        showLoginForm()
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (!username || !password || !firstName || !lastName || !email) {
            setIsValidForm(false)
            return
        }
        setIsValidForm(true);

        AuthService.register({username, password, email, lastName, firstName}).then(res => {
            if (res && res.status === 200) {
                console.log(res.data.registerStatus)
                if (res.data.registerStatus) {
                    showLogin()
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <form className="register-form" onSubmit={onSubmitForm} method="post">

            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" onInput={onFirstNameInput}/>

            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" onInput={onLastNameInput}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" onInput={onEmailInput}/>

            <label htmlFor="username">User name</label>
            <input type="text" id="username" onInput={onUsernameInput}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" onInput={onPasswordInput}/>


            <button>Register</button>

            {!isValidForm && <p>Username and password is required!</p>}
        </form>
    );
}

export default RegisterForm;


