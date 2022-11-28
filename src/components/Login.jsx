import { useState } from 'react';

function Login(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function emailInputHandler(e) {
    setEmailValue(e.target.value);
  }

  function passwordInputHandler(e) {
    setPasswordValue(e.target.value);
  }
  // susikurti state email ir passwordui.
  // susieti su two way binding inputus su state
  // atvaizduoti htmle/jsx ivestas reiksmes

  function loginHandler(event) {
    // stabdyti puslapio perkrovima
    event.preventDefault();
    console.log('react con trolls the form');
    // cia mes dirbam su state reiksmem  emailValue ir passwordValue
    console.log({ emailValue, passwordValue });

    // mini validation: jei neivesta kazkuri reikme tai klaida

    if (emailValue === '' || passwordValue === '') {
      console.warn('labai blogai nes kazkas neivesta !!!!!!!!!!');
      return;
    }

    console.log('viskas gerai siunciam forma >>>>>> ');
  }

  return (
    <div>
      <form onSubmit={loginHandler} className='card'>
        <input
          onChange={emailInputHandler}
          value={emailValue}
          type='text'
          placeholder='Email'
        />
        <input
          onChange={passwordInputHandler}
          value={passwordValue}
          type='password'
          placeholder='Password '
        />
        <button type='submit'>Login</button>
      </form>

      <div className='card'>
        <h3>Email: {emailValue}</h3>
        <h3>Password: {passwordValue}</h3>
      </div>
    </div>
  );
}
export default Login;
