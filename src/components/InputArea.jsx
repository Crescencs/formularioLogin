import Label from '../atoms/Label'
import InputType from '../atoms/InputType'

function InputArea(prop) {
  return (
    <div className="conteiner">
      <Label id={prop.id} label={prop.label} />
      <br />
      <InputType type={prop.type} id={prop.id} name={prop.id} />
    </div>
  )
}

export default InputArea
