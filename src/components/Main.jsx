import Formulario from './Formulario'
import InputSubmit from '../atoms/InputSubmit'
import '../assets/Styles/Main.css'

function Main() {
  return (
    <div className="global-container">
      <section className="form-container">
        <Formulario />
        <InputSubmit />
      </section>
    </div>
  )
}

export default Main
