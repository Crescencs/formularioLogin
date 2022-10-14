import "../assets/Styles/Formulario.css";
import { useState } from "react";
function Formulario() {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeLastname = (event) => setLastname(event.target.value)
  const handleChangeUsername = (event) => setUsername(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)

  const handleBlur = (event) => {
    fetch('http://44.201.115.90/user/usernameValidate/' + username)
      .then(response => response.json())
      .then(data => data.status ? alert('Usuario ocupado') : '')
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const option = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        username: username,
        password: password
      })
    }
    fetch('http://44.201.115.90/user', option)
      .then(response => response.json())
      .then(data => data.status ? alert('Registro exitoso') : alert('Ha ocurrido un error'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className="login-name">
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={handleChangeName} />
          </div>
          <div className="login-LastName">
            <label htmlFor="lastname">LastName:</label>
            <input type="text" value={lastname} onChange={handleChangeLastname} />
          </div>
          <div className="login-username">
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} onChange={handleChangeUsername} onBlur={handleBlur} />
          </div>
          <div className="login-password">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={handleChangePassword} />
          </div>
          <div className="login-submit">
            <button className="login-submit_btn">Log In</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default Formulario;
