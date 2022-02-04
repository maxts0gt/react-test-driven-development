import { useState } from 'react';
import axios from 'axios';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  let disabled = true;

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const onChangePasswordRepeat = (event) => {
    const inputPassword = event.target.value;
    setPasswordRepeat(inputPassword);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(username + ' ' + email + ' ' + password);
    const body = {
      username,
      email,
      password,
    };
    axios.post('/api/1.0/users', body);
  };

  if (password && passwordRepeat) {
    disabled = password !== passwordRepeat;
  }

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input value={username} id="username" onChange={onChangeUsername} />
        <label htmlFor="email">E-mail</label>
        <input value={email} id="email" onChange={onChangeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChangePassword} />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input
          id="passwordRepeat"
          type="password"
          onChange={onChangePasswordRepeat}
        />
        <button disabled={disabled} onClick={submit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUpPage;
