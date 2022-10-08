import "../assets/Styles/Formulario.css";
function Formulario() {
  return (
    <>
      <div className="form-container">
        <form action="">
          <h2>Sign in</h2>
          <div className="login-username">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="login-password">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="login-submit">
            <input
              type="submit"
              value="Iniciar sesion"
              className="login-submit_btn"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Formulario;
