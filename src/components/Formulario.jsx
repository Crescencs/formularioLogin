import InputArea from './InputArea'
import titulo from '../assets/Styles/Main.css'

function Formulario() {
  const InputType = [
    {
      id: 'user',
      label: 'User: ',
      type: 'text',
    },
    {
      id: 'password',
      label: 'Password: ',
      type: 'password',
    },
  ]

  return (
    <>
      <h2>Log in</h2>
      {InputType.map((tipo) => {
        return <InputArea label={tipo.label} id={tipo.id} type={tipo.type} />
      })}
    </>
  )
}

export default Formulario
