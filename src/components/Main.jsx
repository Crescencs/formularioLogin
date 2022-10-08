import Formulario from './Formulario'
import InputSubmit from '../atoms/InputSubmit'
import '../assets/Styles/Main.css'

function Main() {
  const handleSubmit = (e) => {
    //esta funcion debe de estar siempre en un formulario
    e.preventDefault()
    console.log('Submit')
  }
  return (
    <div className="global-container">
      <form action="" onSubmit={handleSubmit}>
        <section className="form-container">
          <Formulario />
          <InputSubmit />
        </section>
      </form>
    </div>
  )
}

export default Main
