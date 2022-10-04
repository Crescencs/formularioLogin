function Label(prop) {
  return (
    <>
      <label for={prop.id}>{prop.label}</label>
    </>
  )
}

export default Label
