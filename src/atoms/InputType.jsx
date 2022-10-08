function InputType(prop) {
  const handleFocus = () => {
    console.log('Evento focus')
  }
  const handleBlur = () => {
    console.log(event.target.dispatchEvent)
  }

  return (
    <>
      <input
        type={prop.type}
        id={prop.id}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </>
  )
}

export default InputType
