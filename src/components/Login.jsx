function Login(props) {
  // susikurti state email ir passwordui.
  // susieti su two way binding inputus su state
  // atvaizduoti htmle/jsx ivestas reiksmes
  return (
    <div>
      <form className='card'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password ' />
        <button type='submit'>Login</button>
      </form>

      <div className='card'>
        <h3>Email: </h3>
        <h3>Password: </h3>
      </div>
    </div>
  );
}
export default Login;
