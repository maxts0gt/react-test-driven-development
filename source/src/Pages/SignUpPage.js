import { useState } from 'react';

function SignUpPage() {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  let disabled = true;

  const onChangePassword = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
  };

  const onChangePasswordRepeact = (event) => {
    const inputPassword = event.target.value;
    setPasswordRepeat(inputPassword);
  };

  if (password && passwordRepeat) {
    disabled = password !== passwordRepeat;
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="email">E-mail</label>
      <input id="email" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" onChange={onChangePassword} />
      <label htmlFor="password">Password Repeat</label>
      <input id="password" type="password" onChange={onChangePasswordRepeact} />
      <button disabled={disabled}>Sign Up</button>
    </div>
  );
}
export default SignUpPage;
